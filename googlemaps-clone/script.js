mapboxgl.accessToken =
  "pk.eyJ1IjoiYWtraW1hcHMiLCJhIjoiY2tqNDRrd2NjMGg4MzJzbzluMTc0Mms4NCJ9.k2CnoS20OSHDpMtrg8popQ"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15
  })

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  });

  map.addControl(directions, 'top-left');
  
}

