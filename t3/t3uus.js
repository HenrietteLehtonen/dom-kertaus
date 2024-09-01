'use strict';

// navigator
// Options for retrieving location information (optional)
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

// A function that is called when location information is retrieved
function success(pos) {
  const crd = pos.coords;

  // Printing location information to the console
  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

// Function to be called if an error occurs while retrieving location information
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

// Starts the location search
const lokaatio = navigator.geolocation.getCurrentPosition(
  success,
  error,
  options
);

// Printataan hötömölöön
const lista = document.querySelector('#target');
const html = `<li>

              </li>`;

kohde.insertAdjacentHTML('beforeend', html);
