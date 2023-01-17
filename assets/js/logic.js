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

var correctAnswers = 0;
var questionNumber = 0;
var totalTime = 180;
var timeId;
var scoresArr = [];


var startBtn = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var choices = document.querySelector(".choices");
var questDiv = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var timerEl = document.querySelector("#time");
var finalScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var initialsEl = document.querySelector("#intials");
var submitBtn = document.querySelector("submit");


function timeRemaining () {
    var timer = setInterval(function() {
        totalTime--;
        timerEl.textContent = totalTime;
        if (totalTime <= 0) {
            clearInterval(timer);
            questDiv.setAttribute("class", "hide");
            finalScreen.removeAttribute("class");
        } else {
            finalScore.innerHTML = totalTime -1;
        }
    }, 1000)
}

function giveQuestion () {
    questionTitle.innerHTML = questions[questionNumber].question;
    questions[questionNumber].correctAnswerIndex.forEach(function (answer) {
        var button = document.createElement("button");
        button.textContent = answer;
        choices.appendChild(button);
    });   
    }

    


// function giveQuestion() {
//     var currentQuestion = quizQuestions[questionNumber];
//     var questionH3 = document.createElement("h3")
//     questionH3.textContent = currentQuestion.question;
//     start.appendchild(questionH3);

//     currentQuestion.correctAnswerIndex.forEach((answer) => {
//         var answersEl = document.createElement("button")
//         answersEl.textContent = answer;
//         start.appendchild(answersEl)
//         answersEl.onclick = function () {
//             if (answer === currentQuestion.correctAnswerIndex) {
//                 answerCorrect++
//                 correctAnswerIndex.textContent = "That's Correct! :)";
//             } else
//                 totalTime -= 10
//         }
//         questionNumber++;
//         if (questionNumber == quizQuestions.length) {
//             start.innerHTML = "";
//             clearInterval(timer);
//             document.getElementById("hide").removeAttribute("style");
//         } else {
//             start.innerHTML = "";
//             giveQuestion()
//         }
//     });

// }

// function endQuiz() {
//     clearInterval(timeId);
//     var finalScreenEl = document.getElementById("end-screen");
//     finalScreenEl.removeAttribute("class");
//     var totalScoreEl = document.getElementById("final-score");
//     totalScoreEl.textContent = time;
//     questionsEl.setAttribute("class", "hide");

// }


// //This function saves the users name and score in local storage. 
// function saveHighScores() {
//     var initials = initialsEl.value.trim();
//     if (initials !== "") {
//         var highscore = JSON.parse(window.localStorage.getItem("highscore")) || [];
//         var yourScore = {
//             score: time,
//             name: initials
//         };
//         highscore.push(yourScore);
//         window.localStorage.setItem("highscore", JSON.stringify(highscore));
//     }
// }


// startButton.addEventListener("click", function() {
//     time();
//     startScreen.setAttribute("class", "hide");
//     questDiv.removeAttribute("class");
//     giveQuestion();
    
// });
