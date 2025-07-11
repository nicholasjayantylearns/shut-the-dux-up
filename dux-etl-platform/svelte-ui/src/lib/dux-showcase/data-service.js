// Configuration for data sources
let config = {
  useLiveData: false
};

export function setConfig(newConfig) {
  config = { ...config, ...newConfig };
}

export function getConfig() {
  return config;
}

// Mock data for development
const mockInsightChains = [
  {
    insight: {
      id: "insight-001",
      title: "User Research Synthesis",
      description: "Key findings from user interviews"
    },
    evidenceQuote: "Users consistently struggle with the onboarding process, taking an average of 15 minutes to complete what should be a 3-minute task.",
    evidenceCitation: "TCOA Interviews, Session 3",
    problem: {
      id: "problem-001",
      title: "Complex Onboarding",
      description: "Users find the initial setup process overwhelming",
      severity: "high"
    },
    behavior: {
      id: "behavior-001",
      title: "Abandonment Pattern",
      description: "Users drop off at step 3 of 5 in onboarding",
      frequency: "frequent"
    },
    result: {
      id: "result-001",
      title: "Reduced Conversion",
      description: "Only 23% of users complete onboarding",
      impact: "critical"
    }
  },
  {
    insight: {
      id: "insight-002",
      title: "Feature Discovery Gap",
      description: "Users unaware of key functionality"
    },
    evidenceQuote: "When asked about advanced features, 78% of participants had no idea they existed, despite being prominently placed in the interface.",
    evidenceCitation: "Usability Testing, Round 2",
    problem: {
      id: "problem-002",
      title: "Hidden Features",
      description: "Important functionality is not discoverable",
      severity: "medium"
    },
    behavior: {
      id: "behavior-002",
      title: "Surface-Level Usage",
      description: "Users only use basic features",
      frequency: "very frequent"
    },
    result: {
      id: "result-002",
      title: "Low Feature Adoption",
      description: "Advanced features used by only 12% of users",
      impact: "moderate"
    }
  }
];

// Live API service
async function fetchFromAPI(endpoint) {
  const baseUrl = 'http://localhost:8000'; // Default API URL
  const response = await fetch(`${baseUrl}${endpoint}`);
  
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }
  
  return response.json();
}

// Main data service function
export async function getInsightChains(useLiveData = false) {
  if (useLiveData) {
    try {
      return await fetchFromAPI('/api/insight-chains');
    } catch (error) {
      console.error('Failed to fetch from API, falling back to mock data:', error);
      return mockInsightChains;
    }
  } else {
    // Simulate API delay for realistic feel
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockInsightChains;
  }
}

// Additional data services for other DUX objects
export async function getProblems() {
  if (config.useLiveData) {
    return await fetchFromAPI('/api/problems');
  }
  return mockInsightChains.map(chain => chain.problem);
}

export async function getBehaviors() {
  if (config.useLiveData) {
    return await fetchFromAPI('/api/behaviors');
  }
  return mockInsightChains.map(chain => chain.behavior);
}

export async function getResults() {
  if (config.useLiveData) {
    return await fetchFromAPI('/api/results');
  }
  return mockInsightChains.map(chain => chain.result);
} 