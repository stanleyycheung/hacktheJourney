const fetch = require("node-fetch");
var d3 = require("d3");

d3.csv("/worldcities.csv").then(function(data) {
    for (i = 0; i < 5; i += 1) {
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
        console.log(i)
    }
});
