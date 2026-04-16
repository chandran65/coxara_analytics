import os
import re

files_to_update = [
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
  'client/src/components/home/ProductSection.jsx',
  'client/src/components/home/HeroSection.jsx'
]

base_path = '/Users/chandranvenkatesan/.gemini/antigravity/scratch/coxara_analytics'

for file_name in files_to_update:
    full_path = os.path.join(base_path, file_name)
    if os.path.exists(full_path):
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()

        new_content = content.replace('Coxara Analytics', 'Roxbee')
        new_content = new_content.replace('Coxara', 'Roxbee')
        new_content = new_content.replace('coxara', 'roxbee')
        new_content = new_content.replace('COXARA', 'ROXBEE')

        if new_content != content:
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {file_name}")
