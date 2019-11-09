//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
    apikey: 'n8QVUjYzQKEXi6Iu1YcCu_Hgbko305GjxbFI3THCZCA'
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over California
var map = new H.Map(document.getElementById('map'),
    defaultLayers.vector.normal.map, {
        center: {
            lat: 37.376,
            lng: -122.034
        },
        zoom: 15,
        pixelRatio: window.devicePixelRatio || 1
    });
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

var locationsContainer = document.getElementById('panel');

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Hold a reference to any infobubble opened
var bubble;

/**
 * Opens/Closes a infobubble
 * @param  {H.geo.Point} position     The location on the map.
 * @param  {String} text              The contents of the infobubble.
 */
function openBubble(position, text) {
    if (!bubble) {
        bubble = new H.ui.InfoBubble(
            position, {
                content: text
            });
        ui.addBubble(bubble);
    } else {
        bubble.setPosition(position);
        bubble.setContent(text);
        bubble.open();
    }
}

// function placesSearch(platform) {
//     var placesService = platform.getPlacesService(),
//         parameters = {
//             at: '51.5083,-0.1256',
//             cat: 'accommodation'
//         };
//
//     placesService.explore(parameters,
//         function(result) {
//             console.log(result.results.items);
//             for (i = 0; i < result.results.items.length; i += 1) {
//                 console.log(result.results.items[i])
//             }
//         },
//         function(error) {
//             console.log(error);
//         });
// }
// placesSearch(platform);

d3.csv("worldcities.csv").then(function(data) {
  console.log(data[0]);
});
