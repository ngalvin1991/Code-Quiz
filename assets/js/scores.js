//added this .js file for the scores as it is called for in the html document 'highscores'
var clearBtn = document.querySelector('#clear');
var scoresLi = document.querySelector('#highscores')
var scoresArr = JSON.parse(localStorage.getItem("Scores"));

for (var i = 0; i < scoresArr.length; i++) {
    var list = document.createElement("li");
    list.textContent= scoresArr[i];
    scoresLi.appendChild(list);
}


