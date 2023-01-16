// ACCEPTANCE CRITERIA 
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

// variables for functions
var answerIsCorrect = 0;
var questionNumber = 0;
var totalScore = 0;
var questionIndex = 0;
var gameOver 
var initialNumMax = 3;
var timeId;

var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#timer");
var submitButton = document.querySelector("#submit");
var choicesEl = document.querySelector("#choices");
var startButton = document.querySelector("#start")
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");
var clearHs = document.querySelector("#clear");


var startQuiz = function () {
    timeId = setInterval(1000);
    timerEl.textContent = 180;
    var mainPage = document.getElementById("start-screen");
    mainPage.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    giveQuestion ()
}

function giveQuestion () {
    var giveQuestion = quizQuestions[questionIndex];
    var questionEl = document.getElementById("question-title")
    questionEl.textContent = giveQuestion.question;
    choicesEl.innerHTML = "";
    giveQuestion.choices.forEach(function(choice,i){
        var choicesBtn = document.createElement("button");
        choicesBtn.setAttribute("value", choice);
        choicesBtn.textContent = i + 1 + ". " + choices;
        choicesBtn.onclick = clickQuestion;
        choicesEl.appendChild(choicesBtn);

    });
}

function clickQuestion () {
    if (this.value !== question[questionIndex].correctAnswerIndex) {
        time -= 10;
        if (time < 0) {
            time = 0;
        }
        timerEl.textContent = time;
        feedbackEl.textContent = "Incorrect!!! :("
    } else {
        feedbackEl.textContent = "Correct! Well Done! :)"
    }
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
        feedbackEl.setAttribute("class", "feedback hide");  
    }, 1000);

    questionIndex++; 
    if (questionIndex === question.length) {
        endQuiz ();
    } else {
        giveQuestion ();
    }
}

function clockCountDown () {
    time--; 
    timerEl.textContent = time;
    if (time <= 0) {
        endQuiz();
    }
}



// //The timer will begin when the start button is pressed. 
// var timeLength = 180;
// function startQuiz() {
//     questionIndex = 0;
//     timeLength = 180;
//     timer.textContent = timeLength;

//     var startTimer = setInterval(function() {
//         timeLength --;
//         timer.textContent = timeLength;
//         if (timeLength <= 0) {
//             clearInterval(startTimer)
//             if (questionIndex < quizQuestions - 1) {
//                 gameOver ();
//             }
//         }
//     }, 1000);

//     seeQuiz() 
// };

// function seeQuiz() {
//     anotherQuestion ();
// }

// function nextQuestion () {
// questionTitle.textContent = quizQuestions[questionIndex].question;
// }   