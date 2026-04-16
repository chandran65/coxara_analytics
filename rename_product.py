import os
import re

files_to_update = [
  'client/src/pages/ServicesPage.jsx',
  'client/src/pages/ResourcesPage.jsx',
  'client/src/pages/ProductsPage.jsx',
  'client/src/components/common/ChatBot.jsx',
  'client/src/components/home/AboutSection.jsx',
  'client/src/components/home/ProductSection.jsx',
  'client/src/components/home/ProductStudios.jsx'
]

base_path = '/Users/chandranvenkatesan/.gemini/antigravity/scratch/coxara_analytics'

for file_name in files_to_update:
    full_path = os.path.join(base_path, file_name)
    if os.path.exists(full_path):
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()

        new_content = re.sub(r'CoreSight\b', 'Roxbee', content, flags=re.IGNORECASE)
        new_content = re.sub(r'Core Sight\b', 'Roxbee', new_content, flags=re.IGNORECASE)

        # To avoid cases where it says "Roxbee Roxbee" now
        new_content = new_content.replace('Roxbee Roxbee', 'Roxbee')
        new_content = new_content.replace('Roxbee Roxbee', 'Roxbee') # replace twice in case of 3

        if new_content != content:
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {file_name}")
