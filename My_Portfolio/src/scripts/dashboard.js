
// Geo-find function
function geoFindMe() {

// Initialize Geo-find variables 
const status = document.querySelector('#status');
const mapLink = document.querySelector('#mapLink');

mapLink.href = '';
mapLink.textContent = '';

// Geo-find success function
function success(position) {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  status.textContent = '';
  mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
}

// Geo-find locating (wait) and error (did not find) functions
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


// Click-game
// Identify elements for Click-game
const title = document.querySelector('.title')
const counter = document.querySelector('.counter')
const button = document.querySelector('.button')
const overlay = document.querySelector('.overlay')

// Initialize variable for Click-game
let count = 0;

button.addEventListener('click', () => {
// Increment number for each click
counter.innerHTML = ++count


// Change title based on number value
if (count >= 10) {
title.innerHTML = `Getting Clearer ??? Keep Clicking. Try some Glasses`
overlay.style.display = 'block' 
const x = count / 1000;
// Simple fade-in
 setTimeout(() => overlay.style.opacity = .01 + x);
} else {
title.innerHTML = `That's just ${count}, not enough...KEEP CLICKING!`	
}
})


// Calculator
// Identify elements for Calculator
function insert (num) {
  document.form.textview.value = document.form.textview.value+num;
}

function equal () {
  var exp = document.form.textview.value;
  if(exp) {
  document.form.textview.value = eval(exp)
    console.log(te)
  }
}

function clean () {
  document.form.textview.value = "";  
}