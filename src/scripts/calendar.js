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
        this.dateEnquiry = document.querySelector('.date-enquiry');
        this.selectedDateCounter = 0;
        this.selectedDateId = null;
        // this.allDays = document.querySelectorAll('.day');
    };
    
    selectDays(highlight, dateId) {
        console.log(this.selectedDateCounter, this.selectedDateId, dateId)
        this.selectedDateCounter ++;
        if(this.selectedDateCounter === 1 && !this.selectedDateId){
            highlight.classList.add('clicked');
            const firstDate = {
                day: dateId,
                month: this.date.getMonth(),
                year: this.date.getFullYear()
            }
            localStorage.setItem('first-date', JSON.stringify(firstDate))
            this.selectedDateId = parseInt(dateId);
        }else if(this.selectedDateCounter === 2 && this.selectedDateId < dateId){
            highlight.classList.add('clicked');
            const secondDate = {
                day: dateId,
                month: this.date.getMonth(),
                year: this.date.getFullYear()
            }
            localStorage.setItem('second-date', JSON.stringify(secondDate))
                for(let x = this.selectedDateId +1; x < dateId; x++){
                    let a = x.toString();
                    // console.log(a)
                    let b = document.getElementById(a);
                    b.classList.add('clicked-range');
                }
                this.selectedDateId = null;
        } else {
            localStorage.clear();
            const firstDate = {
                day: dateId,
                month: this.date.getMonth(),
                year: this.date.getFullYear()
            }
            localStorage.setItem('first-date', JSON.stringify(firstDate))
            this.selectedDateCounter = 1;
            this.selectedDateId = parseInt(dateId);
            document.querySelectorAll('.day').forEach(item => {
                item.classList.remove('clicked');
                item.classList.remove('clicked-range');
            });
            highlight.classList.add('clicked');
        // this.dateEnquiry.innerHTML = new Date(this.date.getFullYear(), this.date.getMonth(), dateId).toDateString();
    };
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
        
        const firstDayIndex = this.date.getDay();
        
        
        const lastDayIndex = new Date(
            this.date.getFullYear(),
            this.date.getMonth() + 1,
            0
            ).getDay();
    
        const nextMonthDays = 7 - lastDayIndex - 1;
    
    
    
        document.querySelector('.month').innerHTML = this.month[this.date.getMonth()];
        document.querySelector('.year').innerHTML = this.date.getFullYear();
        // console.log(this.month[this.date.getMonth()])
        // console.log(this.date.getFullYear())
        
    
        document.querySelector('.selected-date').innerHTML = new Date().toDateString();
    
        let days = "";
        let arrayIndex = 0;
        // console.log(days, firstDayIndex)

        //count down to output last month days
        for(let x = firstDayIndex; x > 0; x--){
            arrayIndex++;
            days += `<div class="prev-date day" id=${arrayIndex}>${prevLastDate - x + 1}</div>`
            // console.log(days)
        };
    
        //this month days
        for(let i = 1; i <= lastDate; i++){
            arrayIndex++;
            if(i === new Date().getDate() &&
            this.date.getMonth() === new Date().getMonth() &&
            this.date.getFullYear() === new Date().getFullYear()
            ){
                days += `<div class="today day" id=${arrayIndex}>${i}</div>`
            }else{
                days += `<div class="day" id=${arrayIndex}>${i}</div>`
            }
        };
    
        //next month days
        for(let j = 1; j <= nextMonthDays; j++){
            arrayIndex++;
            days += `<div class="next-date day" id=${arrayIndex}>${j}</div>`
        };
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
    };
    
    
};


export { Calendar as default };







