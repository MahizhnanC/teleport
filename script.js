// Function to generate random latitude and longitude
function getRandomLocation() {
    const lat = (Math.random() * 180 - 90).toFixed(6);
    const lng = (Math.random() * 360 - 180).toFixed(6);
    return { lat, lng };
  }
  
  // Function to open a random Street View location
  function teleport() {
    const { lat, lng } = getRandomLocation();
    const streetViewUrl = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${lat},${lng}`;
    window.open(streetViewUrl, '_blank');
  }
  
  // Add click event to the image
  document.getElementById('teleport-image').addEventListener('click', teleport);