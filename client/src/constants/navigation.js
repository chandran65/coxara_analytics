export const navigationData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Roxbee",
    path: "/products",
  },
  {
    title: "Services",
    path: "/services",
    items: [
      { label: "AI Capabilities", isHeader: true },
      {
        label: "Generative AI & LLMs",
        path: "/services#gen-ai",
        description: "RAG, Custom Foundation Models, and Content Engines",
        icon: "sparkle",
      },
      {
        label: "Vision AI & Intelligence",
        path: "/services#vision-ai",
        description: "Pattern recognition and visual quality assurance",
        icon: "compass",
      },
      { label: "Strategic Intelligence", isHeader: true },
      {
        label: "Conversational Intelligence",
        path: "/services#conversational-ai",
        description: "AI Assistants and Voice-to-Insight platforms",
        icon: "bot",
      },
      {
        label: "Strategic AI Consulting",
        path: "/services#strategic-consulting",
        description: "Readiness audits and autonomous growth roadmaps",
        icon: "strategy",
      },
    ],
  },
  {
    title: "Resource Hub",
    path: "/resources",
    items: [
      { label: "Insights", isHeader: true },
      {
        label: "The Blog",
        path: "/resources/blog",
        description: "Expert tips & analysis",
        icon: "thought",
      },
      {
        label: "Case Studies",
        path: "/resources/case-studies",
        description: "Real-world ROI",
        icon: "chart",
      },
      { label: "Deep Dives", isHeader: true },
      {
        label: "Whitepapers",
        path: "/resources/whitepapers",
        description: "Strategic research",
        icon: "report",
      },
      {
        label: "Toolkits",
        path: "/resources/toolkits",
        description: "Frameworks & templates",
        icon: "cube",
      },
      {
        label: "Webinars",
        path: "/resources/webinars",
        description: "Expert sessions",
        icon: "realtime",
      },
    ],
  },
  {
    title: "Contact Us",
    path: "/company/contact",
  },
];
