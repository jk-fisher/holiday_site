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
        this.dateEnquiry = document.querySelector('.header');
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
    };


    selectDays(dateId) {
        this.selectedDateCounter ++;
        const newDateObject = this.createDateObject(dateId);
        if(this.selectedDateCounter === 1 && !this.firstDateSelected){
            this.firstDateSelected = newDateObject;
            this.firstIndexSelected = dateId;
        }else if(this.selectedDateCounter === 2 && this.firstDateSelected < newDateObject){
            this.secondDateSelected = newDateObject;
            this.secondIndexSelected = dateId;
            this.renderUIDates();
        } else {
            this.firstDateSelected = newDateObject;
            this.firstIndexSelected = dateId;
            this.secondDateSelected = null;
            this.secondIndexSelected = null;
            this.selectedDateCounter = 1;
            document.querySelectorAll('.day').forEach(item => {
                item.classList.remove('clicked');
                item.classList.remove('clicked-range');
            });
        }
        this.highlightDays();
    }

    // selectMultipleMonths () {
    highlightDays () {
        if(this.selectedDateCounter === 1 && this.firstDateSelected >= this.createDateObject(0)){
            const target = document.getElementById(this.findIndexofDay(this.firstDateSelected));
            target.classList.add('clicked');
        } else if (this.selectedDateCounter === 2 && this.secondDateSelected > this.createDateObject(0)) {
            if(this.findIndexofDay(this.firstDateSelected) && this.findIndexofDay(this.firstDateSelected) < 0){
                //update second index 
                this.secondIndexSelected = this.findIndexofDay(this.secondDateSelected)
                const newSecondIndex = this.findIndexofDay(this.secondDateSelected);
                const target = document.getElementById(this.secondIndexSelected);
                target.classList.add('clicked');
                //select everything from index 0 to this.findIndexOfDay(this.secondDateSelected)
                for(let x = 0; x < this.secondIndexSelected; x++){
                    let a = x.toString();
                    let b = document.getElementById(a);
                    b.classList.add('clicked-range');
                }
            } else if (this.findIndexofDay(this.firstDateSelected) && this.secondDateSelected > this.createDateObject(this.findLastIndex())){
                //select everything from first date selected to last day showing on calendar
                const target = document.getElementById(this.findIndexofDay(this.firstDateSelected));
                if(target){
                    target.classList.add('clicked');
                    for(let x = this.findIndexofDay(this.firstDateSelected) + 1; x <= this.findLastIndex(); x++){
                        let a = x.toString();
                        let b = document.getElementById(a);
                        b.classList.add('clicked-range');
                    }
                }
            } else {
                // both dates are on this page
                let firsttarget = document.getElementById(this.findIndexofDay(this.firstDateSelected));
                firsttarget.classList.add('clicked');
                let secondtarget = document.getElementById(this.findIndexofDay(this.secondDateSelected));
                secondtarget.classList.add('clicked');
                for(let x = this.findIndexofDay(this.firstDateSelected) +1; x < this.findIndexofDay(this.secondDateSelected); x++){
                    let a = x.toString();
                    let b = document.getElementById(a);
                    b.classList.add('clicked-range');
                }
            }

        }
    }

    createDateObject (indexOfDay) {
        let dayOfMonth = (indexOfDay + 1) - this.firstDayIndex;
        let month = this.date.getMonth();
        let year = this.date.getFullYear();
        if(dayOfMonth > this.lastDate){
            month++;
            dayOfMonth = dayOfMonth - (this.lastDate); 
            if(month > 11){
                year++
                month = month - 12
            };
        }else if(dayOfMonth < 1){
            month--;
            dayOfMonth = this.prevLastDate + dayOfMonth; 
            if(month < 0){
                year--
                month = month + 12
            };
        };
        const dateObject = new Date(year, month, dayOfMonth);
        return dateObject;
    };

    findIndexofDay (dateObject) {
        const date = dateObject.getDate();
        const month = dateObject.getMonth();
        if(month === this.date.getMonth()-1){
            const prevLastDayIndex = this.firstDayIndex - 1;
            const counterIndex = this.prevLastDate - date;
            return prevLastDayIndex - counterIndex;
        } else if (month === this.date.getMonth()+1){
            return date + this.lastDate + (this.firstDayIndex -1);
        } else if(month === this.date.getMonth()){
            return date + (this.firstDayIndex -1)
        };

    };

    findLastIndex () {
        return (this.firstDayIndex - 1) + this.lastDate + this.nextMonthDays;
    };
    calculateNights() {
        let timeDifference = this.secondDateSelected.getTime() - this.firstDateSelected.getTime();
        return Math.round(timeDifference / (1000 * 3600 * 24)); 
    }
    renderUIDates(){
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const discount = (this.calculateNights()*47) * 0.1;
        const roundedDiscount = discount.toFixed(2);
        const totalPrice = (this.calculateNights()*47) - roundedDiscount;
        const roundedTotalPrice = totalPrice.toFixed(2);
        const priceBreakdown = document.querySelector('.price-breakdown');
        const discountDisplay = document.querySelector('.price-filler');
        this.dateEnquiry.innerHTML = `<span class="white">${this.firstDateSelected.toLocaleString('en-GB', options)} - <br>${this.secondDateSelected.toLocaleString('en-GB', options)}</span>`;
        discountDisplay.classList.add('none');
        document.querySelector("body > div.content-container > section.template.price > div.price-container > div.price-summary > button").classList.remove('none');
        priceBreakdown.innerHTML = `<li class="flex"><span class="calculate-nights">£48 x ${this.calculateNights()} nights</span><span class="nights-price">£${(this.calculateNights()*47).toFixed(2)}</span></li>
                                    <li class="flex border"><span><b>Total:</span><span>£${roundedTotalPrice}</b></span>`;
        // priceBreakdown.classList.add('padding')
        if(this.calculateNights() > 6){
            let li = document.createElement('li');
            li.classList.add('flex')
            li.innerHTML = `<span>Weekly discount -10%</span><span>-£${roundedDiscount}</span>`;
            priceBreakdown.insertBefore(li, priceBreakdown.firstElementChild.nextElementSibling);
        }
        
    }
    


    renderCalendar() {
        this.date.setDate(1);
    
    
        this.lastDate = new Date(
            this.date.getFullYear(),
            this.date.getMonth() + 1,
            0
            ).getDate();
        
        this.prevLastDate = new Date(
            this.date.getFullYear(),
            this.date.getMonth(),
            0
            ).getDate();
        
        this.firstDayIndex = this.date.getDay();
        
        
        this.lastDayIndex = new Date(
            this.date.getFullYear(),
            this.date.getMonth() + 1,
            0
            ).getDay();
    
        this.nextMonthDays = 7 - this.lastDayIndex - 1;
    
    
    
        document.querySelector('.month').innerHTML = this.month[this.date.getMonth()];
        document.querySelector('.year').innerHTML = this.date.getFullYear();

        
    
        document.querySelector('.selected-date').innerHTML = new Date().toDateString();
    
        let days = "";
        let arrayIndex = 0;

        //count down to output last month days
        for(let x = this.firstDayIndex; x > 0; x--){
            days += `<div class="prev-date day" id=${arrayIndex}>${this.prevLastDate - x + 1}</div>`
            arrayIndex++;
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
        this.highlightDays();

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







