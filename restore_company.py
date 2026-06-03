import os
import re

directories_to_scan = [
  'client/src',
  'client/index.html'
]

base_path = '/Users/chandranvenkatesan/.gemini/antigravity/scratch/coxara_analytics'

def update_file(full_path):
    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = content
    # Titles and obvious company phrases
    new_content = new_content.replace('BEACON Analytics', 'COXARA Analytics')
    new_content = new_content.replace('Beacon Analytics', 'Coxara Analytics')
    new_content = new_content.replace('beacon_chat_opened', 'coxara_chat_opened')
    new_content = new_content.replace('director@beacon.co.in', 'director@coxara.co.in')
    
    # Navbar and Footer wordmark (span containing Beacon)
    new_content = re.sub(r'>\s*Beacon\s*</span>', '>Coxara</span>', new_content)
    
    # Chatbot specific lines where Beacon meant the company
    new_content = new_content.replace('Welcome to BEACON!', 'Welcome to COXARA!')
    new_content = new_content.replace('about beacon', 'about coxara')
    new_content = new_content.replace('what is beacon', 'what is coxara')
    new_content = new_content.replace('tell me about beacon', 'tell me about coxara')
    new_content = new_content.replace('Beacon offers', 'Coxara offers')
    new_content = new_content.replace('Careers at Beacon', 'Careers at Coxara')
    new_content = new_content.replace('BEACON AI Assistant', 'COXARA AI Assistant')
    
    # In AboutSection, etc, where BEACON is shouting
    new_content = re.sub(r'\bBEACON\b(?!\s*CoreSight)', 'COXARA', new_content)
    # But wait, in Chatbot: "Our flagship product is Beacon!"
    # I want to be extremely precise:
    
    if new_content != content:
        with open(full_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {full_path}")

for item in directories_to_scan:
    path = os.path.join(base_path, item)
    if os.path.isfile(path):
        update_file(path)
    else:
        for root, dirs, files in os.walk(path):
            for file in files:
                if file.endswith(('.js', '.jsx', '.html', '.css', '.md')):
                    update_file(os.path.join(root, file))
