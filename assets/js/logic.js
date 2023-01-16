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
var questionIndex = 0;
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
    timeId = setInterval(clockCountDown, 1000);
    timerEl.textContent = 180;
    var mainPage = document.getElementById("start-screen");
    mainPage.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    giveQuestion ()
}

//creation of answer list 
// This function loops through the array of questions and answers. 
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

//This function checks if the user has given the correct answer
// if they do not give the right answer then time will be deducted 
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

//This function ends the quiz by removing the questions 
// stopping the tiimer and showing the user the final score.
function endQuiz () {
    clearInterval(timeId);
    var finalScreenEl = document.getElementById("end-screen");
    finalScreenEl.removeAttribute("class");
    var totalScoreEl = document.getElementById("final-score");
    totalScoreEl.textContent = time;
    questionsEl.setAttribute("class", "hide");
    
}

//This function ends the quiz if the timer gets to 0. the user will then have to start the quiz
//again. 
function clockCountDown () {
    time--; 
    timerEl.textContent = time;
    if (time <= 0) {
        endQuiz();
    }
}

//This function saves the users name and score in local storage. 
function saveHighScores () {
    var initials = initialsEl.value.trim();
    if (initials !== "") {
        var highscore = JSON.parse(window.localStorage.getItem("highscore")) || [];
        var yourScore  = {
            score: time, 
            name: initials
        };
        highscore.push(yourScore);
        window.localStorage.setItem("highscore", JSON.stringify(highscore));
    }
}

