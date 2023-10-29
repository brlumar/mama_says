const startBtn = document.getElementById('start-btn'); //points to the button that starts the game
const timeElement = document.getElementById('time'); //variable that gives access to the clock in the DOM 
let time = 0; //seconds allowed per turn
let timerInterval; //variable for the clock interval
let whoseTurn = 1;




function startTimer() {

    if (whoseTurn == 1) {
        if (time == 0) {

            time = 30; //resets the timer to 60 seconds
            clearInterval(timerInterval); //temperarily keeps the timer interval from doubling up. disabling the button while time is running with fix the issue permantantly
            // showCard();
            timerInterval = setInterval(updateTimer, 1000);
        } else {
            // playTimerRunning();

        }
    } else {
        if (time == 0) {

            time = 30; //resets the time to 60 seconds 
            clearInterval(timerInterval); //temperarily keeps the timer interval from doubling up. disabling the button while time is running with fix the issue permantantly
            // showCard();
            timerInterval = setInterval(updateTimer, 1000);
            // whoseTurn = 2;
            console.log("It's team ", whoseTurn, " turn.");
            print();
        } else {
            playTimerRunning();
        }


    }
}

//fuction that updates the time and subtract and extra second afer wrong answer
function updateTimer() {
    timeElement.innerText = time;
    if (time <= 0) {
        clearInterval(timerInterval);

        if (whoseTurn == 1) {
            whoseTurn++;
        } else if (whoseTurn == 2) {
            whoseTurn--;
        }

    } else {
        time--;
    }
}

startBtn.addEventListener('click', startTimer);
