//User clicks Start Game 
//screen changes -- 
//A question is displayed, the timer is running and counting down by 30 seconds, user can click on any of the answers
//check if user clicks on right or wrong or right answer 
//if no user input and timer is out, show out of time, display correct answer and display next question and restart timer and increase loss count 
//if correct -> display correct and gif and increase win count and display next question and restart timers 
//if wrong -> display "incorrect" and display correct answer and increase loss count and display next questions and restart timer 
// After all questions have been ansswer display results of correct ansswer and wrong anws  and a start over game button. 


$(document).ready(function () {
  $("#mainGame").hide();
  $("#questionResults").hide();
  $("#resultsPage").hide();

  $(".startbtn").click(function () {
    $("#mainGame").show(); //shows one question at a time with the ans choices
    $(".startSection").hide(); //start game page 
    $("#questionResults").hide(); //want to show when user ans ques or timer goes out 
    $("#resultsPage").hide();
    startGame(); 
    //timer to start or game to start 
  });

  var wins = 0;
  var loss = 0;
  var time = 7;
  var quesIndex = 0;
  var userChoice = "";
  var answerChoices = [];
  var timer;


  const myQuestions = {
    "quiz": [{
      question: "What house at Hogwarts does Harry belong to?",
      answers: [
        "Gryffindor",
        "Hufflepuff",
        "Slytherin"
      ],
      correctAnswer: "Gryffindor"
    },
    {
      question: "Who is fluffy?",
      answers: [
        "Harry's owl",
        "Hermione's cat",
        "The three-headed dog"
      ],
      correctAnswer: "The three-headed dog"
    },
    {
      question: "Who kills Professor Dumbledore?",
      answers: [
        "Severus Snap",
        "Draco Malfoy",
        "Bellatrix Lestrange"
      ],
      correctAnswer: "Severus Snap"
    }
    ]
  };

  //generateQuestion();
  console.log(quesIndex); 
  console.log("question :" + myQuestions.quiz[quesIndex].question);
  console.log("correct ans :" + myQuestions.quiz[quesIndex].correctAnswer); 

  //when user selects restart game 
  function startGame() {
generateQuestion(); 
  }

  function generateQuestion() {
    timer = setInterval(timer, 1000);

    //the current question that is displayed 
    $("#question").html(myQuestions.quiz[quesIndex].question);
    //display ans choices
    //look into object.key 
    //console.log(Object.keys("object key" + myQuestions.quiz[0].answers)); 

    //for loop to display answer choices of the current ques
    for (i = 0; i < myQuestions.quiz[quesIndex].answers.length; i++) {
      var ansDiv = $("<div>").addClass("choices").attr("id", "ans" + i);
      var p = $("<button>").addClass("answers").text(myQuestions.quiz[quesIndex].answers[i]).attr("data-ans", myQuestions.quiz[quesIndex].answers[i]);
      $("#question").append(ansDiv);
      ansDiv.append(p);
    }
    //the answers click function 
    $(document).on('click', '.answers', function (e) {
      console.log("checking what is this :" + this.class);
      if ($(e.target).attr("data-ans") == myQuestions.quiz[quesIndex].correctAnswer) {
        console.log("correct answer amswered");
        correctAnswer();
      }
      else {
        wrongAnswer(); 
      }

      e.preventDefault();
    });


  }


  function timer() {
    // generateQuestions after 7 seconds and restart timer 
    time--;
    $("#timeLeft").text(time);
    console.log(time); 
    if (time == 0) {
      //generate new questions 
      //restart timer 
      console.log("time up")
      timeup(); //line 126 

    }

  }

  function timeup() {
    clearInterval(timer);
    $("#timeLeft").text(time);
    showAnswer(); 
    //lastQueschecker();
  }

  function correctAnswer() {
    wins++;
    clearInterval(timer);
    showAnswer();
    //lastQueschecker();

  }

  //if user selects wrong  answer: loss count increments, show the right ans (for few seconds), check if the last question so that to show results page 
  function wrongAnswer() {
    loss++;
    clearInterval(timer);
    showAnswer();
   // lastQueschecker();
  }

  function showAnswer() {
    //showCorrect answer after user clicks option or timer goes up
    console.log("showAns function called");
    $("#questionResults").show();
    $("#mainGame").hide(); 

    //ShowAnswer to show for 7 seconds 
    clearInterval(timer);  
    timer = setInterval(timer, 1000);
    $("#answer").text(myQuestions.quiz[quesIndex].correctAnswer);
    console.log("time for Show Answer page :" + time); 
    lastQueschecker(); 
  }

  function lastQueschecker() {
    if (quesIndex == (myQuestions.quiz.length) - 1) {
      setTimeout(showResults(), 3000);
    }
    else {
      setTimeout(nextQuestion(), 3000);

    }
  }

  function nextQuestion() {
    quesIndex++;
    generateQuestion();
  }

  function showResults() {
    //after all questions from the array has been answered
    console.log("show Results function called");
    $("#questionResults").hide();
    $("#mainGame").hide(); 
    $("#resultsPage").show(); 

  }

});