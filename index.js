let currentDay = document.getElementById('currentDay');

let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let currentDate = new Date();
let day = currentDate.getDay();
//console.log(weekdays[day]);
currentDay.innerHTML = weekdays[day];
