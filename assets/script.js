var timeRemaining = document.querySelector(".timeRemaining");
var buttonChoices = document.querySelector("#buttonChoices");
var choices = document.querySelectorAll(".answerButtons");
var beginQuiz = document.getElementById("beginQuiz");
var startContent = document.querySelector("#startContent");
var questionsContent = document.querySelector("#questionsContent");
var displayedQuestion = document.querySelector("#displayedQuestion");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var questionGrade = document.querySelector("#questionGrade");
var correctIncorrect = document.querySelector("#correctIncorrect");
var finalScore = document.querySelector("#finalScore");
var submitHighScore = document.querySelector("#submitBtn");
var initialsInput = document.querySelector("#initials");
var olEl = document.querySelector("#olEl");
var remove = document.querySelector("#remove");




var questions = [

    {

        question : "Question 1?",
        option1 : "1: Incorrect Answer",
        option2 : "2: Incorrect Answer",
        option3 : "3: Correct Answer",
        option4 : "4: Incorrect Answer",
        correct : "3"

    },{

        question : "Question 2?",
        option1 : "1: Incorrect Answer",
        option2 : "2: Correct Answer",
        option3 : "3: Incorrect Answer",
        option4 : "4: Incorrect Answer",
        correct : "2"

    },{

        question : "Question 3?",
        option1 : "1: Incorrect Answer",
        option2 : "2: Incorrect Answer",
        option3 : "3: Correct Answer",
        option4 : "4: Incorrect Answer",
        correct : "3"

    },{

        question : "Question 4?",
        option1 : "1: Correct Answer",
        option2 : "2: Incorrect Answer",
        option3 : "3: Incorrect Answer",
        option4 : "4: Incorrect Answer",
        correct : "1"

    },{

        question : "Question 5?",
        option1 : "1: Incorrect Answer",
        option2 : "2: Incorrect Answer",
        option3 : "3: Incorrect Answer",
        option4 : "4: Correct Answer",
        correct : "4"

    }
];


var lastQuestion = questions.length - 1;
var timeLeft = 15 * questions.length - 1;
var timeInterval;

var currentQuestionIndex;
var currentQuestion;
var currentButtonChoice1;
var currentButtonChoice2;
var currentButtonChoice3;
var currentButtonChoice4;
var currentAnswer;




function countdown (){
    timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timeRemaining.textContent = timeLeft + " seconds remaining";
            timeLeft--;
        } else if (timeLeft === 1) {
            timeRemaining.textContent = timeLeft + " second remaining";
            timeLeft--; 
        } else if (timeLeft === 0) {
            clearInterval(timeInterval);
            timeRemaining.textContent = " ";
            displayFinal();
        }
    }, 1000);   
}




function showQuestion(selectedQuestion) {
    for (var i = 0; i <= lastQuestion; i++) {
        if (selectedQuestion === i) {   

        currentQuestionIndex = i;
        currentQuestion = questions[i].question;
        currentButtonChoice1 = questions[i].option1;
        currentButtonChoice2 = questions[i].option2;
        currentButtonChoice3 = questions[i].option3;
        currentButtonChoice4 = questions[i].option4;
        currentAnswer = questions[i].correct;

    
        displayedQuestion = document.getElementById("displayedQuestion");
        displayedQuestion.textContent = currentQuestion;        

        button1 = document.getElementById("button1");
        button1.textContent = currentButtonChoice1;

        button2 = document.getElementById("button2");
        button2.textContent = currentButtonChoice2;

        button3 = document.getElementById("button3");
        button3.textContent = currentButtonChoice3;

        button4 = document.getElementById("button4");
        button4.textContent = currentButtonChoice4;

        }     
    }
}

var correctN = "Correct!";
var incorrectN = "Incorrect!";

function correctChoice () {
    correctIncorrect = document.getElementById("correctIncorrect");
    correctIncorrect.textContent = correctN;
    
}

function incorrectChoice () {
    correctIncorrect = document.getElementById("correctIncorrect");
    correctIncorrect.textContent = incorrectN;
    timeLeft -= 10;
}

function displayFinal() {
    clearInterval(timeInterval);
    var h1 = document.createElement("h1");
    h1.textContent = "Your score is " + timeLeft + " !";
    finalScore.prepend(h1);
    timeRemaining.style.display = ("none");
    questionsContent.classList.add("questionsContent"); 
    correctIncorrect.classList.add("correctIncorrect");
    timeRemaining.classList.add("timeRemaining");
    finalScore.classList.remove("finalScore");

    submitBtn.addEventListener("submit", function(event){
        saveHighscore(); 

    });
}

function saveHighscore() {
    var scores = JSON.parse(localStorage.getItem('nameScore')) || [];

    if (initialsInput.value !== "")  {
        
        var nameScore = {
            name: initialsInput.value,
            score: timeLeft
        };
        scores.push(nameScore);
        localStorage.setItem("nameScore", JSON.stringify(scores));

     }
}

beginQuiz.addEventListener("click", function(event) {
    event.preventDefault();
    startContent.style.display = "none";
    questionsContent.classList.remove("questionsContent");
    correctIncorrect.classList.remove("correctIncorrect");
    timeRemaining.classList.remove("timeRemaining");

    showQuestion(0);
    countdown();
});


choices.forEach(function(choice, i) {
    choice.addEventListener("click", function(event) {
        event.preventDefault();
        if (event.target === button1 && currentButtonChoice1.charAt(0) === currentAnswer.charAt(0) ||
            event.target === button2 && currentButtonChoice2.charAt(0) === currentAnswer.charAt(0) ||
            event.target === button3 && currentButtonChoice3.charAt(0) === currentAnswer.charAt(0) ||
            event.target === button4 && currentButtonChoice4.charAt(0) === currentAnswer.charAt(0)) { 
            correctChoice();
        } else {
            incorrectChoice();
        }
        if (event.target === button1 && currentQuestionIndex === lastQuestion || 
            event.target === button2 && currentQuestionIndex === lastQuestion ||
            event.target === button3 && currentQuestionIndex === lastQuestion ||
            event.target === button4 && currentQuestionIndex === lastQuestion ||
            currentQuestionIndex === lastQuestion) {
            displayFinal();
            return;
        }
        showQuestion(currentQuestionIndex + 1); 
    });
    
});

