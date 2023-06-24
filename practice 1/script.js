var questions = [
  {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Madrid"],
      answer: 0
  },
  {
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: 0
  },
  {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
      answer: 0
  }
];

var currentQuestion = 0;
var score = 0;

function displayQuestion() {
  var questionElement = document.getElementById("question");
  questionElement.textContent = questions[currentQuestion].question;

  var options = document.getElementById("options");
  var buttons = options.getElementsByTagName("button");

  for (var i = 0; i < buttons.length; i++) {
      buttons[i].textContent = questions[currentQuestion].options[i];
  }
}

function checkAnswer(selectedOption) {
  if (selectedOption === questions[currentQuestion].answer) {
      score++;
  }

  var options = document.getElementById("options");
  var buttons = options.getElementsByTagName("button");

  for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
  }

  var resultElement = document.getElementById("result");
  resultElement.textContent = "Correct answer: " + questions[currentQuestion].options[questions[currentQuestion].answer];

  var resultContainer = document.getElementById("result-container");
  resultContainer.style.display = "block";
}

function nextQuestion() {
  var resultContainer = document.getElementById("result-container");
  resultContainer.style.display = "none";

  var options = document.getElementById("options");
  var buttons = options.getElementsByTagName("button");

  for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = false;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
      displayQuestion();
  } else {
      showFinalScore();
  }
}

function showFinalScore() {
  var quizContainer = document.getElementById("quiz-container");
  quizContainer.style.display = "none";

  var resultContainer = document.getElementById("result-container");
  resultContainer.style.display = "block";

  var resultElement = document.getElementById("result");
  resultElement.textContent = "Your score: " + score + "/" + questions.length;
}

displayQuestion();  
