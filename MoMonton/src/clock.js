const clock = document.querySelector(".js-clock .clock_text");

function getTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    const time = `${hours}:${minutes}:${seconds}`

    clock.innerHTML = time;
}

function init() { 
    getTime();
    setInterval(getTime, 1000);
}

init();