// List of predefined locations with Street View coverage
const locations = [
  { lat: 40.748817, lng: -73.985428 }, // Empire State Building, NYC
  { lat: 48.858844, lng: 2.294351 },   // Eiffel Tower, Paris
  { lat: 51.5007, lng: -0.1246 },      // Big Ben, London
  { lat: 34.134117, lng: -118.321495 }, // Hollywood Sign, LA
  { lat: 35.658581, lng: 139.745438 },  // Tokyo Tower, Japan
  { lat: -33.8569, lng: 151.2153 },     // Sydney Opera House, Australia
  { lat: 37.819929, lng: -122.478255 }, // Golden Gate Bridge, San Francisco
  { lat: 55.752023, lng: 37.617499 },   // Red Square, Moscow
  { lat: -22.9519, lng: -43.2105 },     // Christ the Redeemer, Rio de Janeiro
  { lat: 25.1975, lng: 55.2744 }        // Burj Khalifa, Dubai
];

// Function to get a random location from the list
function getRandomLocation() {
  const randomIndex = Math.floor(Math.random() * locations.length);
  return locations[randomIndex];
}

// Function to open a random Street View location
function teleport() {
  const { lat, lng } = getRandomLocation();
  const streetViewUrl = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${lat},${lng}`;
  window.open(streetViewUrl, '_blank');
}

// Add click event to the image
document.getElementById('teleport-image').addEventListener('click', teleport);
