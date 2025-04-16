const questionJSON = [
  {
    category: "Food & Drink",
    id: "q1",
    correctAnswer: "Three",
    options: ["Two", "Three", "Four", "Five"],
    question: "How many pieces of bun are in a McDonald's Big Mac?",
  },
  {
    category: "Science",
    id: "q2",
    correctAnswer: "Mercury",
    options: ["Venus", "Earth", "Mercury", "Mars"],
    question: "Which planet is closest to the sun?",
  },
  {
    category: "Sports",
    id: "q3",
    correctAnswer: "11",
    options: ["9", "10", "11", "12"],
    question: "How many players are there in a football (soccer) team on the field?",
  },
  {
    category: "Geography",
    id: "q4",
    correctAnswer: "Amazon",
    options: ["Nile", "Yangtze", "Amazon", "Mississippi"],
    question: "Which river is the largest in the world by volume?",
  },
  {
    category: "History",
    id: "q5",
    correctAnswer: "George Washington",
    options: ["Abraham Lincoln", "George Washington", "John Adams", "Thomas Jefferson"],
    question: "Who was the first President of the United States?",
  },
  {
    category: "Technology",
    id: "q6",
    correctAnswer: "JavaScript",
    options: ["Python", "C++", "JavaScript", "Java"],
    question: "Which programming language runs natively in web browsers?",
  },
  {
    category: "Entertainment",
    id: "q7",
    correctAnswer: "Titanic",
    options: ["Avatar", "Titanic", "Inception", "The Godfather"],
    question: "Which movie won 11 Oscars and was released in 1997?",
  },
  {
    category: "Literature",
    id: "q8",
    correctAnswer: "William Shakespeare",
    options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],
    question: "Who wrote 'Romeo and Juliet'?",
  },
  {
    category: "Animals",
    id: "q9",
    correctAnswer: "Blue Whale",
    options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
    question: "What is the largest animal on Earth?",
  },
  {
    category: "Math",
    id: "q10",
    correctAnswer: "Right angle",
    options: ["Acute angle", "Obtuse angle", "Right angle", "Straight angle"],
    question: "An angle that measures exactly 90 degrees is called?",
  },
];
let score = 0;
let currentQuestion = 0;
const totalScore=questionJSON.length;
// Accessing all the elements..
const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextEl = document.getElementById('next');

showQuestions();

nextEl.addEventListener('click',()=>{
  scoreEl.textContent = `Your Score is: ${score}/${totalScore}`;
  nextQuestion();
})
function showQuestions() {
  const { correctAnswer, options, question } = questionJSON[currentQuestion];

  questionEl.textContent = question;
  optionEl.textContent = ""; // Clear previous options

  const shuffledOptions = shuffleOptions(options);

  shuffledOptions.forEach((opt) => {
    const button = document.createElement("button");
    button.textContent = opt;
    optionEl.appendChild(button);

    button.addEventListener("click", () => {
      if (opt.trim() === correctAnswer.trim()) {
        score++;
      } else {
        score -= 0.25;
      }
      scoreEl.textContent = `Your Score is: ${score}/${totalScore}`;
      nextQuestion();
    });
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= questionJSON.length) {
    questionEl.textContent = "🎉 Quiz Ended!";
    optionEl.textContent = "";
    nextEl.remove();
  } else {
    showQuestions();
  }
}

function shuffleOptions(options) {
  const shuffled = [...options]; // Clone array
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

