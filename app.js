let spaceQuestion = [
  {
    questions:
      "1.After Google, what is the second most popular website in the world? ",
    options: ["Facebook", "Baidu", "You Tube", "Twitter"],
    answer: "You Tube"
  },
  {
    questions: "2 .Which platform has a higher rate of engagement?",
    options: ["Facebook", "Instagram", "Whatsapp", "Hike"],
    answer: "Instagram"
  },
  {
    questions:
      "3 . Which type of media drives the most engagement on Facebook and Instagram?",
    options: ["Videos", "Images", "Carousels", "Text Post"],
    answer: "Videos"
  },
  {
    questions:
      "4.Which platform is reported to be the most useful for social marketers to reach their goals?",
    options: ["Instagram", "Facebook", "LinkdIn", "You Tube"],
    answer: "Facebook"
  },
  {
    questions: "5.What type of social media content is shared most by users?",
    options: ["Images", "Events", "Inspirational posts", "videos"],
    answer: "Inspirational posts"
  }
];

let currentQuestion = 0;
let question = document.getElementById("questions");
let score = 0;

const updateQuestion = () => {
  question.innerHTML = "";
  let div = document.createElement("div");
  div.classList.add("question");
  div.innerHTML = spaceQuestion[currentQuestion].questions;
  question.appendChild(div);
  let options = document.createElement("div");
  for (let i = 0; i < 4; i++) {
    let button = document.createElement("button");
    button.classList.add("option");
    button.setAttribute("onclick", "handleClick(this)");
    button.innerHTML = spaceQuestion[currentQuestion].options[i];
    options.appendChild(button);
  }
  question.appendChild(options);
};

const startTimer = () => {
  timeleft = 0;

  downloadTimer = setInterval(function () {
    // console.log(timeleft);
    if (timeleft === 9) {
      document.getElementById("timer").innerHTML = "";
      clearInterval(downloadTimer);
    }
    document.getElementById("timer").innerHTML = 10 - timeleft;
    timeleft += 1;
  }, 1000);
};

const isGameOver = () => {
  console.log(currentQuestion);
  if (currentQuestion > 4) return true;
  return false;
};

let downloadTimer;
const handleClick = (el) => {
  let val = el.innerHTML;

  if (val === spaceQuestion[currentQuestion].answer) {
    // console.log("correct");
    el.classList.add("correct");
    score++;
    updateScore();
    setTimeout(() => {
      el.classList.remove("correct");
    }, 3000);
    // clearInterval(myTimer);
  } else {
    // console.log("wrong");
    el.classList.add("wrong");
    setTimeout(() => {
      el.classList.remove("wrong");
    }, 3000);
  }
  let elems = document.getElementsByClassName("option");
  for (let i = 0; i < 4; i++) {
    elems[i].disabled = true;
  }
  setTimeout(() => {
    clearInterval(myTimer);
    clearInterval(downloadTimer);

    currentQuestion++;
    updateQuestion();
    startTimer();
  }, 2000);
};

const updateScore = () => {
  document.getElementById("score").innerHTML = score * 10;
};
let timeleft = 0;

let myTimer = setInterval(() => {
  if (isGameOver()) {
    console.log("game Over");
    question.innerHTML = "";
    if (document.getElementById("timer").innerHTML) {
      document.getElementById("timer").innerHTML = "";
    }
    document.getElementsByTagName("h1")[0].innerHTML = "Game Over";
    clearInterval(downloadTimer);
    clearInterval(myTimer);
  }
  currentQuestion++;

  updateQuestion();
  startTimer();
}, 11000);

startTimer();
