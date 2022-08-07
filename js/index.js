// Implement Hamburger Menu
const navToggle = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.primary-navigation');

//When menu is clicked
navToggle.addEventListener('click', () => {
  const visibility = nav.getAttribute('data-visible');
  //if the menu is closed, open
  if (visibility === 'false') {
    nav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
    return;
  }
  //if the menu is open, close
  nav.setAttribute('data-visible', false);
  navToggle.setAttribute('aria-expanded', false);
  return;
});

// Add active state to all button list when clicked
const list = document.querySelectorAll('.list');

const addActiveState = (buttonArr, currentButton) => {
  // first we remove active class from all button in the list
  const removeActive = buttonArr => {
    buttonArr.forEach(button => button.classList.remove('active'));
  };
  removeActive(buttonArr);
  // Then we add the active class to the current button
  return currentButton.classList.add('active');
};

list.forEach(button => {
  button.addEventListener('click', () => {
    addActiveState(list, button);
  });
});

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
        // for the technology pages where the images contains 2 version of landscape and portrait
        if (element[1].portrait && element[1].landscape) {
          console.log(
            document.querySelector('picture source.technology-image-mobile')
          );
          document.querySelector(
            'picture source.technology-image-mobile'
          ).srcset = element[1].landscape;
          document.querySelector('picture img.technology-image-mobile').src =
            element[1].landscape;
          document.querySelector(
            'picture source.technology-image-desktop'
          ).srcset = element[1].portrait;
          document.querySelector('picture img.technology-image-desktop').src =
            element[1].portrait;
          document.querySelector('picture img').alt = button.id;
          return;
        }
        document.querySelector('picture source').srcset = element[1].webp;
        document.querySelector('picture img').src = element[1].png;

        document.querySelector('picture img').alt = button.id;
      }
      return;
    });
  });
});
