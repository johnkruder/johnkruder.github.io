document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("questionsBtn");
  if (btn) {
    btn.addEventListener("click", function () {
      alert("If you have questions, contact me at:\njkruder@hawk.illinoistech.edu");
    });
  }

  if (document.getElementById("map")) {
    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBM1F-BpX660SBK3-Vw9O9f7AEvTAIH8rI&callback=initMap";
    document.head.appendChild(script);
  }
});

function initMap() {
  const schools = [
    { name: "Illinois Institute of Technology", lat: 41.8348, lng: -87.6270 },
    { name: "Brother Rice High School", lat: 41.7115, lng: -87.7186 },
    { name: "Mt. Greenwood Elementary", lat: 41.6961, lng: -87.7053 }
  ];

  const map = new google.maps.Map(document.getElementById("map"));
  const infoWindow = new google.maps.InfoWindow();
  const bounds = new google.maps.LatLngBounds();

  schools.forEach(function (school) {
    const position = { lat: school.lat, lng: school.lng };
    const marker = new google.maps.Marker({ position: position, map: map, title: school.name });
    bounds.extend(position);

    marker.addListener("click", function () {
      infoWindow.setContent("<strong>" + school.name + "</strong>");
      infoWindow.open(map, marker);
    });
  });

  map.fitBounds(bounds);
}

window.initMap = initMap;