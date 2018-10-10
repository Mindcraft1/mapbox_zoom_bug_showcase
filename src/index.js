import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'your access token'

const map = new mapboxgl.Map( {
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-v9',
  center: [ 2.2928388, 48.8737917 ],
  zoom: 14
} )