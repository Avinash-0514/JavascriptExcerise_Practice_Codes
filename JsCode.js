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
getRotated();
***********************************************************************
/* 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.   */
function findLeapYear(){
var year;
let a ="No Value Entered";
var leap = parseInt(document.getElementById("entYr").value); 
console.log(leap);
if (leap/400){
year = "Its a Leap Year";
document.getElementById("result").innerHTML= year;
}else if (leap/100){
year = "Its is not a Leap Year";
document.getElementById("result").innerHTML= year;
}else if (leap/4){
year = "Its is not a Leap Year";
document.getElementById("result").innerHTML= year;
}
else{
document.getElementById("result").innerHTML = a
}
}
findLeapYear()
***************************************************************************
7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  
==================

<body>
  <label>Year1</label>
  <input type ="textbox" id="year1">
   <label>Year2</label>
  <input type ="textbox" id="year2">
  <button onclick=calculateSundays()>
  Find
  </button><span id="getResult"></span>
</body>
function calculateSundays(){
var year = "1st January is being a Sunday "+year;
let yr1 = parseInt(document.getElementById("year1").value);
let yr2 = parseInt(document.getElementById("year2").value);
for(year = yr1;year<= yr2; year++){
var day = new Date(year,0,1);
if(day.getDay()===0){
document.getElementById("getResult").innerHTML +=year +"<br>";
}
}
}
calculateSundays()
***************************************************************************
