const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

var shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {

  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [{
    question: 'Commonly used data types do not include______',
    answers: [{
        text: 'Boleans',
        correct: true
      },
      {
        text: 'Other Arrays',
        correct: false
      },
      {
        text: 'Numbers',
        correct: true
      },
      {
        text: 'Alerts',
        correct: false
      }
    ]
  },
  {
    question: 'A very useful tool used during developemen and debugging for printing content to the debugger is',
    answers: [{
        text: 'JavaScript',
        correct: false
      },
      {
        text: 'Terminal/Bash',
        correct: true
      },
      {
        text: 'For Loops',
        correct: true
      },
      {
        text: 'Console log',
        correct: true
      }
    ]
  },
  {
    question: 'Arrays in JavaScript con be used to store__________?',
    answers: [{
        text: 'numbers and strings',
        correct: false
      },
      {
        text: 'other arrays',
        correct: true
      },
      {
        text: 'booleans',
        correct: false
      },
      {
        text: 'all of the above',
        correct: false
      }
    ]
  },
  {
    question: 'The condition in an if/else statement is enclosed with________?',
    answers: [{
        text: 'quotes',
        correct: false
      },
      {
        text: 'curly brackets',
        correct: true
      },
      {
        text: 'parenthesis',
        correct: false
      },
      {
        text: 'square brackets',
        correct: true
      }
    ]
  },
  {
    question: 'String values in JavaScript must be inclosed in _______.',
    answers: [{
        text: 'quotes',
        correct: false
      },
      {
        text: 'curly brackets',
        correct: true
      },
      {
        text: 'parenthesis',
        correct: false
      },
      {
        text: 'square brackets',
        correct: true
      }
    ]


  }
]