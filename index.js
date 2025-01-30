function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

// questions array

const questions = [
  {
    question: "What is the purpose of the `this` keyword in JavaScript?",
    options: [
      "To refer to the global object",
      "To refer to the current object",
      "To define a new variable",
      "To bind a function",
    ],
    correct: "To refer to the current object",
    explanation:
      "The `this` keyword refers to the object it belongs to, typically the current instance.",
  },
  {
    question:
      "Which method is used to add elements to the end of an array in JavaScript?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correct: "push()",
    explanation:
      "The `push()` method adds one or more elements to the end of an array.",
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "IBM"],
    correct: "Netscape",
    explanation: "Netscape developed JavaScript in the mid-1990s.",
  },
  {
    question: "What does `NaN` stand for in JavaScript?",
    options: [
      "Not a Number",
      "Null and Nullified",
      "Not a Null",
      "Numeric and Non-numeric",
    ],
    correct: "Not a Number",
    explanation:
      "`NaN` stands for 'Not a Number' and represents invalid numeric computations.",
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["Number", "String", "Float", "Boolean"],
    correct: "Float",
    explanation:
      "`Float` is not a data type in JavaScript; it is a subtype of Number.",
  },
];
// more questions can be added to the array; this is just a sample

// app variables
let currentQuestionIndex = 0;
let score = 0;
let questionNumber = 1;

// Load Question Function
function loadQuestion() {
  // get the app element
  const app = document.getElementById("js-quiz");
  const question = questions[currentQuestionIndex];
  const opt = question.options;
  const shuffle = shuffleArray(opt);
  const questionNumberElement = document.getElementById("questionNumber");
  questionNumberElement.innerHTML = `Question ${questionNumber}`;

  app.innerHTML = `
    
          <h2>${question.question}</h2>
        <div>  ${shuffle
          .map(
            (option, index) =>
              `<div class="Container">
              <div class="row justify-content-center">
               <div class="col-12 col-md-6 col-lg-4 p-0 mt-3">
                 <button type="button" class="btn btn-primary" onclick="checkAnswer(${index})">${option}</button>
               </div>
                 
              </div>
            </div>`
          )
          .join(" ")}</div>
      `;
}

// Start Game Function
function startGame() {
  const info = document.getElementById("info");
  const startButton = document.getElementById("start");
  startButton.innerText = "Restart";
  startButton.addEventListener("click", () => {
    shuffleArray(questions);
    score = 0;
    questionNumber = 1;
    currentQuestionIndex = 0;
    loadQuestion();
    info.innerHTML = `<span>Game Restarted, your score is has been reset to <span>${score}</span> <span>`;
    setInterval(() => {
      info.innerText = "";
    }, 5000);
  });
  loadQuestion();
}

// Check Answer Function
function checkAnswer(selected) {
  const question = questions[currentQuestionIndex];
  const correct = question.correct;

  if (question.options.indexOf(correct) === selected) {
    score++;
    showModal(true, question.explanation);
  } else {
    showModal(false, question.explanation);
  }

  currentQuestionIndex++;
  questionNumber++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

// Show Score Function
function showScore() {
  const startButton = document.getElementById("start");
  startButton.style.display = "none";
  const app = document.getElementById("js-quiz");
  app.innerHTML = `
      <div>
        <p>Thanks for playing</p>
        <h2>Your Score: ${score}/${questions.length}</h2>
        <button class="btn btn-success" onclick="restartGame()">Restart</button>
      </div>
    `;
}

// Show Modal Function
function showModal(isCorrect, explanation) {
  const modalTitle = document.getElementById("exampleModalLabel");
  const explantion = document.getElementById("modal-explanation");
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));

  modalTitle.innerHTML = isCorrect
    ? `<h1>Correct! 🎉</h1>`
    : `<h1>Incorrect! 😢</h1>`;
  explantion.textContent = explanation;
  modal.show();
}
