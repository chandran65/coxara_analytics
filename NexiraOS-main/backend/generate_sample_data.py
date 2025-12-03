"""
Generate sample marketing data for MMM testing (no dependencies)
"""

import csv
import math
import random
from datetime import datetime, timedelta

random.seed(42)

# Generate 104 weeks of data (2 years)
n_weeks = 104
start_date = datetime(2022, 1, 1)

data = []

for i in range(n_weeks):
    date = start_date + timedelta(weeks=i)
    
    # Media spend
    tv = random.uniform(5000, 20000)
    radio = random.uniform(2000, 8000)
    newspaper = random.uniform(1000, 5000)
    digital = random.uniform(3000, 12000)
    
    # Control variables
    seasonality = math.sin(i * 2 * math.pi / 52) * 0.2 + 1
    price = random.uniform(95, 105)
    
    # Simple sales calculation
    base_sales = 30000
    sales = (
        base_sales +
        tv * 0.8 +
        radio * 0.6 +
        newspaper * 0.4 +
        digital * 0.7 +
        seasonality * 5000 +
        (100 - price) * 200 +
        random.gauss(0, 2000)
    )
    
    data.append({
        'date': date.strftime('%Y-%m-%d'),
        'sales': int(sales),
        'TV': int(tv),
        'radio': int(radio),
        'newspaper': int(newspaper),
        'digital': int(digital),
        'price': round(price, 2),
        'seasonality': round(seasonality, 3)
    })

# Write to CSV
with open('sample_marketing_data.csv', 'w', newline='') as f:
    fieldnames = ['date', 'sales', 'TV', 'radio', 'newspaper', 'digital', 'price', 'seasonality']
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    
    writer.writeheader()
    writer.writerows(data)

print("✅ Sample data generated: sample_marketing_data.csv")
print(f"📊 {len(data)} weeks of data")
avg_sales = sum(row['sales'] for row in data) / len(data)
print(f"💰 Average sales: ${avg_sales:,.0f}")
print("\nFirst few rows:")
for row in data[:5]:
    print(row)
