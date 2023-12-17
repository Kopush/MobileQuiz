const questions = [
  {
      question : "The name of the main program in C++?",
      answers: [
          { text: "mian", correct: false},
          { text: "main", correct: true},
          { text: "mein", correct: false},
          { text: "maen", correct: false},
      ]
  },

  {
      question : "Which variable names are correct? (select several possible answers)",
      answers:[
          { text: "1Bа", correct: false},
          { text: "D234", correct: true},
          { text: "_gh", correct: true},
          { text: "“D(f)”", correct: false}
      ]
  },

  {
      question : "Which operations can be overloaded?",
      answers:[
          { text: "unary and binary", correct: true},
          { text: "only unary ones", correct: false},
          { text: "binary only", correct: false},
          { text: "logical and relational", correct: false}
      ]
  },

  {
      question : "Choose the correct statement",
      answers:[
          { text: "an integer constant can be assigned a real variable", correct: false},
          { text: "an integer variable can be assigned a real constant", correct: true},
          { text: "an entire constant can be assigned an entire variable", correct: false},
          { text: "all options are correct", correct: false}
      ]
  },

  {
      question : "A number can be stored in an unsigned char variable ___",
      answers:[
          { text: "-1", correct: false},
          { text: "1213", correct: false},
          { text: "13", correct: true},
          { text: "-13", correct: false}
      ]
  },

  {
      question : "From which tag descriptive list starts ?",
      answers:[
          { text: "LL", correct: false},
          { text: "DL", correct: true},
          { text: "DD", correct: false},
          { text: "DS", correct: false}
      ]
  },
];

const questionElement = document.getElementById("question");
const answer_buttons = document.getElementById("answer__buttons");
const next_button = document.getElementById("next__btn");

let currentQuestionIndex =0;
let score = 0;


var delay = 3000;
setTimeout( startQuiz, delay )


//Старт тестирования
function startQuiz()
{
    currentQuestionIndex=0;
    score=0;
    next_button.innerHTML = "Next";
    showQuestion();
}


function showQuestion()
{
  resetState();
//Добавление к вопросу его порядкового номера
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

  //Окрашивание border
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("static-border")
    answer_buttons.appendChild(button);

    if(answer.correct)
    {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState()
{
    next_button.style.display = "none";
    while(answer_buttons.firstChild)
    {
      answer_buttons.removeChild(answer_buttons.firstChild);
    }
}

function selectAnswer(e)
{
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  
  if(isCorrect)
  {
    selectedBtn.classList.add("green-border");
    score++;
  }
  else
  {
    selectedBtn.classList.add("red-border");
  }

  //Array.from(answer_buttons.children).forEach(button => {
    //if(button.dataset.correct === "true")
    //{
     // button.classList.add("green-border")
    //}
    //button.disabled = true;
  //});
  next_button.style.display = "block";
}

function showScore()
{
  resetState();

  questionElement.innerHTML = `Вы набрали ${score} очков из ${questions.length} вопросов`;
  next_button.innerHTML = "Начать сначала";
  next_button.style.display = "block";
}


function handleNextButton()
{
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length)
  {
    showQuestion();
  }
  else
  {
    showScore();
  }
}

next_button.addEventListener("click",() => {
  if(currentQuestionIndex < questions.length)
  {
    handleNextButton();
  }
  else
  {
    startQuiz();
  }
} );

startQuiz();
