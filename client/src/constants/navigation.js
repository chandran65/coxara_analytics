export const navigationData = [
  {
    title: "About",
    path: "/company/about",
    items: [
      { label: "Company", isHeader: true },
      {
        label: "About Us",
        path: "/company/about",
        description: "Our mission, vision, and core values",
        icon: "building",
      },
      {
        label: "Meet Our People",
        path: "/company/team",
        description: "The leadership team and experts behind Coxara",
        icon: "users",
      },
    ],
  },
  {
    title: "Products",
    path: "/products",
    items: [
      { label: "Core AI Capabilities", isHeader: true },
      {
        label: "Answers to Decisions",
        path: "/products#data-studio",
        description: "Transform raw data into actionable insights",
        icon: "thought",
      },
      {
        label: "Business Context",
        path: "/products#experimentation-studio",
        description: "Semantic logic tailored to your specific metrics",
        icon: "beaker",
      },
      {
        label: "Data Backed Insights",
        path: "/products#forecasting-studio",
        description: "Verifiable results with end-to-end lineage",
        icon: "report",
      },
      { label: "Enterprise Deployment", isHeader: true },
      {
        label: "Proactive Intelligence",
        path: "/products#decision-automation",
        description: "Anomaly detection and emerging risk alerts",
        icon: "realtime",
      },
      {
        label: "Enterprise Integration",
        path: "/products#domain-intelligence",
        description: "Deploy securely on Cloud, on-prem, or hybrid",
        icon: "cube",
      },
    ],
  },
  {
    title: "Services",
    path: "/services",
    items: [
      { label: "AI Solutions", isHeader: true },
      {
        label: "Custom AI Development",
        path: "/services#engineering",
        description: "Scalable foundation models for enterprise scale",
        icon: "code",
      },
      {
        label: "Generative AI",
        path: "/services#gen-ai",
        description: "RAG, Assistants, and content generation",
        icon: "sparkle",
      },
      { label: "Data Intelligence", isHeader: true },
      {
        label: "Advanced Machine Learning",
        path: "/services#data-science",
        description: "Predictive analytics and risk forecasting",
        icon: "chart",
      },
      {
        label: "AI Consulting",
        path: "/services#training",
        description: "Readiness audits and AI roadmaps",
        icon: "compass",
      },
    ],
  },
  {
    title: "Resource Hub",
    path: "/resources",
  },
  {
    title: "Contact Us",
    path: "/company/contact",
  },
];
