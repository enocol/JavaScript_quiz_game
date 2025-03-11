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
  {
    question:
      "Which keyword is used to declare a constant variable in JavaScript?",
    options: ["let", "var", "const", "static"],
    correct: "const",
    explanation:
      "The `const` keyword is used to declare a constant variable in JavaScript, meaning its value cannot be reassigned.",
  },
  {
    question: "What will `typeof null` return in JavaScript?",
    options: ["null", "object", "undefined", "string"],
    correct: "object",
    explanation:
      "Due to a historical bug in JavaScript, `typeof null` incorrectly returns `'object'` instead of `'null'`.",
  },
  {
    question: "Which operator is used to check both value and type equality?",
    options: ["==", "===", "!=", "!=="],
    correct: "===",
    explanation:
      "The `===` operator checks both value and type equality, unlike `==`, which performs type coercion.",
  },
  {
    question: "Which of the following is NOT a valid JavaScript loop?",
    options: ["for", "while", "repeat", "do...while"],
    correct: "repeat",
    explanation:
      "JavaScript does not have a `repeat` loop; however, `do...while` loops exist.",
  },
  {
    question: "Which of the following is NOT a falsy value in JavaScript?",
    options: ["0", "null", "undefined", "'false'"],
    correct: "'false'",
    explanation:
      "In JavaScript, the string `'false'` is truthy, whereas `0`, `null`, `undefined`, `false`, `NaN`, and `''` are falsy.",
  },
  {
    question:
      "Which array method is used to create a new array by applying a function to each element?",
    options: ["forEach()", "filter()", "map()", "reduce()"],
    correct: "map()",
    explanation:
      "The `map()` method creates a new array by applying a function to each element in the original array.",
  },
];
// more questions can be added to the array; this is just a sample

// app variables
let currentQuestionIndex = 0;
let score = 0;
let questionNumber = 1;
shuffleArray(questions);

// Load Question Function
function loadQuestion() {
  const app = document.getElementById("js-quiz");
  const question = questions[currentQuestionIndex];
  const opt = question.options;
  const shuffle = shuffleArray(opt);
  const questionNumberElement = document.getElementById("questionNumber");
  questionNumberElement.innerHTML = `Question ${questionNumber} of ${questions.length}`;

  app.innerHTML = `
    
          <h2>${question.question}</h2>
        <div>  ${shuffle
          .map(
            (option, index) =>
              `<div class="Container-fluid">
              <div class="row justify-content-center">
               <div class="col-12 col-md-6 col-lg-4 ">
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
    info.innerHTML = `<p>Game Restarted, your score is has been reset to <span class="score">${score}</span> </p>`;
    setInterval(() => {
      info.innerText = "";
    }, 10000);
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
      <div class="score-container">
        <p>Thanks for playing</p>
        <h2>Your Score: ${score}/${questions.length}</h2>
        <button class="btn btn-success restartButton" onclick="restartGame()">Restart</button>
      </div>
    `;
}

// Show Modal Function
function showModal(isCorrect, explanation) {
  const question = questions[currentQuestionIndex];
  const modalTitle = document.getElementById("exampleModalLabel");
  const explantion = document.getElementById("modal-explanation");
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));

  modalTitle.innerHTML = isCorrect
    ? `<h1>Correct! 🎉</h1>`
    : `<div>
        <h1>Incorrect! 😢</h1>
        <p>The correct answer is: <strong class="correct-answer">${question.correct}</strong></p>
    </div>`;
  explantion.textContent = explanation;
  modal.show();
}

// Restart Game Function
function restartGame() {
  shuffleArray(questions);
  currentQuestionIndex = 0;
  score = 0;
  questionNumber = 1;
  const info = document.getElementById("info");
  const startButton = document.getElementById("start");
  startButton.innerText = "Restart";
  startButton.style.display = "block";
  startButton.addEventListener("click", () => {
    shuffleArray(questions);
    score = 0;
    questionNumber = 1;
    currentQuestionIndex = 0;
    info.innerHTML = `<p>Game Restarted, your score is has been reset to <span class="score">${score}</span> </p>`;
    loadQuestion();

    setInterval(() => {
      info.innerText = "";
    }, 100000);
  });

  loadQuestion();
}
