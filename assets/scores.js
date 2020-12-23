
var highscores = JSON.parse(window.localStorage.getItem("nameScores")) || [];


highscores.sort(function(a, b) {
return b.nameScores - a.nameScores;
});

highscores.forEach(function(nameScore) {
    
    var liTag = document.createElement("li");
    liTag.textContent = nameScore.name + " - " + nameScore.score;

    var olEl = document.getElementById("olEl");
    olEl.appendChild(liTag);
});

remove.addEventListener("click", function() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
});

