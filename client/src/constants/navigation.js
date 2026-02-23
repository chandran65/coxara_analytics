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
      { label: "AI Strategy & Governance", path: "/services#ai-strategy" },
      { label: "Agentic AI", path: "/services#agentic-ai" },
      { label: "Coxara Lab", path: "/services#coxara-lab" },
      { label: "Advanced Analytics", isHeader: true },
      { label: "Advanced Predictive Analytics", path: "/services#data-science" },
      { label: "Real-time Analytics", path: "/services#engineering" },
      { label: "Data Modelling", path: "/services#data-science" },
      { label: "Data Reporting", path: "/services#data-science" },
    ],
  },
  {
    title: "Resources",
    path: "/resources",
    items: [
      { label: "Whitepapers", path: "/resources#whitepapers" },
      { label: "Thought Leadership", path: "/resources#thought-leadership" },
    ],
  },
  {
    title: "Contact",
    path: "/company/contact",
  },
];
