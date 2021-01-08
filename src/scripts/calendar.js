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
        //listen for selected days
        //add conditional statement to check if id is before today
        this.monthDays.addEventListener('click', e => {
            if(e.target.classList.contains('day')){
                const dateId = parseInt(e.target.id);
                this.selectDays(e.target, dateId);
            }
        });
    
    };


    
    selectDays(highlight, dateId) {
        this.selectedDateCounter ++;
        if(this.selectedDateCounter <= 2 && (!this.selectedDateId || this.selectedDateId < dateId)){
            highlight.classList.add('clicked');
            if(this.selectedDateCounter === 2){
                // console.log('date range')
                // console.log(this.selectedDateId, dateId)
                for(let x = this.selectedDateId +1; x < dateId; x++){
                    let a = x.toString();
                    console.log(a)
                    let b = document.getElementById(a);
                    b.classList.add('clicked-range');
                }
                this.selectedDateId = null;
            } else {
                this.selectedDateId = parseInt(dateId);
            }

        } else {
            document.querySelectorAll('.day').forEach(item => {
                item.classList.remove('clicked');
                item.classList.remove('clicked-range');
                this.selectedDateCounter = 1;
                this.selectedDateId = parseInt(dateId);
                highlight.classList.add('clicked');
            });
        this.dateEnquiry.innerHTML = new Date(this.date.getFullYear(), this.date.getMonth(), dateId).toDateString();
    };
    }
};


export { Calendar as default };







