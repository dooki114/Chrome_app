const clock = document.querySelector("h2#clock");


//this function must run in every 2 secs
function getClock() {
    const date = new Date();

    const hours = String(date.getHours());
    const minutes = String(date.getMinutes());
    const seconds = String(date.getSeconds());

    clock.innerText = `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
}

//this is how its done
getClock();
setInterval(getClock, 1000);


//string padding
//"1".padStart(2, "0");