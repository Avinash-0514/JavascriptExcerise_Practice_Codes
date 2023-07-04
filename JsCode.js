1.Write a search JavaScript program to display the current day and time in the following format.  
		Sample Output : Today is : Tuesday.
		Current time is : 10 PM : 30 : 38
=============
function todayFun() {
const days = ['Sun','monday','Tuesday','wed','Thur','Friday','sat'];
const a = new Date();
let todayDay = a.getDay(), timeNow = a.getTime(), textConv = days[todayDay];
let hrs = a.getHours(), mins = a.getMinutes(), secs = a.getSeconds();
var currTime = hrs+":"+mins+":"+secs;
document.getElementById("today").innerHTML = textConv;
document.getElementById("time").innerHTML = currTime;
setTimeout(todayFun,5000);
}
todayFun();
=========================

