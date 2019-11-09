import csv

location = ["Bangalore", "Barcelona", "Berlin", "Dallas",
            "London", "New York", "Paris", "San Francisco"]
tags = []
for loc in location:
    with open(f'csv/{loc}.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            tags.append(row)

with open('csv/tags.csv') as f:
    first_line = f.readline()
    keys = first_line.split(',')

personality = ['Touristy', 'Shopaholic', 'Outdoor', 'Sport', 'Foodie', 'Chill/Fun']

print(keys)

# print(tags[0]['sightseeing'])
