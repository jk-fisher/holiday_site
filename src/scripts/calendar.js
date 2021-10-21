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
        this.firstDateSelected = null;
        this.secondDateSelected = null;
        this.firstIndexSelected = null;
        this.secondIndexSelected = null;
        this.lastDate = null;
        this.prevLastDate = null;
        this.firstDayIndex = null;
        this.lastDayIndex = null;
        this.nextMonthDays = null;
        // this.allDays = document.querySelectorAll('.day');
    };
    
    selectDays(indexOfDay) {
        this.selectedDateCounter ++;
        const target = document.getElementById(indexOfDay);
        // console.log(target);
        const newDateObject = this.createDateObject(indexOfDay);
        if(this.selectedDateCounter === 1 && !this.firstDateSelected){
            target.classList.add('clicked');
            this.firstDateSelected = newDateObject;
            this.firstIndexSelected = indexOfDay;

        }else if(this.selectedDateCounter === 2 && this.firstDateSelected < newDateObject){
            target.classList.add('clicked');
            this.secondDateSelected = newDateObject;
            this.secondIndexSelected = indexOfDay;
        
            this.selectMultipleMonths();
                // this.firstDateSelected = null;
        } else {
            this.firstDateSelected = newDateObject;
            this.firstIndexSelected = indexOfDay;
            this.secondDateSelected = null;
            this.secondIndexSelected = null;
            this.selectedDateCounter = 1;
            document.querySelectorAll('.day').forEach(item => {
                item.classList.remove('clicked');
                item.classList.remove('clicked-range');
            });
            console.log(target)
            target.classList.add('clicked');
        // this.dateEnquiry.innerHTML = new Date(this.date.getFullYear(), this.date.getMonth(), indexOfDay).toDateString();
    };
    };

    createDateObject (indexOfDay) {
        let dayOfMonth = (indexOfDay + 1) - this.firstDayIndex;
        let month = this.date.getMonth();
        let year = this.date.getFullYear();
        if(dayOfMonth > this.lastDate){
            month++;
            dayOfMonth = dayOfMonth - (this.lastDate); 
            if(month > 11){
            };
        }else if(dayOfMonth < 1){
            month--;
            dayOfMonth = this.prevLastDate + dayOfMonth; 
            if(month < 0){
            };
        };
        const dateObject = new Date(year, month, dayOfMonth);
        // console.log(dateObject);
        return dateObject;
    };

    findIndexofDay (dateObject) {
        const date = dateObject.getDate();
        const month = dateObject.getMonth();
        if(month < this.date.getMonth()){
            const prevLastDayIndex = this.firstDayIndex - 1;
            const counterIndex = this.prevLastDate - date;
            // console.log('prev last day index', prevLastDayIndex, 'counter index', counterIndex)
            return prevLastDayIndex - counterIndex;
        } else if (month > this.date.getMonth()){
            console.log(date + this.lastDate + (this.firstDayIndex -1))
            return date + this.lastDate + (this.firstDayIndex -1);
        } else {
            // console.log('index of day next month day', date + (this.firstDayIndex -1))
            return date + (this.firstDayIndex -1)
        };
    };

    findLastIndex () {
        // console.log('last index of month', (this.firstDayIndex - 1) + this.lastDate + this.nextMonthDays)
        return (this.firstDayIndex - 1) + this.lastDate + this.nextMonthDays;
    };

    selectMultipleMonths () {
        if(this.findIndexofDay(this.firstDateSelected) < 0){
                console.log('first date is not on this page', this.findIndexofDay(this.firstDateSelected))
                //select everything from index 0 to this.findIndexOfDay(this.secondDateSelected)
            for(let x = 0; x < this.secondIndexSelected; x++){
                let a = x.toString();
                let b = document.getElementById(a);
                b.classList.add('clicked-range');
            }
        } else if (this.secondDateSelected > this.createDateObject(this.findLastIndex())){
            //select everything from first date selected to last day showing on calendar
            console.log('second date is not on this page')
            for(let x = this.firstIndexSelected + 1; x <= this.findLastIndex(); x++){
                let a = x.toString();
                let b = document.getElementById(a);
                b.classList.add('clicked-range');
            }
        } else {
            console.log('dates are on same page', this.firstIndexSelected)
            // console.log('!this.findIndexofDay(this.firstDateSelected)')
            for(let x = this.findIndexofDay(this.firstDateSelected) +1; x < this.secondIndexSelected; x++){
                let a = x.toString();
                console.log(x);
                let b = document.getElementById(a);
                b.classList.add('clicked-range');
            }

        
        }
    }


    renderCalendar() {
        this.date.setDate(1);
    
    
        this.lastDate = new Date(
            this.date.getFullYear(),
            this.date.getMonth() + 1,
            0
            ).getDate();
            // console.log('lastDate', this.lastDate);
        
        this.prevLastDate = new Date(
            this.date.getFullYear(),
            this.date.getMonth(),
            0
            ).getDate();
            // console.log('prevLastDate', this.prevLastDate)
        
        this.firstDayIndex = this.date.getDay();
        
        
        this.lastDayIndex = new Date(
            this.date.getFullYear(),
            this.date.getMonth() + 1,
            0
            ).getDay();
            // console.log('lastDayIndex', this.lastDayIndex);
    
        this.nextMonthDays = 7 - this.lastDayIndex - 1;
    
    
    
        document.querySelector('.month').innerHTML = this.month[this.date.getMonth()];
        document.querySelector('.year').innerHTML = this.date.getFullYear();
        // console.log(this.month[this.date.getMonth()])
        // console.log(this.date.getFullYear())
        
    
        document.querySelector('.selected-date').innerHTML = new Date().toDateString();
    
        let days = "";
        let arrayIndex = 0;
        // console.log(days, firstDayIndex)

        //count down to output last month days
        for(let x = this.firstDayIndex; x > 0; x--){
            days += `<div class="prev-date day" id=${arrayIndex}>${this.prevLastDate - x + 1}</div>`
            arrayIndex++;
            // console.log(days)
        };
    
        //this month days
        for(let i = 1; i <= this.lastDate; i++){
            if(i === new Date().getDate() &&
            this.date.getMonth() === new Date().getMonth() &&
            this.date.getFullYear() === new Date().getFullYear()
            ){
                days += `<div class="today day" id=${arrayIndex}>${i}</div>`
            }else{
                days += `<div class="day" id=${arrayIndex}>${i}</div>`
            }
            arrayIndex++;
        };
    
        //next month days
        for(let j = 1; j <= this.nextMonthDays; j++){
            days += `<div class="next-date day" id=${arrayIndex}>${j}</div>`
            arrayIndex++;
        };
        this.monthDays.innerHTML = days;
    
        // Highlighting any selected days
        console.log('first', this.firstDateSelected, 'second', this.secondDateSelected)
        if(this.firstDateSelected){
            console.log('selecting days after render')
            this.selectDays(this.findIndexofDay(this.firstDateSelected))
        }

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







