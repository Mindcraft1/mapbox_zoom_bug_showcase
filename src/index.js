import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibWluZGNyYWZ0MSIsImEiOiJjamw5ZWZ2NjIxenRtM3FtcW84bm9jcHB6In0.9fpJRRqBlyzbR9yv11t4vQ'

const map = new mapboxgl.Map( {
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-v9',
  center: [ 2.2928388, 48.8737917 ],
  zoom: 14
} )