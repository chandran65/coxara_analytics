export const navigationData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Meet Our People",
    path: "/company/team",
  },
  {
    title: "Analytical Services",
    path: "/services",
    items: [
      { label: "AI Services", isHeader: true },
      {
        label: "AI Strategy & Governance",
        path: "/services#gen-ai",
        description: "Build responsible AI frameworks for your enterprise",
        icon: "strategy",
      },
      {
        label: "Agentic AI",
        path: "/services#gen-ai",
        description: "Autonomous agents that drive business outcomes",
        icon: "agent",
      },
      {
        label: "Coxara Lab",
        path: "/services#gen-ai",
        description: "Rapid prototyping and experimentation hub",
        icon: "lab",
      },
      { label: "Advanced Analytics", isHeader: true },
      {
        label: "Advanced Predictive Analytics",
        path: "/services#data-science",
        description: "Forecast outcomes with ML-powered models",
        icon: "chart",
      },
      {
        label: "Real-time Analytics",
        path: "/services#engineering",
        description: "Stream processing and live dashboards",
        icon: "realtime",
      },
      {
        label: "Data Modelling",
        path: "/services#data-science",
        description: "Enterprise-grade data architecture design",
        icon: "model",
      },
      {
        label: "Data Reporting",
        path: "/services#data-science",
        description: "Automated insights and executive dashboards",
        icon: "report",
      },
    ],
  },
  {
    title: "Products",
    path: "/products",
    items: [
      { label: "Data & Modeling", isHeader: true },
      {
        label: "Data Studio",
        path: "/products#data-studio",
        description: "End-to-end pipelines, modeling & governance",
        icon: "database",
      },
      {
        label: "Domain Intelligence Packs",
        path: "/products#domain-intelligence",
        description: "Pre-built industry analytics & KPIs",
        icon: "cube",
      },
      { label: "Experimentation & Planning", isHeader: true },
      {
        label: "Experimentation Studio",
        path: "/products#experimentation-studio",
        description: "A/B testing, causal inference & uplift",
        icon: "beaker",
      },
      {
        label: "Forecasting & Planning Studio",
        path: "/products#forecasting-studio",
        description: "ML-powered forecasts & scenario planning",
        icon: "trendup",
      },
      {
        label: "Decision Automation Studio",
        path: "/products#decision-automation",
        description: "Hybrid rules + ML decision engine",
        icon: "cog",
      },
    ],
  },
  {
    title: "Resources",
    path: "/resources",
  },
  {
    title: "Contact",
    path: "/company/contact",
  },
];
