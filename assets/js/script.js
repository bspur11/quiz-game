var startButton = document.getElementById('start-btn');
var questionContainerElement = document.getElementById('question-container');

startButton.addEventListener('click', startGame);


function startGame() {
  console.log('Started');
  startButton.classList.add('hide');
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {

}

function selectAnswer() {

}

var questions = [{
    question: 'Commonly used data types do not include_______.',
    answers: [{
        text: 'Strings',
        correct: false
      },
      {
        text: 'Numbers',
        correct: false
      },
      {
        text: 'booleans',
        correct: true
      },
      {
        text: 'Arrays',
        correct: false
      }
    ]
  },
  {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:_______',
    answers: [{
        text: 'Javascript',
        correct: false
      },
      {
        text: 'terminal/bash',
        correct: false
      },
      {
        text: 'for loops',
        correct: true
      },
      {
        text: 'console.log',
        correct: false
      }
    ]
  },
  {
    question: 'The condition in a if/else statement is enclosed with ________',
    answer: [{
        text: 'Quotes',
        correct: false
      },
      {
        text: 'Curly Brackets',
        correct: true
      },
      {
        text: 'Parenthesis',
        correct: false
      },
      {
        text: 'Square Brackets',
        correct: false
      }
    ]
  },
  {
    question: 'String values must be inclosed within _______ when being assigned to variables.',
    answer: [{
        text: 'Commas',
        correct: false
      },
      {
        text: 'Curly Brackets',
        correct: false
      },
      {
        text: 'Quotes',
        correct: true
      },
      {
        text: 'Parenthesis',
        correct: false
      }

    ]

  },
  {
    question: 'Arrays in JavaScript can be used to storee _______.',
    answer: [{
        text: 'Numbers and strings',
        correct: false
      },
      {
        text: 'Other Arrays',
        correct: false
      },
      {
        text: 'Booleans',
        correct: false
      },
      {
        text: 'all of the above',
        correct: true
      }


    ]
  }

]













// TODO: Create an array with five question objects

var questions = [

  {
    prompt: "What type of brachets are used for an array?\n(a) ()\n(b) {}\n(c) []\n(d) All of the above",
    answer: "c"
  },
  {
    prompt: "What command is used to add a Child node to a Parent node in Javascript?\n(a) querySelector\n(b) getItemById\n(c) textContent\n(d) appendChild",
    Answer: "d"
  },
  {
    prompt: "What command in javascript saves strings in local storage?\n(a) localStorage.getItem\n(b) localStorage.appendChild\n(c) localStorage.setItem\n(d) None of the above",
    answer: "c"
  },
  {
    prompt: "Commonly used data types do not include:\n(a) Numbers\n(b) Strings\n(c) booleans\n(d) alerts",
    answer: "c",
  },
  {
    prompt: "Arrays in Javascript can be used to store______.\n(a)Numbers\n(b) Strings\n(c) Other Arrays\n(d) All of the above",
    anxwer: "d",
  },

]

// TODO: Create a variable to keep track of the score

// TODO: Iterate over the questions array and display each question in a confirmation box

// TODO: Check the user's answer against the correct answer

// TODO: Alert the user if they are correct or wrong. Increment the score accordingly

// TODO: At the end of the game, alert the user with the final score