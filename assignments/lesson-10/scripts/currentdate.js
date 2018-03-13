var theDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var theMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


var d = new Date();
var dayName = theDay[d.getDay()];
var day = d.getDate();
var monthName = theMonths[d.getMonth()];
var year = d.getFullYear();

document.getElementById("currentdate").innerHTML = dayName + ", " + day + " " + monthName + " " + year;