"use strict";

const markers = [];

function initMap() {
  const mapDiv = document.getElementById("map");
  if (!mapDiv) { return; }

  const iit = { lat: 41.8348, lng: -87.6270 };
  const map = new google.maps.Map(mapDiv, { center: iit, zoom: 15 });

  // Feature 1: marker with an info window
  const marker = new google.maps.Marker({ position: iit, map: map, title: "Illinois Tech" });
  const info = new google.maps.InfoWindow({ content: "<strong>Illinois Institute of Technology</strong>" });
  marker.addListener("click", function () { info.open(map, marker); });

  // Feature 2: click the map to drop new markers
  map.addListener("click", function (event) {
    const m = new google.maps.Marker({ position: event.latLng, map: map });
    markers.push(m);
  });

  // Feature 3: clear button removes the dropped markers
  const clearBtn = document.getElementById("clearMarkersBtn");
  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      markers.forEach(function (m) { m.setMap(null); });
      markers.length = 0;
    });
  }
}
window.initMap = initMap;

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("questionsBtn");
  if (btn) {
    btn.addEventListener("click", function () {
      alert("If you have questions, contact me at:\njohnkruder@gmail.com");
    });
  }
});