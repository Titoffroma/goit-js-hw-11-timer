(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0HMw":function(e,t,n){},"7zLU":function(e,t){var n=new Date;Math.floor(n/864e5),Math.floor(n%864e5/36e5),Math.floor(n%36e5/6e4),Math.floor(n%6e4/1e3)},QfWi:function(e,t,n){"use strict";n.r(t);n("0HMw"),n("JBxO"),n("FdtR");var a=function(){function e(e){this.selector=e.selector,this.targetDate=e.targetDate,this.startCountdown()}var t=e.prototype;return t.createTimer=function(){var e=this;return new Promise((function(t,n){var a=document.querySelector(e.selector);a&&0===a.children.length?t(a):n("The timer cannot be found by ID")}))},t.parseTimerHTML=function(e){return e.innerHTML='<div class="field"><span class="value" data-value="days">11</span><span class="label">Days</span></div><div class="field"><span class="value" data-value="hours">11</span><span class="label">Hours</span></div><div class="field"><span class="value" data-value="mins">11</span><span class="label">Minutes</span></div><div class="field"><span class="value" data-value="secs">11</span><span class="label">Seconds</span></div>',{timerRef:e,titleRef:document.querySelector(".new-year-timer"),valueRef:document.querySelectorAll(".value"),labelRef:document.querySelectorAll(".label")}},t.startTimer=function(e){var t=this,n=e.timerRef,a=e.titleRef,s=e.valueRef,o=e.labelRef,r=setInterval((function(){var e=Date.parse(t.targetDate)-Date.now();s[0].textContent=Math.floor(e/864e5),s[1].textContent=Math.floor(e%864e5/36e5),s[2].textContent=Math.floor(e%36e5/6e4),s[3].textContent=Math.floor(e%6e4/1e3),o[0].textContent=1==s[0].textContent?"Day":"Days",o[1].textContent=1==s[1].textContent?"Hour":"Hours",o[2].textContent=1==s[2].textContent?"Minute":"Minutes",o[3].textContent=1==s[3].textContent?"Second":"Seconds",0==e&&(clearInterval(r),a.textContent="HAPPY NEW YEAR!!!",a.style.fontSize="50px")}),1e3);n.addEventListener("DOMSubtreeModified",this.animateTimer)},t.animateTimer=function(e){var t=e.target;t.classList.contains("value")&&(t.insertAdjacentHTML("afterEnd",'<span class="value after">'+t.textContent+"</span>"),setTimeout((function(){t.nextSibling.classList.add("trans")}),200),setTimeout((function(){t.nextSibling.remove()}),900))},t.startCountdown=function(){return this.createTimer().then(this.parseTimerHTML).then(this.startTimer.bind(this)).catch((function(e){console.warn(e)}))},e}();n("7zLU"),new a({selector:"#timer-1",targetDate:new Date("Jan 1, 2021")})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.6aa85d31ac09e43e3b0b.js.map