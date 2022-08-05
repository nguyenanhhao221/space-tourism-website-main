import { fetchData, getPathName } from './helpers.js';

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
