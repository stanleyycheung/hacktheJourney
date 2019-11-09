from amadeus import Client, ResponseError, Location
import json

amadeus = Client(
    client_id='oG6iyYGg6Fs5rvaI2qwvxsW8VRfbEVAn',
    client_secret='NNX4hiJfywq2P3Pp'
)

poiList = [3, 50, 18, 12, 29]

test = amadeus.reference_data.urls.checkin_links.get(airlineCode='BA').result

# for i in test:
#     print(i)
#     for j in test[i]:
#         print (j)

print(test['data'][1]['parameters'])
