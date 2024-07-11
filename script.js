let timer = null;
let [hours,minutes,seconds] = [0,0,0];
let timerDisplay = document.getElementById('display');

//function to display timer
function displayTimer() {
    seconds++
    if(seconds === 60) {
        seconds = 0;
        minutes++;
        
        if(minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    //condition for single digit sequence for h,m and s : (01,02,03)
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    timerDisplay.textContent = `${h}: ${m}: ${s}`;
}

//on click for start function 
document.getElementById('start-btn').addEventListener("click", () => {
    if(timer != null) {
        clearInterval(timer);
    }
    timer = setInterval(displayTimer, 1000);
});

//on clcik for pause function
document.getElementById('pause-btn').addEventListener("click", () => {
    clearInterval(timer);
});

//on click for reset button
document.getElementById('reset-btn').addEventListener("click", () => {
      //resetting to 0
      [hours,minutes,seconds] = [0,0,0];
      timerDisplay.textContent = "00: 00: 00";
})