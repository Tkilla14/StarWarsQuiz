var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startButton = document.querySelector("#start");
var questionsContainer = document.querySelector("#questions-container");
var questionCounter = 0;
// Countdown function & penatly for wrong answer

function setTime() {
  var timeLeft = 1000;
  var timeInterval = setInterval(function () {
    timerEl.textContent = timeLeft + ` seconds remaining `;
    timeLeft--;

    if (correct = false) {
      timerEl.textContent = timeLeft + `seconds remaining`;
      timeLeft(-1500)
    }

    if (timeLeft === 0) {
      timerEl.textContent = `displayMessage`


      // Stops execution of action at set interval
      clearInterval(timeLeft);

      // Calls function to create and append image
      displayMessage("End of quiz");
    }

  }, 1000);
}


function displayQuestions() {
  questionsContainer.innerHTML = "";
  var currQuestion = questions[questionCounter];
  var h3Tag = document.createElement("h3");
  h3Tag.textContent = currQuestion.question

  var divTag = document.createElement("div");
  divTag.id = "inner-questions-container";
  divTag.append(h3Tag);
  for (var i = 0; i < currQuestion.choices.length; i++) {
    var currChoice = currQuestion.choices[i]
    var btn = document.createElement("button");
    btn.textContent = currChoice;
    // append btn to div tag
    divTag.appendChild(btn);
  }
  questionsContainer.append(divTag);
}

// Use .setItem() to store object in storage and JSON.stringify to convert it as a string
localStorage.setItem('studentGrade', JSON.stringify(studentGrade));


// Question Array

var questionOne = {
  question: "what did vader say to luke after he cut off his hand?",
  choices: ["Luke, I am your father!", "No! I am your father", "NOOOO!", "You will die!"],
  answers: "1"
}

var questionTwo = {
  question: "What planet was anakin skywalker found on?",
  choices: ["Mustafar", "Naboo", "Tatooine", "Alderaan"],
  answers: "2"
}

var questionThree = {
  question: "Who was Luke Skywalkers mother?",
  choices: ["Amadala", "Leia", "Padme", "Rey",],
  answers: "2"
}

var questionFour = {
  question: "Who was Yoda's infamous apprentice?",
  choices: ["Duku", "Mace Windu", "Quigon", "Kenobi"],
  answers: "0"
}

var questionFive = {
  question: "Why was anakin the chosen one?",
  choices: ["He was the most powerful", "The Jedi say so", "He didn't have a dad", "To bring balance to the force"],
  answers: "3"
}
var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

console.log(questions);



// Use .setItem() to store object in storage and JSON.stringify to convert it as a string
localStorage.setItem('studentGrade', JSON.stringify(studentGrade));

// Start Game
function startGame() {
  startButton();
  startSetTime();
}

// Start button function 
document.getElementById("start-quiz").addEventListener("click", startButton())