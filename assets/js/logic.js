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

var quizText = document.createElement("p");
var questionNumber = 0;
var totalTime = 60;
var timeId;
var scoresArr = [];
var remainingQuestions = quizQuestions.length;
var scoreLink = document.querySelector(".scores").firstChild;
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
var endScreen = document.querySelector("#end-screen")
quizText.setAttribute("class", "feedback");



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

//This function presents the user with the questions. 
function giveQuestion () {
    questionTitle.innerHTML = quizQuestions[questionNumber].question;
    quizQuestions[questionNumber].choices.forEach(function (answer) {
        var button = document.createElement("button");
        button.textContent = answer;
        choices.appendChild(button);
    });   
    }
    
 //functions to add text if a user gets the answer right or wrong.
 //removeAnswerText renmoves the current question and moves on to the next one.   
    function removeLastQuestion () {
        choices.innerHTML = "";
    }

    function correctAnswerText() {
        quizText.textContent = "That's Correct! Well Done :)";
        questDiv.appendChild(quizText);
    }
    
    function wrongAnswerText () {
        quizText.textContent = "Sorry that's the wrong answer! :(";
        questDiv.appendChild(quizText);
    }
    
    function removeAnswerText () {
        if (questDiv.contains(questDiv.children[3])) {
            var removeText = questDiv.children[3];
            questDiv.remove(removeText);
        }
    }
    

    //This function runs the quiz
function startGame () {
    removeAnswerText();
    choices.addEventListener("click", function (e) {
        var gameTime = e.target;
        if ((gameTime.parentElement = choices)) {
            for (var i = 0; i < quizQuestions[questionNumber].choices.length; i++) {
            if (gameTime.textContent === quizQuestions[questionNumber].choices[i].quizText) {
                var theAnswer = quizQuestions[questionNumber].choices[i].correctAnswer;
            }
            }
            if (correctAnswer = true) {
                correctAnswerText();
                removeAnswerText();
                questionNumber++;
                remainingQuestions--;
                if (remainingQuestions > 0 && totalTime > 0) {
                    giveQuestion ();
                }else {
                    endGame();
                }
            } else if (correctAnswer = false) {
                removeLastQuestion();
                wrongAnswerText();
                totalTime = totalTime - 10;
                questionNumber++;
                remainingQuestions--;
                if (remainingQuestions > 0 && totalTime > 0) {
                    giveQuestion ();
                } else {
                    endGame ();
                }
            }
        }
    });
}    


function endGame () {
    questDiv.setAttribute("class", "hide");
    endScreen.removeAttribute("class");
    finalScore.innerHTML = totalTime;
    totalTime = 1;
}

//Event Listeners 

// start button event listener.
startBtn.addEventListener("click", function() {
    timeRemaining();
    startScreen.setAttribute("class", "hide");
    questDiv.removeAttribute("class");
    giveQuestion();
    startGame();
});

//submit button event listener: 
submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    var userScore = finalScore.innerHTML;
    var userInitials = initialsEl.value; 
    var scoresArrEl = userInitials + " - " + userScore;
    if (userInitials.length > 0 && userInitials.length < 3) {
        scoresArr.push(scoresArrEl)
    }
})


