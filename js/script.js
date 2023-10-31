const question = document.getElementById('question');//variable that give access to the question container in the DOM
const answer1 = document.getElementById('answer1');//variable that gives access to the first answer in the DOM
const answer2 = document.getElementById('answer2');//variable that gives access to the first answer in the DOM
const answer3 = document.getElementById('answer3');//variable that gives access to the first answer in the DOM
const answer4 = document.getElementById('answer4');//variable that gives access to the first answer in the DOM
const answer5 = document.getElementById('answer5');//variable that gives access to the first answer in the DOM
const answer6 = document.getElementById('answer6');//variable that gives access to the first answer in the DOM
const answer7 = document.getElementById('answer7');//variable that gives access to the first answer in the DOM

const autoplayBtn = document.getElementById('autoplayBtn');
const hostBtn = document.getElementById('hostBtn');




const startBtn = document.getElementById('start-btn'); //points to the button that starts the game
const timeElement = document.getElementById('time'); //variable that gives access to the clock in the DOM 

let time = 0; //seconds allowed per turn
let timerInterval; //variable for the clock interval
let whoseTurn = 1;

let index = -1;

// let currentCardIndex = Math.floor(Math.random() * cardData.length); //index that indicates which card is currently being displayed
let currentQuestion = cardData[index];
let correctAnswers = 0;

let autoplay = true;


function hostMode() {
    console.log('host mode active');
    autoplay = false;
    console.log('autoplay is :', autoplay);
}

function autoplayMode() {
    console.log('autoplay mode active');
    autoplay = true;
    console.log('autoplay is :', autoplay);

}

function startTimer() {

    if (whoseTurn == 1) {
        if (time == 0) {
            index++;
            currentQuestion = cardData[index];
            clearCard();
            updateQuestion();
            time = 30; //resets the timer to 60 seconds
            clearInterval(timerInterval); //temperarily keeps the timer interval from doubling up. disabling the button while time is running with fix the issue permantantly
            // showCard();
            timerInterval = setInterval(updateTimer, 1000);
        } else {
            // playTimerRunning();

        }
    } else {
        if (time == 0) {
            index++;
            currentQuestion = cardData[index];
            clearCard();
            updateQuestion();
            time = 30; //resets the time to 60 seconds 
            clearInterval(timerInterval); //temperarily keeps the timer interval from doubling up. disabling the button while time is running with fix the issue permantantly
            // showCard();
            timerInterval = setInterval(updateTimer, 1000);
            // whoseTurn = 2;
            console.log("It's team ", whoseTurn, " turn.");
            print();
        } else {
            // playTimerRunning();
        }


    }
}

//fuction that updates the time and subtract and extra second afer wrong answer
function updateTimer() {
    timeElement.innerText = time;
    if (time <= 0 || correctAnswers == 7) {
        clearInterval(timerInterval);
        correctAnswers = 0;
        time = 0;
        if (whoseTurn == 1) {
            whoseTurn++;
        } else if (whoseTurn == 2) {
            whoseTurn--;
        }

    } else {
        time--;
    }
}

function updateQuestion() {

    question.innerHTML = currentQuestion.phrase;
    answer1.innerHTML = currentQuestion.answers[0].blank;
    answer2.innerHTML = currentQuestion.answers[1].blank;
    answer3.innerHTML = currentQuestion.answers[2].blank;
    answer4.innerHTML = currentQuestion.answers[3].blank;
    answer5.innerHTML = currentQuestion.answers[4].blank;
    answer6.innerHTML = currentQuestion.answers[5].blank;
    answer7.innerHTML = currentQuestion.answers[6].blank;


}

function clearCard() {
    question.innerHTML = '';
    answer1.innerHTML = '';
    answer2.innerHTML = '';
    answer3.innerHTML = '';
    answer4.innerHTML = '';
    answer5.innerHTML = '';
    answer6.innerHTML = '';
    answer7.innerHTML = '';

}


function answer1Correct() {
    answer1.innerHTML = currentQuestion.answers[0].answer;
    correctAnswers++;
    console.log("questions one correct");
}

function answer2Correct() {
    answer2.innerHTML = currentQuestion.answers[1].answer;
    correctAnswers++;
}
function answer3Correct() {
    answer3.innerHTML = currentQuestion.answers[2].answer;
    correctAnswers++;
}
function answer4Correct() {
    answer4.innerHTML = currentQuestion.answers[3].answer;
    correctAnswers++;
}
function answer5Correct() {
    answer5.innerHTML = currentQuestion.answers[4].answer;
    correctAnswers++;
}
function answer6Correct() {
    answer6.innerHTML = currentQuestion.answers[5].answer;
    correctAnswers++;
}
function answer7Correct() {
    answer7.innerHTML = currentQuestion.answers[6].answer;
    correctAnswers++;
}


startBtn.addEventListener('click', startTimer);
answer1.addEventListener('click', answer1Correct);
answer2.addEventListener('click', answer2Correct);
answer3.addEventListener('click', answer3Correct);
answer4.addEventListener('click', answer4Correct);
answer5.addEventListener('click', answer5Correct);
answer6.addEventListener('click', answer6Correct);
answer7.addEventListener('click', answer7Correct);

hostBtn.addEventListener('click', hostMode);
autoplayBtn.addEventListener('click', autoplayMode)
