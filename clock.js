const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

// setInterval(() => {

    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

// });

// parte do Countdown

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "1 Jan 2023";

function Countdown(){

    const newYearsDate = new Date(newYears);
    const currentDate = new  Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = math.floor(totalSeconds / 3600 / 24);
    const hours = math.floor(totalSeconds / 3600) % 24;
    const mins = math.floor(totalSeconds / 60) % 60;
    const seconds = math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    mins.innerHTML = formatTime(mins);
    seconds.innerHTML= formatTime(seconds);

   
}

function formatTime(time){
    return time < 10? `0${time}` : time;
}

Countdown();

setInterval(Countdown, 1000);