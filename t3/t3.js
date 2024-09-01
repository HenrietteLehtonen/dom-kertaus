'use strict';

// mihin lisätään tieto
const kohde = document.querySelector('#target');

const bData = `<p>Browser data: ${navigator.userAgent}</p>`;
const naytto = `<p>Screen width: ${screen.width}</p><p>Screen heigth: ${screen.height}</p>`;
const av = `<p>Avaible screen space: ${screen.availHeight}px ${screen.availWidth}px</p> `;

const today = new Date().toLocaleDateString('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const d = new Date();
const aika = d.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

kohde.innerHTML = bData + naytto + av + `<p>${today}</p>` + `<p>${aika}</p>`;
