const quizData = [
  {
    question: "나의 Mbti는?",
    a: "Esfp",
    b: "Infp",
    c: "Istp",
    d: "Enfj",
    correct: "b"
    
  },
  {
    question: "내가 제일 좋아하는 계절은?",
    a: "봄",
    b: "여름",
    c: "가을",
    d: "겨울",
    correct: "c"

  },
  {
    question: "내가 좋아하는 색은?",
    a: "연보라",
    b: "핑크",
    c: "하늘색",
    d: "노랑",
    correct: "a"

  },
  {
    question: "내 강아지 이름은?",
    a: "세바스찬",
    b: "우유",
    c: "밍순이",
    d: "몽실이",
    correct: "d"

  },
];

const quiz = document.getElementById('quiz')
const answerEl = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz() {
  deselctAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselctAnswers() {
  answerEl.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
  let answer ;

  answerEl.forEach(answerEl => {
    if(answerEl.checked) {
      answer = answerEl.id;
    }
  })

  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected(); 
  
  if(answer) {
    if(answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if(currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2>저를 ${score}/${quizData.length} 만큼 알고 있군요~><  </h2>

      <button onClick="location.reload()">다시 시작</button>
      `
    }
  }
})