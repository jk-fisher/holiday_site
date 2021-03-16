require('normalize.css/normalize.css');
require('../css/main.css');
require('./gallery.css');
import { toggle } from '../scripts/script';

const burgerBar = document.getElementById("navbar");
burgerBar.addEventListener('click', () => {
    toggle(burgerBar);
    // console.log('i am updated')
});
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach((li) => {
  li.addEventListener('click', () => {
    toggle(burgerBar);
  })
})
