/*global
document, window, google, bio, education, work, project, mapBounds, e
*/
var HTMLheaderName = "<h1 id=\"name\" class=\"fullname\">%data%</h1>";
var HTMLheaderRole = "<span class=\"role\">%data%</span>";

//var HTMLcontactGeneric = "<li class=\"flex-item\"><span class=\"orange-text\">%contact%</span><span class=\"white-text\">%data%</span></li>";
var HTMLemail = "<li class=\"flex-item\"><a href=\"mailto: %data%\"><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i><span class=\"contact-text\">%data%</span></a></li>";
//var HTMLtwitter = "<li class=\"flex-item\"><span class=\"orange-text\">twitter</span><span class=\"white-text\">%data%</span></li>";
var HTMLgithub = "<li class=\"flex-item\"><a href=\"https://github.com/%data%/\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a></li>";
var HTMLtwitter = "<li class=\"flex-item\"><a href=\"https://twitter.com/%data%/\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>";
var HTMLfacebook = "<li class=\"flex-item\"><a href=\"https://www.facebook.com/%data%/\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>";
var HTMLblog = "<li class=\"flex-item\"><a href=\"%data%\" target=\"_blank\"><i class=\"fa fa-globe\" aria-hidden=\"true\"></i></a></li>";
var HTMLmobile = "<li class=\"flex-item\"><i class=\"fa fa-mobile\" aria-hidden=\"true\"></i> %data%</li>";
var HTMLfooterLocation = "<div class=\"col-md-4 col-sm-4\"><p><i class=\"fa fa-map-marker\"></i></p><p>%data%</p></div>";
var HTMLfooterMobile = "<div class=\"col-md-4 col-sm-4\"><p><i class=\"fa fa-mobile\"></i></p><p>%data%</p></div>";
var HTMLfooterEmail = "<div class=\"col-md-4 col-sm-4\"><p><i class=\"fa fa- fa-envelope-o\"></i></p><p><a href=\"mailto: %data%\">%data%</a></p></div>";


var HTMLbioPic = "<img src=\"%data%\" class=\"img-rounded biopic\">";
var HTMLwelcomeMsg = "<div class=\"welcome-text\">%data%</div>";

var HTMLskillsStart = "<ul id=\"skill-list\" class=\"flex-box\"></ul>";
var HTMLskills = "<li class=\"flex-item label label-primary\">%data%</li>";

var HTMLworkStart = "<article class=\"work-entry row\"></article>";
var HTMLworkDatesLocation = "<div class=\"col-md-3 col-sm-3 work-date-location\">%dates%<br>%location%</div>";
var HTMLworkPosition = "<div class=\"col-md-9 col-sm-9 work-info\"><h3 class=\"section-title-sm\">%title%</h3><p><a href=\"#\">%employer%</a></p><p>%description%</p></div>";

var HTMLprojectStart = "<article class=\"project-entry col-md-6\"></article>";
var HTMLprojectImageContainer = "<div class=\"col-md-4 col-sm-4 project-image-container text-center\"></div>";
var HTMLprojectImage = "<img src=\"%data%\" class=\"project-image img-rounded\">";
var HTMLprojectInfo = "<div class=\"col-md-8 col-sm-8 project-info\"><h3 class=\"section-title-sm\">%dates%, %title%</h3><p class=\"project-description\">%description%</p></div>";

var HTMLschoolStart = "<article class=\"education-entry\"></article>";
var HTMLschoolInfo = "<div class=\"row school-info\"><div class=\"col-md-2 school-dates\">%dates%</div><div class=\"col-md-2 col-sm-2 school-degree\">%degree%</div><div class=\"col-md-3 col-sm-3 school-major\">%majors%</div><div class=\"col-md-3 col-sm-3 school-name\"><a href=\"%url%\" target=\"_blank\">%name%</a></div><div class=\"col-md-2 col-sm-2 school-location\">%location%</div></div>";

var HTMLtrainingStart = "<article class=\"training-entry\"></article>";
var HTMLtrainingHeader = "<header class=\"section-header training-header\"><h3 class=\"section-title-sm\">Training Courses</h3></header>";

var HTMLtrainingInfo = "<div class=\"row training-info\"><div class=\"col-md-2 col-sm-2 training-dates\">%dates%</div><div class=\"col-md-2 col-sm-2 training-cert\">%cert%</div><div class=\"col-md-3 col-sm-3 training-title\">%title%</div><div class=\"col-md-5 col-sm-5 training-institute\"><a href=\"%url%\" target=\"_blank\">%institute%</a></div></div>";

//var internationalizeButton = "<button>Internationalize</button>";
var googleMap = "<div id=\"map\" class=\"map-row\"></div>";


/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don"t delete! It hooks up your code to the button you"ll be appending.

$(document).ready(function() {
  $("button").click(function() {
    var $name = $("#name");
    var iName = inName($name.text()) || function(){};
    $name.html(iName);
  });
});
*/

/*
The next few lines about clicks are for the Collecting Click Locations quiz in the lesson Flow Control from JavaScript Basics.
var clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log("x location: " + x + "; y location: " + y);
}

$(document).click(function(loc) {
  // your code goes here!
  logClicks(loc.pageX,loc.pageY);
});

*/


/*
This is the fun part. Here"s where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map; // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

    "use strict";
    var locations = [];

    var mapOptions = {
        disableDefaultUI: true
    };

    /*
    For the map to be displayed, the googleMap var must be
    appended to #mapDiv in resumeBuilder.js.
    */
    map = new google.maps.Map(document.querySelector("#map"), mapOptions);


    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    function locationFinder() {

        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        // iterates through school locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        education.schools.forEach(function (school) {
            locations.push(school.location);
        });

        // iterates through work locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        work.jobs.forEach(function (job) {
            locations.push(job.location);
        });

        return locations;
    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, "click", function () {
            infoWindow.open(marker.get("map"), marker);
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        locations.forEach(function (place) {
            // the search request object
            var request = {
                query: place
            };

            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        });
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);

}

/*
Uncomment the code below when you"re ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener("load", initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener("resize", function () {
    "use strict";
    //Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});
