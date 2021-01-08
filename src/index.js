import { navFunction, displayText, showEnquiryBtn } from './scripts/script';
import Calendar from './scripts/calendar';

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


calendar.prevMonth.addEventListener('click', () =>{
    calendar.date.setMonth(calendar.date.getMonth()-1);
    calendar.renderCalendar();
});
calendar.nextMonth.addEventListener('click', () => {
    calendar.date.setMonth(calendar.date.getMonth()+1);
    calendar.renderCalendar();
});
calendar.prevYear.addEventListener('click', () =>{
    calendar.date.setFullYear(calendar.date.getFullYear()-1);
    calendar.renderCalendar();
});
calendar.nextYear.addEventListener('click', () => {
    calendar.date.setFullYear(calendar.date.getFullYear()+1);
    calendar.renderCalendar();
});

