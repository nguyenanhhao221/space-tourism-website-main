//Data is an array contain objects depends on the url
import { data } from './helpers.js';

const tabButtons = document.querySelectorAll('.list');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const destinationData = data.find(
      element => element.name.toLowerCase() === button.id.toLowerCase()
    );
    Object.entries(destinationData).forEach(element => {
      if (element[0] !== 'images') {
        document.querySelector(`#${element[0]}`).innerHTML = element[1];
      }
      if (element[0] === 'images') {
        document.querySelector('picture source').srcset = element[1].webp;
        document.querySelector('picture img').src = element[1].png;

        document.querySelector('picture img').alt = button.id;
      }
      return;
    });
  });
});
