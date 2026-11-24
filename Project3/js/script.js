function initMap() {
  const mapDiv = document.getElementById("map");
  if (!mapDiv) { return; }

  const schools = [
    { name: "Illinois Institute of Technology", lat: 41.8348, lng: -87.6270 },
    { name: "Brother Rice High School", lat: 41.7115, lng: -87.7186 },
    { name: "Mt. Greenwood Elementary", lat: 41.6961, lng: -87.7053 }
  ];

  const map = new google.maps.Map(mapDiv, {
    center: { lat: schools[0].lat, lng: schools[0].lng },
    zoom: 11
  });

  schools.forEach(function (school) {
    const marker = new google.maps.Marker({
      position: { lat: school.lat, lng: school.lng },
      map: map,
      title: school.name
    });
    const info = new google.maps.InfoWindow({ content: "<strong>" + school.name + "</strong>" });
    marker.addListener("click", function () { info.open(map, marker); });
  });
}
window.initMap = initMap;