(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var t=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.date=new Date,this.month=["January","February","March","April","May","June","July","August","September","October","November","December"],this.prevMonth=document.querySelector(".prev-month"),this.nextMonth=document.querySelector(".next-month"),this.prevYear=document.querySelector(".prev-year"),this.nextYear=document.querySelector(".next-year"),this.monthDays=document.querySelector(".days"),this.dateEnquiry=document.querySelector(".date-enquiry")}var n,a;return n=t,(a=[{key:"renderCalendar",value:function(){var e=this;this.date.setDate(1);var t=new Date(this.date.getFullYear(),this.date.getMonth()+1,0).getDate(),n=new Date(this.date.getFullYear(),this.date.getMonth(),0).getDate();console.log(n);var a=this.date.getDay();console.log(a);var o=new Date(this.date.getFullYear(),this.date.getMonth()+1,0).getDay();console.log(o);var l=7-o-1;document.querySelector(".month").innerHTML=this.month[this.date.getMonth()],document.querySelector(".year").innerHTML=this.date.getFullYear(),console.log(this.month[this.date.getMonth()]),console.log(this.date.getFullYear()),document.querySelector(".selected-date").innerHTML=(new Date).toDateString();var s="";console.log(s,a);for(var r=a;r>0;r--)s+='<div class="prev-date day" id='.concat(n-r+1,">").concat(n-r+1,"</div>"),console.log(s);for(var i=1;i<=t;i++)i===(new Date).getDate()&&this.date.getMonth()===(new Date).getMonth()&&this.date.getFullYear()===(new Date).getFullYear()?s+='<div class="today day" id='.concat(i,">").concat(i,"</div>"):s+='<div class="day" id='.concat(i,">").concat(i,"</div>");for(var d=1;d<=l;d++)s+='<div class="next-date day" id='.concat(d,">").concat(d,"</div>");console.log("test2"),this.monthDays.innerHTML=s,this.date.getFullYear()<=(new Date).getFullYear()&&this.date.getMonth()<=(new Date).getMonth()?(this.prevYear.classList.add("none"),this.prevMonth.classList.add("none")):this.date.getFullYear()<=(new Date).getFullYear()&&this.prevYear.classList.add("none"),this.date.getFullYear()>=(new Date).getFullYear()&&this.date.getMonth()>=(new Date).getMonth()+1&&this.prevMonth.classList.remove("none"),this.date.getFullYear()>(new Date).getFullYear()&&(this.prevYear.classList.remove("none"),this.prevMonth.classList.remove("none")),this.monthDays.addEventListener("click",(function(t){if(t.target.classList.contains("day")){t.target.classList.add("clicked");var n=t.target.id;e.selectDays(n)}}))}},{key:"selectDays",value:function(e){console.log(e),this.dateEnquiry.innerHTML=new Date(this.date.getFullYear(),this.date.getMonth(),e).toDateString()}}])&&e(n.prototype,a),t}(),n=document.getElementById("myModal"),a=document.getElementById("amenities-btn"),o=document.getElementsByClassName("close")[0];a.addEventListener("click",(function(){n.style.display="block"})),o.addEventListener("click",(function(){n.style.display="none"})),window.addEventListener("click",(function(e){e.target==n&&(n.style.display="none")})),document.getElementById("myTopnav").addEventListener("click",(function(){"topnav"===nav.className?nav.className+=" responsive":nav.className="topnav"})),window.addEventListener("scroll",(function(){var e;e=document.getElementById("checkAvailabilityBtn"),document.body.scrollTop>20||document.documentElement.scrollTop>20?e.style.display="block":e.style.display="none"})),document.getElementById("moreBtn").addEventListener("click",(function(){var e,t,n,a;e=document.getElementById("dots"),t=document.getElementById("more"),n=document.getElementById("moreBtn"),a=document.getElementById("imageCards"),"none"===e.style.display?(e.style.display="inline",n.innerHTML="Read more <i class='fas fa-angle-down'>",t.style.display="none",a.style.marginBottom="0px"):(e.style.display="none",n.innerHTML="Read less <i class='fas fa-angle-up'></i>",t.style.display="inline",a.style.marginBottom="180px")}));var l=new t;l.renderCalendar(),l.prevMonth.addEventListener("click",(function(){l.date.setMonth(l.date.getMonth()-1),l.renderCalendar()})),l.nextMonth.addEventListener("click",(function(){l.date.setMonth(l.date.getMonth()+1),l.renderCalendar()})),l.prevYear.addEventListener("click",(function(){l.date.setFullYear(l.date.getFullYear()-1),l.renderCalendar()})),l.nextYear.addEventListener("click",(function(){l.date.setFullYear(l.date.getFullYear()+1),l.renderCalendar()}))})();