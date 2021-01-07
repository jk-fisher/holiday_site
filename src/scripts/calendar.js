const prevMonth = document.querySelector('.prev-month');
const nextMonth = document.querySelector('.next-month');
const prevYear = document.querySelector('.prev-year');
const nextYear = document.querySelector('.next-year');
const monthDays = document.querySelector('.days');

class Calendar {
    constructor() {
        this.this.date = new Date();
        this.month = [ 
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
    };
    

    renderCalendar() {
        this.date.setDate(1);
    
    
        const lastDate = new Date(
            this.date.getFullYear(),
            this.date.getMonth() + 1,
            0
            ).getDate();
        
        const prevLastDate = new Date(
            this.date.getFullYear(),
            this.date.getMonth(),
            0
            ).getDate();
            console.log(prevLastDate);
        
        const firstDayIndex = this.date.getDay();
        // console.log(firstDayIndex);
        
        
        const lastDayIndex = new Date(
            this.date.getFullYear(),
            this.date.getMonth() + 1,
            0
            ).getDay();
            console.log(lastDayIndex);
    
        const nextMonthDays = 7 - lastDayIndex - 1;
    
    
    
        document.querySelector('.month').innerHTML = this.month[this.date.getMonth()];
        document.querySelector('.year').innerHTML = this.date.getFullYear();
    
        document.querySelector('.selected-this.date').innerHTML = new Date().toDateString();
    
        let days = "";
    
        //count down to output last month days
        for(x = firstDayIndex; x > 0; x--){
            days += `<div class="prev-this.date day" id=${prevLastDate - x + 1}>${prevLastDate - x + 1}</div>`
        };
    
        //this month days
        for(i = 1; i <= lastDate; i++){
            if(i === new Date().getDate() &&
            this.date.getMonth() === new Date().getMonth() &&
            this.date.getFullYear() === new Date().getFullYear()
            ){
                days += `<div class="today day" id=${i}>${i}</div>`
            }else{
                days += `<div class="day" id=${i}>${i}</div>`
            }
        };
    
        //next month days
        for(j = 1; j <= nextMonthDays; j++){
            days += `<div class="next-this.date day" id=${j}>${j}</div>`
        };
        monthDays.innerHTML = days;
    
        //hide and show arrow icons
        if(this.date.getFullYear() <= new Date().getFullYear() &&
        this.date.getMonth() <= new Date().getMonth()){
            prevYear.classList.add('none');
            prevMonth.classList.add('none');
    
        } else if (this.date.getFullYear() <= new Date().getFullYear()){
            prevYear.classList.add('none')
        };
    
        if(this.date.getFullYear() >= new Date().getFullYear() &&
        this.date.getMonth() >= new Date().getMonth()+1) {
            prevMonth.classList.remove('none');
    
        };
        if (this.date.getFullYear() > new Date().getFullYear()){
            prevYear.classList.remove('none');
            prevMonth.classList.remove('none');
    
        };
        //listen for selected days
        monthDays.addEventListener('click', e => {
            if(e.target.classList.contains('day')){
                e.target.classList.add('clicked');
                const selectedDay = e.target.id;
                this.selectDays(selectedDay);
            }
        });
    
    };
    
    selectDays(selectedDay) {
        selectedDates.innerHTML = new Date(this.date.getFullYear(), this.date.getMonth(), selectedDay).toDateString()
        // selectedDates.innerHTML = `${selectedDay}/${this.date.getMonth()}/${date.getFullYear()}`;
    };
    
};


export { prevMonth, nextMonth, prevYear, nextYear, Calendar as default };







