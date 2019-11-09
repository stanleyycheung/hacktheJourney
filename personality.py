import csv

location = ["Bangalore", "Barcelona", "Berlin", "Dallas",
            "London", "New York", "Paris", "San Francisco"]
tags = []
for loc in location:
    with open(f'csv/{loc}.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            tags.append(dict(row))

with open('csv/tags.csv') as tagsfile:
    first_line = tagsfile.readline()
    keys = first_line.split(',')


personality = ['Touristy', 'Shopaholic', 'Outdoor', 'Sport', 'Foodie', 'Chill/Fun']
personalityTags = []


with open('csv/personality.csv') as persfile:
    csv_reader = csv.reader(persfile, delimiter=',')
    for row in csv_reader:
        personalityTags.append(row)


placesCounter = []

for dict in tags:
    counter = 0
    for key in dict:
        for persona in personalityTags:
            for attribute in persona:
                if key.strip() == attribute.strip():
                    counter += int(dict[key])
                    # print(dict[key])
    placesCounter.append(counter)

# print(tags[0])
print(placesCounter)
