import { toggle, displayText, showEnquiryBtn } from './scripts/script';
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
const nav = document.getElementById("navBar");
nav.addEventListener('click', () => {
    toggle();
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
    console.log(calendar.date);
    calendar.date.setMonth(calendar.date.getMonth()+1);
    console.log(calendar.date);
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

//listen for selected days
//add conditional statement to check if id is before today
calendar.monthDays.addEventListener('click', e => {
  if(e.target.classList.contains('day')){
      const dateId = parseInt(e.target.id);
      const today = document.querySelector(".today");
      if((calendar.date.getMonth() != new Date().getMonth() ||
      calendar.date.getFullYear() != new Date().getFullYear()) 
      ||
      (dateId >= parseInt(today.id) && 
      calendar.date.getMonth() === new Date().getMonth() && 
      calendar.date.getFullYear() === new Date().getFullYear())){
          calendar.selectDays(dateId);
      }

  }
});
