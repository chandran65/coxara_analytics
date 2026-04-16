const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'README.md',
  'client/src/pages/ResourcesPage.jsx',
  'client/src/pages/ProductsPage.jsx',
  'client/src/pages/ContactPage.jsx',
  'client/src/index.css',
  'client/src/components/layout/Footer.jsx',
  'client/src/components/common/ChatBot.jsx',
  'client/index.html',
  'client/src/components/layout/Navbar.jsx',
  'client/src/components/home/AboutSection.jsx',
  'client/src/components/home/FeaturedCaseStudy.jsx',
  'client/src/components/home/HeroCarousel.jsx',
  'client/src/components/home/ProductSection.jsx'
];

const basePath = '/Users/chandranvenkatesan/.gemini/antigravity/scratch/coxara_analytics';

filesToUpdate.forEach(file => {
  const fullPath = path.join(basePath, file);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    content = content.replace(/Coxara Analytics/g, 'Roxbee');
    content = content.replace(/Coxara/g, 'Roxbee');
    content = content.replace(/coxara/g, 'roxbee');
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
