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

//getElementsbyID variables
var timer = document.getElementById("timer");
var startDiv = document.getElementById("start");
var questionsDiv = document.getElementById("questions")
var choicesDiv = document.getElementById("choices")



//The timer will begin when the start button is pressed. 
// var timeLength = 180;
// function startQuiz() {
//     questionIndex = 0;
//     timeLength = 180;
//     timer.textContent = timeLength;

    
// }