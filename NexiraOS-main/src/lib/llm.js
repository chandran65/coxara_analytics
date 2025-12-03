
// src/lib/llm.js

export const LLM_PROVIDERS = {
    OPENAI: {
        id: 'openai',
        name: 'OpenAI (GPT-4)',
        baseUrl: 'https://api.openai.com/v1',
        defaultModel: 'gpt-4-turbo-preview'
    },
    ANTHROPIC: {
        id: 'anthropic',
        name: 'Anthropic (Claude 3)',
        baseUrl: 'https://api.anthropic.com/v1', // Note: Client-side calls to Anthropic often fail due to CORS. Proxy usually needed.
        defaultModel: 'claude-3-opus-20240229'
    },
    GROQ: {
        id: 'groq',
        name: 'Groq (Llama 3 / Mixtral)',
        baseUrl: 'https://api.groq.com/openai/v1',
        defaultModel: 'llama3-70b-8192'
    },
    HUGGINGFACE: {
        id: 'huggingface',
        name: 'Hugging Face (Open Source)',
        baseUrl: 'https://api-inference.huggingface.co/models',
        defaultModel: 'meta-llama/Meta-Llama-3-8B-Instruct'
    },
    OLLAMA: {
        id: 'ollama',
        name: 'Local (Ollama)',
        baseUrl: 'http://localhost:11434/v1',
        defaultModel: 'llama3'
    },
    GOOGLE: {
        id: 'google',
        name: 'Google (Gemini)',
        baseUrl: 'https://generativelanguage.googleapis.com/v1beta/models',
        defaultModel: 'gemini-1.5-flash-001'
    }
};

const SYSTEM_PROMPT = `
You are NexiraOS, an advanced data intelligence platform.
Your goal is to assist users with data analysis, visualization, and reasoning.

You must ALWAYS respond in valid JSON format with the following structure:
{
  "type": "analysis" | "text",
  "reasoning": "Brief explanation of your thought process and intent detection.",
  "message": "The natural language response to the user.",
  "visualization": { ... } // Optional, null if no visualization needed
}

If a visualization is needed, the "visualization" object must have:
- type: "bar" | "line" | "scatter"
- title: "Chart Title"
- xKey: "key_for_x_axis"
- yKey: "key_for_y_axis"
- interpretation: "One sentence insight about the data."
- data: [ { "name": "Category", "value": 100 }, ... ]

Context:
- You are running in a browser environment.
- If the user provides data, use it. If not, generate realistic mock data for the visualization.
`;

