let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


let h = 0;
let m = 0;
let s = 0;

let timer = null;


function myTimer() {

    s++;
    if (s == 60) {
        s = 0;
        m++;
        if (m == 60) {
            m = 0;
            hour++;
        }
    }
    sec.innerText = s < 10 ? "0" + s : s;
    min.innerHTML = m < 10 ? "0" + m : m;
    hour.innerHTML = h < 10 ? "0" + h : h;
}

function startTimer() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(myTimer, 1000);
}

function stopTimer() {
    clearInterval(timer);
}
function resetTimer() {
    sec.innerHTML = "00";
    min.innerHTML = "00";
    hour.innerHTML = "00";
    h = 0;
    m = 0;
    s = 0;

}
