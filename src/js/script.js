date = new Date();
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
year = date.getFullYear();
let m = month[date.getMonth()];
day = date.getDate();
document.getElementById("date").innerHTML = m  + " " + day + ", " + year;