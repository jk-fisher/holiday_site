(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var t=document.querySelector(".prev-month"),n=document.querySelector(".next-month"),a=document.querySelector(".prev-year"),l=document.querySelector(".next-year"),d=document.querySelector(".days"),s=function(){function n(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.this.date=new Date,this.month=["January","February","March","April","May","June","July","August","September","October","November","December"]}var l,s;return l=n,(s=[{key:"renderCalendar",value:function(){var e=this;this.date.setDate(1);var n=new Date(this.date.getFullYear(),this.date.getMonth()+1,0).getDate(),l=new Date(this.date.getFullYear(),this.date.getMonth(),0).getDate();console.log(l);var s=this.date.getDay(),o=new Date(this.date.getFullYear(),this.date.getMonth()+1,0).getDay();console.log(o);var r=7-o-1;document.querySelector(".month").innerHTML=this.month[this.date.getMonth()],document.querySelector(".year").innerHTML=this.date.getFullYear(),document.querySelector(".selected-this.date").innerHTML=(new Date).toDateString();var c="";for(x=s;x>0;x--)c+='<div class="prev-this.date day" id='.concat(l-x+1,">").concat(l-x+1,"</div>");for(i=1;i<=n;i++)i===(new Date).getDate()&&this.date.getMonth()===(new Date).getMonth()&&this.date.getFullYear()===(new Date).getFullYear()?c+='<div class="today day" id='.concat(i,">").concat(i,"</div>"):c+='<div class="day" id='.concat(i,">").concat(i,"</div>");for(j=1;j<=r;j++)c+='<div class="next-this.date day" id='.concat(j,">").concat(j,"</div>");d.innerHTML=c,this.date.getFullYear()<=(new Date).getFullYear()&&this.date.getMonth()<=(new Date).getMonth()?(a.classList.add("none"),t.classList.add("none")):this.date.getFullYear()<=(new Date).getFullYear()&&a.classList.add("none"),this.date.getFullYear()>=(new Date).getFullYear()&&this.date.getMonth()>=(new Date).getMonth()+1&&t.classList.remove("none"),this.date.getFullYear()>(new Date).getFullYear()&&(a.classList.remove("none"),t.classList.remove("none")),d.addEventListener("click",(function(t){if(t.target.classList.contains("day")){t.target.classList.add("clicked");var n=t.target.id;e.selectDays(n)}}))}},{key:"selectDays",value:function(e){selectedDates.innerHTML=new Date(this.date.getFullYear(),this.date.getMonth(),e).toDateString()}}])&&e(l.prototype,s),n}(),o=void 0,r=document.getElementById("myModal"),c=document.getElementById("amenities-btn"),u=document.getElementsByClassName("close")[0];c.addEventListener("click",(function(){r.style.display="block"})),u.addEventListener("click",(function(){r.style.display="none"})),window.addEventListener("click",(function(e){e.target==r&&(r.style.display="none")})),document.getElementById("myTopnav").addEventListener("click",(function(){"topnav"===nav.className?nav.className+=" responsive":nav.className="topnav"})),window.addEventListener("scroll",(function(){var e;e=document.getElementById("checkAvailabilityBtn"),document.body.scrollTop>20||document.documentElement.scrollTop>20?e.style.display="block":e.style.display="none"})),document.getElementById("moreBtn").addEventListener("click",(function(){var e,t,n,a;e=document.getElementById("dots"),t=document.getElementById("more"),n=document.getElementById("moreBtn"),a=document.getElementById("imageCards"),"none"===e.style.display?(e.style.display="inline",n.innerHTML="Read more <i class='fas fa-angle-down'>",t.style.display="none",a.style.marginBottom="0px"):(e.style.display="none",n.innerHTML="Read less <i class='fas fa-angle-up'></i>",t.style.display="inline",a.style.marginBottom="180px")})),(new s).renderCalendar(),t.addEventListener("click",(function(){o.date.setMonth(o.date.getMonth()-1),o.renderCalendar()})),n.addEventListener("click",(function(){o.date.setMonth(o.date.getMonth()+1),o.renderCalendar()})),a.addEventListener("click",(function(){o.date.setFullYear(o.date.getFullYear()-1),o.renderCalendar()})),l.addEventListener("click",(function(){o.date.setFullYear(o.date.getFullYear()+1),o.renderCalendar()}))})();