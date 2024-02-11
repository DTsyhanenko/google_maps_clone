const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoicjBja2JlcnJ5IiwiYSI6ImNsczIyMzg4eDBobmwya3F4MWdxM3d1MW4ifQ.nVluEXZSfr_4COeFbswggg"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
})

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: centerPosition, // starting position [lng, lat]
    zoom: 15, // starting zoom
  })

  const navigationControls = new mapboxgl.NavigationControl()
  map.addControl(navigationControls)

  const directionControls = new MapboxDirections({
    accessToken: MAPBOX_ACCESS_TOKEN,
  })

  map.addControl(directionControls, "top-left")
}

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}
