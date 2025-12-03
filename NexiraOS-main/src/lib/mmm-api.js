/**
 * MMM API Client
 * Handles communication with the Marketing Mix Modeling backend
 */

const MMM_API_BASE = '/api/mmm';

export const mmmApi = {
    /**
     * Check if MMM server is healthy
     */
    async healthCheck() {
        try {
            const response = await fetch('/api/health');
            return await response.json();
        } catch (error) {
            console.error('MMM server health check failed:', error);
            return { status: 'unavailable', error: error.message };
        }
    },

    /**
     * Train a new MMM model
     */
    async trainModel(data, config) {
        const response = await fetch(`${MMM_API_BASE}/train`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                experiment_id: config.experimentId || `exp_${Date.now()}`,
                data: data,
                config: {
                    kpi: config.kpi,
                    media_channels: config.mediaChannels,
                    control_vars: config.controlVars || [],
                    adstock_theta: config.adstockTheta || 0.5,
                    alpha: config.alpha || 1.0
                }
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Training failed');
        }

        return await response.json();
    },

    /**
     * Get results for an experiment
     */
    async getResults(experimentId) {
        const response = await fetch(`${MMM_API_BASE}/results/${experimentId}`);

        if (!response.ok) {
            throw new Error('Failed to fetch results');
        }

        return await response.json();
    },

    /**
     * Optimize budget allocation
     */
    async optimizeBudget(experimentId, totalBudget, constraints = {}) {
        const response = await fetch(`${MMM_API_BASE}/optimize`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                experiment_id: experimentId,
                total_budget: totalBudget,
                constraints: constraints
            })
        });

        if (!response.ok) {
            throw new Error('Optimization failed');
        }

        return await response.json();
    },

    /**
     * Run scenario analysis
     */
    async runScenario(experimentId, scenario) {
        const response = await fetch(`${MMM_API_BASE}/scenario`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                experiment_id: experimentId,
                scenario: scenario
            })
        });

        if (!response.ok) {
            throw new Error('Scenario analysis failed');
        }

        return await response.json();
    }
};

export default mmmApi;
