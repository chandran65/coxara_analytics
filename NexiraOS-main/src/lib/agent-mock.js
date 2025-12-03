
export const processUserQuery = async (query, context = null) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const lowerQuery = query.toLowerCase();
  const sourceName = context?.name || 'the default dataset';

  // Helper to format response based on context
  const getContextualMessage = (baseMessage) => {
    if (context) {
      return `Based on the analysis of '${context.name}', ${baseMessage}`;
    }
    return baseMessage;
  };

  if (lowerQuery.includes('sales') || lowerQuery.includes('revenue')) {
    return {
      type: 'analysis',
      reasoning: `User is requesting sales performance data. Context: ${context ? context.name : 'None'}. Intent identified as 'Data Retrieval & Visualization'. Mapping to 'sales_overview' dataset.`,
      message: getContextualMessage("I've retrieved the sales performance data for the current quarter. Here is the breakdown by region."),
      visualization: {
        type: 'bar',
        title: `Quarterly Sales by Region (${context ? context.name : 'Demo Data'})`,
        data: [
          { name: 'North', value: 45000 },
          { name: 'South', value: 32000 },
          { name: 'East', value: 58000 },
          { name: 'West', value: 49000 },
        ],
        xKey: 'name',
        yKey: 'value',
        interpretation: "The East region is outperforming others by 15%, while the South region is lagging behind targets."
      }
    };
  }

  if (lowerQuery.includes('trend') || lowerQuery.includes('growth')) {
    return {
      type: 'analysis',
      reasoning: `User is asking for trend analysis. Context: ${context ? context.name : 'None'}. Intent identified as 'Statistical Analysis'. Calculating moving averages and growth rates.`,
      message: getContextualMessage("here is the user growth trend over the last 6 months. We're seeing a steady increase."),
      visualization: {
        type: 'line',
        title: 'User Growth Trend',
        data: [
          { name: 'Jan', value: 1000 },
          { name: 'Feb', value: 1200 },
          { name: 'Mar', value: 1150 },
          { name: 'Apr', value: 1600 },
          { name: 'May', value: 2100 },
          { name: 'Jun', value: 2400 },
        ],
        xKey: 'name',
        yKey: 'value',
        interpretation: "Growth accelerated in Q2, likely due to the new marketing campaign launched in April."
      }
    };
  }

  if (lowerQuery.includes('anomaly') || lowerQuery.includes('outlier')) {
    return {
      type: 'analysis',
      reasoning: `User is looking for anomalies. Context: ${context ? context.name : 'None'}. Intent identified as 'Anomaly Detection'. Running isolation forest algorithm on transaction data.`,
      message: getContextualMessage("I detected 3 potential anomalies in the transaction logs. These deviate significantly from the standard deviation."),
      visualization: {
        type: 'scatter',
        title: 'Transaction Anomalies',
        data: [
          { x: 10, y: 20, type: 'normal' },
          { x: 12, y: 25, type: 'normal' },
          { x: 50, y: 90, type: 'anomaly' },
          { x: 15, y: 22, type: 'normal' },
          { x: 14, y: 28, type: 'normal' },
          { x: 45, y: 85, type: 'anomaly' },
        ],
        xKey: 'x',
        yKey: 'y',
        interpretation: "The highlighted points represent transactions with unusually high value and frequency compared to the cluster."
      }
    };
  }

  // Handle Schema/Structure queries
  if (lowerQuery.includes('schema') || lowerQuery.includes('structure') || lowerQuery.includes('columns') || lowerQuery.includes('fields')) {
    if (context && context.columns) {
      return {
        type: 'text',
        reasoning: `User is asking for the schema of '${context.name}'. Retrieved column metadata from ingestion context.`,
        message: `The dataset '${context.name}' contains the following fields:\n\n` +
          context.columns.map(c => `- **${c}**`).join('\n') +
          `\n\nI can analyze trends or distributions based on these fields.`,
        visualization: null
      };
    }
  }

  // Handle "Unique" or "Distinct" queries (e.g., "unique model")
  if (lowerQuery.includes('unique') || lowerQuery.includes('distinct') || lowerQuery.includes('list')) {
    if (context && context.data && context.columns) {
      // Find which column the user is asking about
      const targetColumn = context.columns.find(col => lowerQuery.includes(col.toLowerCase()));

      if (targetColumn) {
        // Calculate unique values
        const uniqueValues = [...new Set(context.data.map(row => row[targetColumn]))].filter(Boolean);
        const displayValues = uniqueValues.slice(0, 10); // Limit to top 10
        const remaining = uniqueValues.length - 10;

        return {
          type: 'text',
          reasoning: `User asked for unique values of '${targetColumn}'. Scanned ${context.data.length} rows of cached data.`,
          message: `I found ${uniqueValues.length} unique values for **${targetColumn}** in the sample data:\n\n` +
            displayValues.map(v => `- ${v}`).join('\n') +
            (remaining > 0 ? `\n\n...and ${remaining} more.` : ''),
          visualization: null
        };
      }
    }
  }

  // Handle Sample Data / Preview queries
  if (lowerQuery.includes('sample') || lowerQuery.includes('preview') || lowerQuery.includes('show data') || lowerQuery.includes('rows')) {
    if (context && context.data && context.data.length > 0) {
      const sampleRows = context.data.slice(0, 5);
      const headers = context.columns;

      // Build Markdown Table
      let tableMd = `| ${headers.join(' | ')} |\n| ${headers.map(() => '---').join(' | ')} |\n`;
      sampleRows.forEach(row => {
        tableMd += `| ${headers.map(h => row[h] || '').join(' | ')} |\n`;
      });

      return {
        type: 'text',
        reasoning: `User asked for sample data. Retrieving first 5 rows from '${context.name}'.`,
        message: `Here is a sample of the data from **${context.name}**:\n\n${tableMd}\n\nI have loaded ${context.data.length} rows for analysis.`,
        visualization: null
      };
    }
  }

  // Handle questions about the LLM/Model
  if (lowerQuery.includes('llm') || lowerQuery.includes('model') || lowerQuery.includes('gpt') || lowerQuery.includes('claude') || lowerQuery.includes('ai')) {
    return {
      type: 'text',
      reasoning: "User is asking about the underlying AI model. System is currently in Mock/Demo mode.",
      message: "I am currently running on the **NexiraOS Simulated Agent Engine** (Demo Mode). \n\nTo use a real LLM (like GPT-4, Claude 3, Gemini, or Llama 3), please click the **Settings (Gear Icon)** in the chat header and configure your API key.",
      visualization: null
    };
  }

  // Handle questions about the file/source
  if (lowerQuery.includes('file') || lowerQuery.includes('source') || lowerQuery.includes('refereed') || lowerQuery.includes('using')) {
    if (context) {
      return {
        type: 'text',
        reasoning: "User is asking about the active data source. Retrieving metadata from the connected context.",
        message: `I am currently analyzing the file '${context.name}'. I have access to ${context.data ? context.data.length : 0} rows of sample data with columns: ${context.columns.join(', ')}.`,
        visualization: null
      };
    } else {
      return {
        type: 'text',
        reasoning: "User asked about the source, but no source is connected.",
        message: "I am currently using a demo dataset because no external source is connected. You can connect a CSV, PDF, or database using the 'Connect Source' button.",
        visualization: null
      };
    }
  }

  // Handle questions about limitations / "why it works for few questions"
  if (lowerQuery.includes('why') || lowerQuery.includes('limited') || lowerQuery.includes('few questions') || lowerQuery.includes('working for')) {
    return {
      type: 'text',
      reasoning: "User is asking about system limitations. Explaining the difference between the keyword-based Mock Engine and a real LLM.",
      message: "You are currently using the **Simulated Demo Engine**. \n\nThis mode uses simple keyword matching (e.g., 'sales', 'trend', 'schema') to demonstrate the UI capabilities without needing an API key.\n\n**To unlock full conversational intelligence:**\n1. Click the **Settings (Gear)** icon above.\n2. Select a provider (OpenAI, Google Gemini, Hugging Face, etc.).\n3. Enter your API Key.\n\nOnce connected to a real LLM, I will be able to understand and answer any question about your data.",
      visualization: null
    };
  }

  return {
    type: 'text',
    reasoning: "Intent unclear. Defaulting to conversational assistance.",
    message: `I can help you ingest data, perform analysis, or visualize trends from '${sourceName}'. \n\n**Demo Commands:**\n- "Show me sales data"\n- "Analyze user growth"\n- "Explain the schema"\n- "Show sample data" \n\n*Connect a Real LLM in Settings for full capabilities.*`,
    visualization: null
  };
};
