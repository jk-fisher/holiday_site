import { navFunction, displayText, showEnquiryBtn } from './scripts/script';


//modal function
const modal = document.getElementById("myModal");
const btn = document.getElementById("amenities-btn");
const close = document.getElementsByClassName("close")[0];

btn.addEventListener('click', () => {
  modal.style.display = "block";
});

close.addEventListener('click', () => {
  modal.style.display = "none";
});

window.addEventListener('click', (event) => {
  if(event.target == modal) {
    modal.style.display = "none";
  }
});

//navbar function
const nav = document.getElementById("myTopnav");
nav.addEventListener('click', () => {
    navFunction();
});

//enquiry button
window.addEventListener('scroll', () => {
    showEnquiryBtn();
})
// window.onscroll = showEnquiryBtn();

const moreText = document.getElementById("moreBtn");
moreText.addEventListener('click', () => {
    displayText();
})