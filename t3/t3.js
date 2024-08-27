'use strict';

document.getElementById('target').innerHTML =
  'Browser data: ' + navigator.userAgent;

document.getElementById('hw').innerHTML =
  'Screen width: ' +
  screen.width +
  'px<br>' +
  'Screen height: ' +
  screen.height +
  'px';

document.getElementById(
  'ah'
).innerHTML = `Avaible screen space: ${screen.availHeight}px ${screen.availWidth}px `;

setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById('time').innerHTML = 'Time: ' + d.toLocaleTimeString();
  +d;
}
const today = new Date().toLocaleDateString('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});
document.getElementById('date').innerHTML = 'Date: ' + today;
