var sec = 0;
var min = 0;
var hour = 0;
let numSplit = 1;
var displaySecs = document.querySelector('.js-sec');
var displayMins = document.querySelector('.js-min');
var displayHours = document.querySelector('.js-hour');
var btnStart = document.querySelector('.js-btn-start');
var btnStop = document.querySelector('.js-btn-pause');
var btnReset = document.querySelector('.js-btn-reset');
var btnSplit = document.querySelector('.js-btn-split');

//start-pause-reset

var timerId;

function funcTimer() {
    sec++;

    if (sec === 60) {
        min++;
        sec = 0;

        if (min < 10) {
            min = '0' + min;
            displayMins.innerHTML = min.toString();
        }
        else {
            displayMins.innerHTML = min.toString();
        }
    }

    if (min === 60) {
        hour++;
        min = 0;

        if (hour < 10) {
            hour = '0' + hour;
            displayHours.innerHTML = hour.toString();
        }
        else {
            displayHours.innerHTML = hour.toString();
        }
    }

    if (sec < 10) {
        sec = '0' + sec;
    }

    displaySecs.innerHTML = sec.toString();
}

btnStart.addEventListener('click', function () {
    timerId = setInterval(funcTimer, 1000);
});

btnStop.addEventListener('click', function () {
    clearInterval(timerId);
});

btnReset.addEventListener('click', function () {
    clearTimeout(timerId);
    sec = '00';
    min = '00';
    hour = '00';
    displaySecs.innerHTML = sec.toString();
    displayMins.innerHTML = min.toString();
    displayHours.innerHTML = hour.toString();

    btnStop.style.display = 'none';
    btnStart.style.display = 'inline-block';

    let removeSplit = document.querySelector('.display__split');
    if (removeSplit === null) {
        return;
    } else {
        removeSplit.remove();
    }
    numSplit = 1;
});

//btn start/pause

btnStart.addEventListener('click', function () {
    btnStart.style.display = 'none';
    btnStop.style.display = 'inline-block';
});

btnStop.addEventListener('click', function () {
    btnStop.style.display = 'none';
    btnStart.style.display = 'inline-block';
});

//split

btnSplit.addEventListener('click', function () {

    let wrapSplit = document.querySelector('.display__split');

    if (wrapSplit === null) {
        var displaySplit = document.createElement('div');
        displaySplit.classList.add('display__split');
        let wrapper = document.querySelector('.main');
        wrapper.append(displaySplit);
        wrapSplit = document.querySelector('.display__split');
    };

    let innerSplit = document.createElement('div');
    wrapSplit.append(innerSplit);

    let splitMin = min;
    let splitHour = hour;
    // console.log(splitMin.length);
    // console.log(splitHour.length);

    if (min.toString().length < 2) {
        splitMin = '0' + splitMin;
    };

    if (hour.toString().length < 2) {
        splitHour = '0' + splitHour;
    };

    innerSplit.innerHTML = numSplit++ + ' Split: ' + splitHour + ':' + splitMin + ':' + sec;
});