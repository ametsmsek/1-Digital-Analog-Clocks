setInterval(setClockAnalog, 500);

const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');
const hourHand = document.querySelector('[hour-hand]');
const minuteHand = document.querySelector('[minute-hand]');
const secondHand = document.querySelector('[second-hand]');



function setClockAnalog(){

    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360);
}

function setClockDigital(){
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date ().getSeconds();
    let ampm = "AM";

    if(hour > 12){
        hour = hour - 12;
        ampm = "PM";
    } 

    hour = hour<10 ? "0" + hour : hour;
    second = second<10 ? "0" + second : second;
    minute = minute<10 ? "0" + minute : minute;

    hoursEl.innerText = hour;
    minutesEl.innerText = minute;
    secondsEl.innerHTML = second;
    ampmEl.innerText= ampm;
    setTimeout(()=>{
        setClockDigital()
    },500);
}

setClockAnalog();

setClockDigital();