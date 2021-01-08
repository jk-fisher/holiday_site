class Calendar {
    constructor() {
        this.date = new Date();
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
        this.prevMonth = document.querySelector('.prev-month');
        this.nextMonth = document.querySelector('.next-month');
        this.prevYear = document.querySelector('.prev-year');
        this.nextYear = document.querySelector('.next-year');
        this.monthDays = document.querySelector('.days');
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
        console.log(firstDayIndex);
        
        
        const lastDayIndex = new Date(
            this.date.getFullYear(),
            this.date.getMonth() + 1,
            0
            ).getDay();
            console.log(lastDayIndex);
    
        const nextMonthDays = 7 - lastDayIndex - 1;
    
    
    
        document.querySelector('.month').innerHTML = this.month[this.date.getMonth()];
        document.querySelector('.year').innerHTML = this.date.getFullYear();
        console.log(this.month[this.date.getMonth()])
        console.log(this.date.getFullYear())
    
        document.querySelector('.selected-date').innerHTML = new Date().toDateString();
    
        let days = "";
        console.log(days, firstDayIndex)

        //count down to output last month days
        for(let x = firstDayIndex; x > 0; x--){
            // console.log(x)
            days += `<div class="prev-date day" id=${prevLastDate - x + 1}>${prevLastDate - x + 1}</div>`
            console.log(days)
        };
    
        //this month days
        for(let i = 1; i <= lastDate; i++){
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
        for(let j = 1; j <= nextMonthDays; j++){
            days += `<div class="next-date day" id=${j}>${j}</div>`
        };
        console.log('test2');
        this.monthDays.innerHTML = days;
    
        //hide and show arrow icons
        if(this.date.getFullYear() <= new Date().getFullYear() &&
        this.date.getMonth() <= new Date().getMonth()){
            this.prevYear.classList.add('none');
            this.prevMonth.classList.add('none');
    
        } else if (this.date.getFullYear() <= new Date().getFullYear()){
            this.prevYear.classList.add('none')
        };
    
        if(this.date.getFullYear() >= new Date().getFullYear() &&
        this.date.getMonth() >= new Date().getMonth()+1) {
            this.prevMonth.classList.remove('none');
    
        };
        if (this.date.getFullYear() > new Date().getFullYear()){
            this.prevYear.classList.remove('none');
            this.prevMonth.classList.remove('none');
    
        };
        //listen for selected days
        this.monthDays.addEventListener('click', e => {
            if(e.target.classList.contains('day')){
                e.target.classList.add('clicked');
                const selectedDay = e.target.id;
                this.selectDays(selectedDay);
            }
        });
    
    };
    
    selectDays(selectedDay) {
        console.log(selectedDay)
        // selectedDates.innerHTML = new Date(this.date.getFullYear(), this.date.getMonth(), selectedDay).toDateString()
        // selectedDates.innerHTML = `${selectedDay}/${this.date.getMonth()}/${date.getFullYear()}`;
    };

};

// this.prevMonth.addEventListener('click', () =>{
//     this.date.setMonth(this.date.getMonth()-1);
//     this.renderCalendar();
// });
// nextMonth.addEventListener('click', () => {
//     this.date.setMonth(this.date.getMonth()+1);
//     this.renderCalendar();
// });
// prevYear.addEventListener('click', () =>{
//     this.date.setFullYear(this.date.getFullYear()-1);
//     this.renderCalendar();
// });
// nextYear.addEventListener('click', () => {
//     this.date.setFullYear(this.date.getFullYear()+1);
//     this.renderCalendar();
// });


export { Calendar as default };