export const generateLLMResponse = async (messages, config, connectedSource) => {
    const { provider, apiKey, model, baseUrl } = config;
    const selectedModel = model || LLM_PROVIDERS[provider]?.defaultModel;

    // Prepare context-aware system prompt
    let currentSystemPrompt = SYSTEM_PROMPT;
    currentSystemPrompt += `\n\nSystem Configuration:\n- Current Model: ${selectedModel}\n- Provider: ${LLM_PROVIDERS[provider]?.name}`;

    if (connectedSource) {
        currentSystemPrompt += `\n\nActive Data Source: ${connectedSource.name} (Type: ${connectedSource.type})`;
    }

    if (connectedSource && connectedSource.columns) {
        currentSystemPrompt += `\nData Schema: ${connectedSource.columns.join(', ')}`;
    }

    if (connectedSource && connectedSource.data) {
        currentSystemPrompt += `\nData Sample (First 5 rows): ${JSON.stringify(connectedSource.data.slice(0, 5))}`;
    }

    const payload = {
        model: selectedModel,
        messages: [
            { role: 'system', content: currentSystemPrompt },
            ...messages.map(m => ({ role: m.role, content: m.content }))
        ],
        temperature: 0.7,
        max_tokens: 1024,
        response_format: { type: "json_object" } // Force JSON mode for supported models
    };

    // Special handling for Hugging Face Inference API (Standard)
    if (provider === 'HUGGINGFACE') {
        const fetchUrl = `${baseUrl}/${selectedModel}`;

        // Convert messages to a single prompt string for standard HF API
        // This is more reliable across different models than the /v1/chat/completions endpoint
        const prompt = messages.map(m => {
            if (m.role === 'system') return `<|system|>\n${m.content}</s>\n`;
            if (m.role === 'user') return `<|user|>\n${m.content}</s>\n`;
            return `<|assistant|>\n${m.content}</s>\n`;
        }).join('') + "<|assistant|>\n";

        const hfPayload = {
            inputs: prompt,
            parameters: {
                max_new_tokens: 1024,
                return_full_text: false,
                temperature: 0.7
            }
        };

        try {
            const response = await fetch(fetchUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify(hfPayload)
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || `HF API Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            // HF Standard API returns an array: [{ generated_text: "..." }]
            let content = Array.isArray(data) ? data[0].generated_text : data.generated_text;

            try {
                // Try to find JSON in the response
                const jsonMatch = content.match(/\{[\s\S]*\}/);
                if (jsonMatch) {
                    return JSON.parse(jsonMatch[0]);
                }
                throw new Error("No JSON found");
            } catch (e) {
                return {
                    type: 'text',
                    reasoning: "Model output was not valid JSON. Showing raw text.",
                    message: content,
                    visualization: null
                };
            }
        } catch (error) {
            console.error("HF Request Failed:", error);
            if (error.message.includes('Failed to fetch')) {
                throw new Error("Network Error (CORS). This is common with Hugging Face from the browser. Try using a CORS proxy or a different provider like Groq.");
            }
            throw error;
        }
    }

    // Special handling for Google Gemini
    if (provider === 'GOOGLE') {
        // Ensure clean model name (remove 'models/' prefix if user added it)
        const cleanModel = selectedModel.replace(/^models\//, '');

        // Use configured baseUrl or fallback to default
        let effectiveBaseUrl = baseUrl || LLM_PROVIDERS.GOOGLE.baseUrl;

        // Remove trailing slash
        effectiveBaseUrl = effectiveBaseUrl.replace(/\/$/, '');

        // Ensure we have the /models suffix if not present
        const urlBase = effectiveBaseUrl.endsWith('/models') ? effectiveBaseUrl : `${effectiveBaseUrl}/models`;

        const fetchUrl = `${urlBase}/${cleanModel}:generateContent?key=${apiKey.trim()}`;

        console.log("Gemini Request URL:", fetchUrl); // Debug log

        const contents = messages.map(m => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.content }]
        }));

        const geminiPayload = {
            contents,
            systemInstruction: {
                parts: [{ text: currentSystemPrompt }]
            },
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 1024,
                responseMimeType: "application/json"
            }
        };

        try {
            const response = await fetch(fetchUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(geminiPayload)
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error("Gemini API Error Details:", errorData);
                throw new Error(errorData.error?.message || `Gemini API Error: ${response.status} ${response.statusText} (URL: ${fetchUrl})`);
            }

            const data = await response.json();

            // Check for safety blocking or other finish reasons
            const candidate = data.candidates?.[0];
            const finishReason = candidate?.finishReason;

            if (finishReason && finishReason !== 'STOP') {
                console.warn("Gemini Finish Reason:", finishReason, candidate?.safetyRatings);
                if (finishReason === 'SAFETY') {
                    throw new Error("Response blocked by safety filters. Please try a different query.");
                }
                if (finishReason === 'RECITATION') {
                    throw new Error("Response blocked due to recitation check.");
                }
            }

            // Gemini returns candidates[0].content.parts[0].text
            const content = candidate?.content?.parts?.[0]?.text;

            if (!content) {
                console.error("Gemini Empty Response Data:", JSON.stringify(data, null, 2));
                throw new Error(`No content returned from Gemini (Finish Reason: ${finishReason || 'Unknown'})`);
            }

            return JSON.parse(content);
        } catch (error) {
            console.error("Gemini Request Failed:", error);
            throw error;
        }
    }

    // Standard OpenAI Compatible Providers (OpenAI, Groq, Ollama)
    const fetchUrl = `${baseUrl}/chat/completions`;

    try {
        const response = await fetch(fetchUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error?.message || `API Error: ${response.statusText}`);
        }

        const data = await response.json();
        const content = data.choices[0].message.content;

        try {
            return JSON.parse(content);
        } catch (e) {
            console.error("Failed to parse LLM JSON response:", content);
            // Fallback if LLM didn't return valid JSON
            return {
                type: 'text',
                reasoning: "Model failed to output JSON. Raw response captured.",
                message: content,
                visualization: null
            };
        }

    } catch (error) {
        console.error("LLM Request Failed:", error);
        throw error;
    }
};
