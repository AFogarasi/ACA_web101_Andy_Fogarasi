function myFunction() {
  alert("Hello Andy Fogarasi!");
}

function geoFindMe() {

const status = document.querySelector('#status');
const mapLink = document.querySelector('#mapLink');

mapLink.href = '';
mapLink.textContent = '';

function success(position) {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  status.textContent = '';
  mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
}

function error() {
  status.textContent = 'Unable to retrieve your location';
}

if (!navigator.geolocation) {
  status.textContent = 'Geolocation is not supported by your browser';
} else {
  status.textContent = 'Locating…';
  navigator.geolocation.getCurrentPosition(success, error);
}

}

document.querySelector('#findMe').addEventListener('click', geoFindMe);
