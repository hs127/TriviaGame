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
    clearInterval(timerID); 
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
  var timerID;


  var myQuestions = {
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
  console.log("ques Index :" + quesIndex);
  console.log("question :" + myQuestions.quiz[quesIndex].question);
  console.log("correct ans :" + myQuestions.quiz[quesIndex].correctAnswer);

  //when user selects restart game 
  function startGame() {
    quesIndex = 0; 
    wins = 0; 
    loss = 0; 
    clearInterval(timerID);  
    generateQuestion(); 
  }

  function generateQuestion() {
    clearInterval(timerID);
    timerID = setInterval(timer, 1000);
    //the current question that is displayed 
    $("#question").html(myQuestions.quiz[quesIndex].question);
    //display ans choices
    //look into object.key 
    //console.log(Object.keys("object key" + myQuestions.quiz[0].answers))

    //for loop to display answer choices of the current ques
    for (i = 0; i < myQuestions.quiz[quesIndex].answers.length; i++) {
      var breaks = $("<br> <br>"); 
      var ansDiv = $("<div>").attr("id", "ans" + i).append(breaks);
      var p = $("<button>").addClass("answers").text(myQuestions.quiz[quesIndex].answers[i]).attr("data-ans", myQuestions.quiz[quesIndex].answers[i]);
      $("#question").append(ansDiv);
      ansDiv.append(p);
    }
  }
    //the answers click function 
    $(document).on('click', '.answers', function (e) {
      console.log("user clicked");
      clearInterval(timerID); 
      if ($(e.target).attr("data-ans") == myQuestions.quiz[quesIndex].correctAnswer) {
        console.log("correct answer");
        correctAnswer();
      }
      else {
        console.log("wrong answer");
        wrongAnswer();
      }

      e.preventDefault();
    });

  function timer() {
    // generateQuestions after 7 seconds and restart timer 
    $("#timeLeft").text(time);
    console.log("timer function called :" + time);
    time--;
    if (time === 0) {
      //generate new questions 
      //restart timer
      clearInterval(timerID);
      console.log("time up");
      $("#noYes").text("Time is Up! Counted as Wrong"); 
      timeup(); //line 126 
    }

  }

  function timeup() {
    clearInterval(timerID);
    loss++;
    console.log("timeUp function called :" + time);
    console.log("loss Counter time :" + loss); 
    $("#noYes").text("Time is Up! Counted as Wrong"); 
    showAnswer();
  }


  function correctAnswer() {
    wins++;
    clearInterval(timerID);
    $("#noYes").text("YAASSSS!"); 
    showAnswer(); 
    //timeup(); 
  }

  //if user selects wrong  answer: loss count increments, show the right ans (for few seconds), check if the last question so that to show results page 
  function wrongAnswer() {
    loss++;
    clearInterval(timerID); 
    console.log("loss Counter :" +loss); 
    console.log("win Counter :" +wins); 
    $("#noYes").text("NOPE!!"); 
    showAnswer(); 
   //timeup(); 
  }


  function showAnswer() {
    //showCorrect answer after user clicks option or timer goes up
    console.log("showAns function called");
    $("#timeLeft").text(time);
    $("#questionResults").show();
    $("#mainGame").hide();
    //ShowAnswer to show for 7 seconds 
    //time = 7; 
    //clearInterval(timerID); 
    //timerID = setInterval(timer, 1000);
    $("#answer").text(myQuestions.quiz[quesIndex].correctAnswer);
    console.log("time for Show Answer page :" + time);
    console.log("timer for Show Answer page :" + timerID);
    lastQueschecker(); 
  }

  function lastQueschecker() {
    console.log("lastQuestCheckerFunCalled");
    if (quesIndex == (myQuestions.quiz.length) - 1) {
      setTimeout(showResults, 3000);
      //showRestults(); 
    }
    else {
      setTimeout(nextQuestion, 3000);
    }
  }

  function nextQuestion() {
    quesIndex++;
    time = 7; 
    generateQuestion();
    $("#mainGame").show(); 
    $("#questionResults").hide();
    console.log("next Question function called");
  }

  function showResults() {
    //after all questions from the array has been answered
    console.log("show Results function called");
    $("#questionResults").hide();
    $("#mainGame").hide();
    $("#resultsPage").show();
    $("#wins").text(wins); 
    $("#losses").text(loss); 
  }

   $("#playAgain").click(function() {

    alert("To be worked on"); 
    //TO-DO: needs to work as start game button
    //TO-DO: neeed to clear interval of timer
    //TO-DO: hide all sections of the game except the id with mainGame 
    //TO-DO: reset all the counters

  //   clearInterval(timerID); 
  //   $("#mainGame").show(); //shows one question at a time with the ans choices
  //   $(".startSection").hide(); //start game page 
  //   $("#questionResults").hide(); //want to show when user ans ques or timer goes out 
  //   $("#resultsPage").hide();
  //   startGame();
   });

});