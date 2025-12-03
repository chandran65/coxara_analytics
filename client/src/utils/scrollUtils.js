// Utility function to handle smooth scrolling with navbar offset
export const scrollToElement = (elementId, navbarHeight = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

// Utility to scroll to top of page
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Check if a path is an anchor link (starts with #)
export const isAnchorLink = (path) => {
  return path && path.startsWith("#");
};

// Extract section ID from path (e.g., "/services#analytics" -> "analytics")
export const extractSectionId = (path) => {
  if (!path) return null;
  const hashIndex = path.indexOf("#");
  return hashIndex !== -1 ? path.substring(hashIndex + 1) : null;
};

// Extract base path from path (e.g., "/services#analytics" -> "/services")
export const extractBasePath = (path) => {
  if (!path) return null;
  const hashIndex = path.indexOf("#");
  return hashIndex !== -1 ? path.substring(0, hashIndex) : path;
};
