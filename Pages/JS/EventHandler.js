const questions = [
  {
      question : "The name of the main program in C++?",
      answers: [
          { text: "mian", correct: false},
          { text: "main", correct: true},
          { text: "mein", correct: false},
          { text: "maen", correct: false},
      ],
      right_answers:["main"],
  },

  {
      question : "Which variable names are correct? (select several possible answers)",
      answers:[
          { text: "1Bа", correct: false},
          { text: "D234", correct: true},
          { text: "_gh", correct: true},
          { text: "“D(f)”", correct: false}
      ],
      right_answers:["D234","_gh"],
  },

  {
      question : "Which operations can be overloaded?",
      answers:[
          { text: "unary and binary", correct: true},
          { text: "only unary ones", correct: false},
          { text: "binary only", correct: false},
          { text: "logical and relational", correct: false}
      ],
      right_answers:["unary and binary"],
  },

  {
      question : "Choose the correct statement",
      answers:[
          { text: "an integer constant can be assigned a real variable", correct: false},
          { text: "an integer variable can be assigned a real constant", correct: true},
          { text: "an entire constant can be assigned an entire variable", correct: false},
          { text: "all options are correct", correct: false}
              ],
      right_answers:["an integer variable can be assigned a real constant"],
  },

  {
      question : "A number can be stored in an unsigned char variable ___",
      answers:[
          { text: "-1", correct: false},
          { text: "1213", correct: false},
          { text: "13", correct: true},
          { text: "-13", correct: false}
      ],
      right_answers:["13"],
  },

  {
      question : "From which tag descriptive list starts ?",
      answers:[
          { text: "LL", correct: false},
          { text: "DL", correct: true},
          { text: "DD", correct: false},
          { text: "DS", correct: false}
      ],
      right_answers:["DL"],
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
  const selectedBtn = e.target;// Выбор конкретной кнопки
  const correctAnswers = questions[2].right_answers.value;// Получение списка значений правильных ответов
  
  if(selectedBtn.answer == correctAnswers)//Проверка соответствия значения выбранной кнопки с верными значениями
  {
    selectedBtn.classList.add("green-border");
    score++;//Начисление очков 
  }
  else
  {
    selectedBtn.classList.add("red-border");
  }

  //Array.from(answer_buttons.children).forEach(button => {
    //if(button.dataset.ra === "true")
    //{
      //button.classList.add("green-border")
    //}
    //else if (button.dataset.ra === "false")
    //{
      //selectedBtn.classList.add("red-border");
   // }
 // button.disabled = true;
  //});
  next_button.style.display = "block";
}


//function disableButtons() {
  //const buttons = document.querySelectorAll('button');
  //for (let i = 0; i < buttons.length; i++) {
    //if (selectedButtons.indexOf(buttons[i].value) !== -1) {
      //buttons[i].disabled = true;
    //} else {
     // buttons[i].disabled = false;
    //}
  //}
//}

function checkAnswer(e) {

  //var stpi = JSON.parse(questions);
  var tyn = questions[1].right_answers.length;


  const selectedBtn = e.target;
  const correctAnswers = questions[1].right_answers.value;
  const isCorrect = selectedBtn.dataset.correct === "true";


  Array.from(answer_buttons.children).forEach(button => {
    if(isCorrect && selectedBtn.length === correctAnswers)
    {
      button.classList.add("green-border")
      score++;
    }
    else
    {
      selectedBtn.classList.add("red-border");
    }
  //disableButtons();
 
  });
     next_button.style.display = "block";
 }


function showScore()
{
  resetState();

  document.getElementById("back").add

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
