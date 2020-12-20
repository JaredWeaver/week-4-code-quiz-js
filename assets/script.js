var timeRemaining = document.querySelector(".timeRemaining");
var buttonChoices = document.querySelector("#buttonChoices");
var startBtn = document.querySelector("#beginQuiz");
var startContent = document.querySelector("#startContent");
var questionsContent = document.querySelector("#questionsContent");
var displayedQuestion = document.querySelector("#displayedQuestion");
var button1 = document.querySelector("#firstButton");
var button2 = document.querySelector("#secondButton");
var button3 = document.querySelector("#thirdButton");
var button4 = document.querySelector("#fourthButton");
var questionGrade = document.querySelector("#questionGrade");



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
var userScore = 0;
var userChoice;

var currentQuestion;
var currentButtonChoice1;
var currentButtonChoice2;
var currentButtonChoice3;
var currentButtonChoice4;
var currentAnswer;


function countdown (){
    var timeLeft = 15 * questions.length;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timeRemaining.textContent = timeLeft + " seconds remaining";
            timeLeft--;
        } else if (timeLeft === 1) {
            timeRemaining.textContent = timeLeft + " second remaining";
            timeLeft--; 
        } else {
            timeRemaining.textContent = " ";
            clearInterval(timeInterval);
            alert("You ran out of time!")
        }
        }, 1000);
}



function showQuestion(selectedQuestion) {
    for (var i = 0; i <= lastQuestion; i++) {
        if (selectedQuestion === i) {   

        currentQuestion = questions[i].question;
        currentButtonChoice1 = questions[i].option1;
        currentButtonChoice2 = questions[i].option2;
        currentButtonChoice3 = questions[i].option3;
        currentButtonChoice4 = questions[i].option4;
        currentAnswer = questions[i].correct;

    
        var h3 = document.createElement("h3");
        h3.textContent = currentQuestion;

        var ul = document.getElementById(buttonChoices);
        var li1 = document.createElement("li");
        var li2 = document.createElement("li");
        var li3 = document.createElement("li");
        var li4 = document.createElement("li");
        

        button1 = document.createElement("button");
        button1.setAttribute("id", "firstButton");
        button1.textContent = currentButtonChoice1;

        button2 = document.createElement("button");
        button2.setAttribute("id", "secondButton");
        button2.textContent = currentButtonChoice2;

        button3 = document.createElement("button");
        button3.setAttribute("id", "thirdButton");
        button3.textContent = currentButtonChoice3;

        button4 = document.createElement("button");
        button4.setAttribute("id", "fourthButton");
        button4.textContent = currentButtonChoice4;

        displayedQuestion.appendChild(h3);
        buttonChoices.appendChild(li1);
        li1.appendChild(button1);
        buttonChoices.appendChild(li2);
        li2.appendChild(button2);
        buttonChoices.appendChild(li3);
        li3.appendChild(button3);
        buttonChoices.appendChild(li4);
        li4.appendChild(button4);
        }           
    }
}

function correctChoice () {
    userScore += 20;
    timeLeft += 10;
}

function incorrectChoice () {
    timeLeft -= 10;
}

startBtn.addEventListener("click", function(event) {
    event.preventDefault();
    startContent.style.display = "none";
    if (event.target === startBtn) {
    questionsContent.classList.remove("questionsContent");
    showQuestion(0);
    countdown();
    }
});

buttonChoices.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target === button3 && currentButtonChoice3.charAt(0) === currentAnswer.charAt(0)) { //need to work
        showQuestion(1);

    }
});



