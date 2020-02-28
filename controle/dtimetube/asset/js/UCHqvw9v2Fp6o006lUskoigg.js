adkey_URL = "" + document.location;
adkey_From = adkey_URL.indexOf("#/");
adkey_Page = adkey_URL.substring(adkey_From + 2, adkey_URL.length);

(function () {
    'use strict';

    angular
        .module('youtubeApp', []);
})();

(function () {
    'use strict';

    angular
        .module('youtubeApp')
        .controller('mainController', mainController);

    function mainController(youtubeService) {

        var vm = this;
        vm.videoListing = [];
        vm.message = '' + adkey_Page + '';

        function showVideos() {
            youtubeService.getVideos()
                .success(function (data) {
                    vm.videoListing = data.items;
                });
        }
        showVideos();
    }
})();

(function () {
    'use strict';

    angular
        .module('youtubeApp')
        .factory('youtubeService', youtubeService);

    function youtubeService($http) {

        //var apiKey = "AIzaSyB361OxFYjoOALzvY-IOVBPtpTsVKFEUz8", //AIzaSyBwvsPUEjMg3_1iHG3NGU7e1JgU-Oqq1tM //AIzaSyBRp0IleaknJBNnm0XWgONqGHYimru6-is
        var apiKey = "AIzaSyBRp0IleaknJBNnm0XWgONqGHYimru6-is",
            apiURL = 'https://www.googleapis.com/youtube/v3/search?videoEmbeddable=true&order=date&part=snippet&channelId=' + adkey_Page + '&type=video&maxResults=9&key=' + apiKey,
            youtubeFactory = {};

        youtubeFactory.getVideos = function () {
            return $http.get(apiURL);
        };
        return youtubeFactory;
    }
})();

var url = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=' + adkey_Page + '&fields=items/statistics/subscriberCount&key=AIzaSyBRp0IleaknJBNnm0XWgONqGHYimru6-is';
$.getJSON(url)
    .done(function (data) {
        var myVar = setInterval(myTimer, 1000);

        function myTimer() {
            var d = new Date();
            var t = d.toLocaleTimeString();
            document.getElementById("demo").innerHTML = t;
            document.getElementById("footer").innerHTML = data.items[0].statistics.subscriberCount;
        }
    })

function myFunction() {
    location.hash = "#/UCHqvw9v2Fp6o006lUskoigg";
}
// HOME
function refresh() {
    setTimeout(function () {
        location.reload()
    }, 100);
}
window.onload = function () {
    if (!window.location.hash) {
        window.location = window.location + '#';
        window.location.reload();
    }
}
