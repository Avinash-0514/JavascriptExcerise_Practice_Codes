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
*************************************************************************************
2.Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
=============
function getDate(){
const time = new Date();
let a = time.getDate(),b = time.getMonth(),c=time.getFullYear("");
document.getElementById("dates").innerHTML = a+":"+b+":"+c;
console.log(a,b,c);
}
getDate();
***************************************************************************************	
3.Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. 
======================
function getAreaOfTriangle(){
let a = 5,b=6,c=7;
let triangle= a+b+c/2;
document.getElementById("A-of-Tri").innerHTML = triangle;
console.log(triangle);
}
getAreaOfTriangle();
*******************************************************************************************
4.Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.
=========================  
function getRotated(){
let arrRotate = ['w','3','r','e','s','o','u','r','c','e'];

let reversed = arrRotate.reverse(),joinedString =reversed.join('');

console.log(reversed);
document.getElementById("rotate").textContent = joinedString
}
******************************************
getRotated();
