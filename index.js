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
    correct: 1,
    explanation:
      "The `this` keyword refers to the object it belongs to, typically the current instance.",
  },
  {
    question:
      "Which method is used to add elements to the end of an array in JavaScript?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correct: 0,
    explanation:
      "The `push()` method adds one or more elements to the end of an array.",
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "IBM"],
    correct: 1,
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
    correct: 0,
    explanation:
      "`NaN` stands for 'Not a Number' and represents invalid numeric computations.",
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["Number", "String", "Float", "Boolean"],
    correct: 2,
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
  const questionNumberElement = document.getElementById("questionNumber");
  questionNumberElement.innerHTML = `Question ${questionNumber}`;

  app.innerHTML = `
    
          <h3>${question.question}</h3>
        <div>  ${question.options
          .map(
            (option, index) =>
              `<div class="Container">
              <div class="row justify-content-center">
               <div class="col-12 col-md-6 col-lg-4 p-0">
                 <button type="button" class="btn btn-primary" onclick="checkAnswer(${index})">${option}</button>
               </div>
                 
              </div>
            </div>`
          )
          .join(" ")}</div>
      `;
}

loadQuestion();
