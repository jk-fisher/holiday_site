import { navFunction, displayText, showEnquiryBtn } from './scripts/script';
import Calendar, { prevMonth, nextMonth, prevYear, nextYear } from './scripts/calendar';

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

//call navbar function
const nav = document.getElementById("myTopnav");
nav.addEventListener('click', () => {
    navFunction();
});

//show enquiry button on scroll
window.addEventListener('scroll', () => {
    showEnquiryBtn();
})
// window.onscroll = showEnquiryBtn();

//show more text function
const moreText = document.getElementById("moreBtn");
moreText.addEventListener('click', () => {
    displayText();
})

//create calendar
const calendar = new Calendar();
calendar.renderCalendar();

prevMonth.addEventListener('click', () =>{
    this.date.setMonth(this.date.getMonth()-1);
    this.renderCalendar();
});
nextMonth.addEventListener('click', () => {
    this.date.setMonth(this.date.getMonth()+1);
    this.renderCalendar();
});
prevYear.addEventListener('click', () =>{
    this.date.setFullYear(this.date.getFullYear()-1);
    this.renderCalendar();
});
nextYear.addEventListener('click', () => {
    this.date.setFullYear(this.date.getFullYear()+1);
    this.renderCalendar();
});
