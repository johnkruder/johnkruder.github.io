"use strict";

var myMap;

document.addEventListener("DOMContentLoaded", function () {
  setupQuestionsButton();
  loadGoogleMaps();
});


function setupQuestionsButton() {
  var btn = document.getElementById("questionsBtn");
  if (!btn) {
    return;
  }
  btn.addEventListener("click", function () {
    alert("If you have questions, contact me at:\njkruder@hawk.illinoistech.edu");
  });
}

function loadGoogleMaps() {
  if (!document.getElementById("map")) {
    return;
  }
  var script = document.createElement("script");
  script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBM1F-BpX660SBK3-Vw9O9f7AEvTAIH8rI&callback=initMap";
  script.async = true;
  script.onerror = function () {
    console.error("Google Maps API could not load.");
  };
  document.head.appendChild(script);
}

function initMap() {
  var schools = [
    { name: "Illinois Institute of Technology", lat: 41.8348, lng: -87.6270 },
    { name: "Brother Rice High School", lat: 41.7115, lng: -87.7186 },
    { name: "Mt. Greenwood Elementary", lat: 41.6961, lng: -87.7053 }
  ];

  myMap = new google.maps.Map(document.getElementById("map"), {
    center: { lat: schools[0].lat, lng: schools[0].lng },
    zoom: 11,
    mapTypeId: "roadmap"
  });

  var infoWindow = new google.maps.InfoWindow();
  var bounds = new google.maps.LatLngBounds();

  schools.forEach(function (school) {
    var position = { lat: school.lat, lng: school.lng };
    var marker = new google.maps.Marker({
      position: position,
      map: myMap,
      title: school.name
    });
    bounds.extend(position);

    marker.addListener("click", function () {
      infoWindow.setContent("<strong>" + school.name + "</strong>");
      infoWindow.open(myMap, marker);
    });
  });

  myMap.fitBounds(bounds);
}

window.initMap = initMap;