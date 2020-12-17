var timeLeft = document.querySelector(".timeLeft");
var buttonChoices = document.querySelector("#buttonChoices");
var startBtn = document.querySelector("#beginQuiz");
var startContent = document.querySelector("#startContent");
var questionsContent = document.querySelector("#questionsContent");
var displayedQuestion = document.querySelector("#displayedQuestion");
var btn1 = document.querySelector("button1");
var btn2 = document.querySelector("button2");
var btn3 = document.querySelector("button3");
var btn4 = document.querySelector("button4");



var questions = [

    {

        question : "Question 1?",
        option1 : "1: Incorrect Answer",
        option2 : "2: Incorrect Answer",
        option3 : "3: Correct Answer",
        option4 : "4: Incorrect Answer",
        correct : 3

    },{

        question : "Question 2?",
        option1 : "1: Incorrect Answer",
        option2 : "2: Correct Answer",
        option3 : "3: Incorrect Answer",
        option4 : "4: Incorrect Answer",
        correct : 2

    },{

        question : "Question 3?",
        option1 : "1: Incorrect Answer",
        option2 : "2: Incorrect Answer",
        option3 : "3: Correct Answer",
        option4 : "4: Incorrect Answer",
        correct : 3

    },{

        question : "Question 4?",
        option1 : "1: Correct Answer",
        option2 : "2: Incorrect Answer",
        option3 : "3: Incorrect Answer",
        option4 : "4: Incorrect Answer",
        correct : 1

    },{

        question : "Question 5?",
        option1 : "1: Incorrect Answer",
        option2 : "2: Incorrect Answer",
        option3 : "3: Incorrect Answer",
        option4 : "4: Correct Answer",
        correct : 4

    }
];

var lastQuestion = questions.length-1;
var currentQuestion = 0;
var userScore = 0;

function showQuestion() {
    var q = questions[currentQuestion].question;
    var opt1 = questions[currentQuestion].option1;
    var opt2 = questions[currentQuestion].option2;
    var opt3 = questions[currentQuestion].option3;
    var opt4 = questions[currentQuestion].option4;
    var a = questions[currentQuestion].correct;
    displayedQuestion.textContent = q;
    button1.textContent = opt1;
    button2.textContent = opt2;
    button3.textContent = opt3;
    button4.textContent = opt4;
    
    console.log(displayedQuestion);
      
console.log(q);
console.log(opt1);
console.log(opt2);
console.log(opt3);
console.log(opt4);
console.log(a);

}

// function questionProgress() {
// for (i = 0; i <= lastQuestion; currentQuestion++) {
//     console.log(lastQuestion);
// }

// function countdown() {

// }

 



startBtn.addEventListener("click", function (event) {
    event.preventDefault();
    startContent.style.display = "none";
    if (event.target === startBtn) {
    questionsContent.classList.remove("questionsContent");
    showQuestion()
    }
});