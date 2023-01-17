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

var questionsEl = document.getElementById("questions");
var timerCounter = document.getElementById("timer");
var startButton = document.querySelector("#start");
var finalScore = document.getElementById("highscores");


startButton.addEventListener("click", startQuiz);

var timeRemaining = function () {
    totalTime--;
    if (totalTime >= 0) {
        timerCounter.textContent = totalTime;
    } 

    if (totalTime === 0) {
        alert("Oh no, you've ran out of time, lets try again :)")
        return
    }
}

function startQuiz() {
    timerCounter = setInterval(timeRemaining, 1000);
    startButton.setAttribute("style", "display: none");
    giveQuestion();
}


function giveQuestion() {
    var currentQuestion = quizQuestions[questionNumber];
    var questionH3 = document.createElement("h3")
    questionH3.textContent = currentQuestion.question;
    quiz.appendchild(questionH3);

    currentQuestion.correctAnswerIndex.forEach((answer) => {
        var answersEl = document.createElement("button")
        answersEl.textContent = answer;
        quiz.appendchild(answersEl)
        answersEl.onclick = function () {
            if (answer === currentQuestion.correctAnswerIndex) {
                answerCorrect++
                correctAnswerIndex.textContent = "That's Correct! :)";
            } else
                totalTime -= 10
        }
        questionNumber++;
        if (questionNumber == quizQuestions.length) {
            quiz.innerHTML = "";
            clearInterval(timer);
            document.getElementById("hide").removeAttribute("style");
        } else {
            quiz.innerHTML = "";
            giveQuestion()
        }
    });

}

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



