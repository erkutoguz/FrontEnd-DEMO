const daySpan = document.querySelector('#day');
const hourSpan = document.querySelector('#hour');
const minuteSpan = document.querySelector('#minute');
const secondSpan = document.querySelector('#second');


const dayMS = parseInt(daySpan.innerHTML) * 24 * 60 * 60 * 1000;
const hourMS = parseInt(hourSpan.innerHTML) * 60 * 60 * 1000;
const minuteMS = parseInt(minuteSpan.innerHTML) * 60 * 1000;
const secondMS = parseInt(secondSpan.innerHTML) * 1000;

const miliSecondsTillLaunch = dayMS + hourMS + minuteMS + secondMS;
const launchDate = Date.now() + miliSecondsTillLaunch;


function launch() {
    let launchTimeLeft = launchDate - Date.now();
    
    let dayLeft = Math.floor(launchTimeLeft / 24 / 60 / 60 / 1000);
    let hourLeft = Math.floor(launchTimeLeft / 60 / 60 / 1000) % 24;
    let minuteLeft = Math.floor(launchTimeLeft / 60 / 1000) % 60;
    let secondLeft = Math.floor(launchTimeLeft / 1000) % 60;


    daySpan.innerHTML = checkTwoDigit(dayLeft);
    daySpan.setAttribute('attribute', checkTwoDigit(dayLeft));

    hourSpan.innerHTML = checkTwoDigit(hourLeft);
    hourSpan.setAttribute('attribute', checkTwoDigit(hourLeft));

    minuteSpan.innerHTML = checkTwoDigit(minuteLeft);
    minuteSpan.setAttribute('attribute', checkTwoDigit(minuteLeft));

    secondSpan.innerHTML = checkTwoDigit(secondLeft);
    secondSpan.setAttribute('attribute', checkTwoDigit(secondLeft));
}

function checkTwoDigit(time) {
    if (time < 10) {
        return "0" + time;
    } else {
        return time
    }
}


setInterval(launch, 1000);