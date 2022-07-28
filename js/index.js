const navToggle = document.querySelector('.mobile-nav-toggle')
const nav = document.querySelector('.primary-navigation');

//When menu is clicked
navToggle.addEventListener('click', () => {
    const visibility  = nav.getAttribute("data-visible");
    //if the menu is closed, open
    if(visibility === "false") {
           nav.setAttribute("data-visible", true);
           navToggle.setAttribute("aria-expanded", true);
           return
    }
    //if the menu is open, close
    nav.setAttribute("data-visible", false)
    navToggle.setAttribute("aria-expanded", false);
    return;
})
