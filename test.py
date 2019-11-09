from amadeus import Client, ResponseError, Location


amadeus = Client(
    client_id='oG6iyYGg6Fs5rvaI2qwvxsW8VRfbEVAn',
    client_secret='NNX4hiJfywq2P3Pp'
)

picture = amadeus.get('/v2/media/files/generated-photos', category='MOUNTAIN')

print(picture.data['attachmentUri'])
