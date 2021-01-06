const date = new Date();
const month = [ 
    "January",
    "February",
    "March", 
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const prevMonth = document.querySelector('.prev-month');
const nextMonth = document.querySelector('.next-month');
const prevYear = document.querySelector('.prev-year');
const nextYear = document.querySelector('.next-year');
const monthDays = document.querySelector('.days');
const selectedDates = document.querySelector('.date-enquiry');

const renderCalendar = () =>{
    date.setDate(1);


    const lastDate = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
        ).getDate();
    
    const prevLastDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
        ).getDate();
        console.log(prevLastDate);
    
    const firstDayIndex = date.getDay();
    // console.log(firstDayIndex);
    
    
    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
        ).getDay();
        console.log(lastDayIndex);

    const nextMonthDays = 7 - lastDayIndex - 1;



    document.querySelector('.month').innerHTML = month[date.getMonth()];
    document.querySelector('.year').innerHTML = date.getFullYear();

    document.querySelector('.selected-date').innerHTML = new Date().toDateString();

    let days = "";

    //count down to output last month days
    for(x = firstDayIndex; x > 0; x--){
        days += `<div class="prev-date day" id=${prevLastDate - x + 1}>${prevLastDate - x + 1}</div>`
    };

    //this month days
    for(i = 1; i <= lastDate; i++){
        if(i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth() &&
        date.getFullYear() === new Date().getFullYear()
        ){
            days += `<div class="today day" id=${i}>${i}</div>`
        }else{
            days += `<div class="day" id=${i}>${i}</div>`
        }
    };

    //next month days
    for(j = 1; j <= nextMonthDays; j++){
        days += `<div class="next-date day" id=${j}>${j}</div>`
    }
    monthDays.innerHTML = days;

    //hide and show arrow icons
    if(date.getFullYear() <= new Date().getFullYear() &&
    date.getMonth() <= new Date().getMonth()){
        prevYear.classList.add('none');
        prevMonth.classList.add('none');

    } else if (date.getFullYear() <= new Date().getFullYear()){
        prevYear.classList.add('none')
    }

    if(date.getFullYear() >= new Date().getFullYear() &&
    date.getMonth() >= new Date().getMonth()+1) {
        prevMonth.classList.remove('none');

    } 
    if (date.getFullYear() > new Date().getFullYear()){
        prevYear.classList.remove('none');
        prevMonth.classList.remove('none');

    }

};

//function to render selected dates
const dateEnquiry = (selectedDay) => {
    selectedDates.innerHTML = new Date(date.getFullYear(), date.getMonth(), selectedDay).toDateString()
    // selectedDates.innerHTML = `${selectedDay}/${date.getMonth()}/${date.getFullYear()}`;
};


prevMonth.addEventListener('click', () =>{
    date.setMonth(date.getMonth()-1);
    renderCalendar();
});
nextMonth.addEventListener('click', () => {
    date.setMonth(date.getMonth()+1);
    renderCalendar();
});
prevYear.addEventListener('click', () =>{
    date.setFullYear(date.getFullYear()-1);
    renderCalendar();
});
nextYear.addEventListener('click', () => {
    date.setFullYear(date.getFullYear()+1);
    renderCalendar();
});

//listen for selected days
monthDays.addEventListener('click', e => {
    if(e.target.classList.contains('day')){
        e.target.classList.add('clicked');
        const selectedDay = e.target.id;
        dateEnquiry(selectedDay);
    }
});
renderCalendar();

