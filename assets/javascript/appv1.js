//User clicks Start Game 
//screen changes -- 
//A question is displayed, the timer is running and counting down by 30 seconds, user can click on any of the answers
//check if user clicks on right or wrong or right answer 
//if no user input and timer is out, show out of time, display correct answer and display next question and restart timer and increase loss count 
//if correct -> display correct and gif and increase win count and display next question and restart timers 
//if wrong -> display "incorrect" and display correct answer and increase loss count and display next questions and restart timer 
// After all questions have been ansswer display results of correct ansswer and wrong anws  and a start over game button. 


$(document).ready(function(){
    $("#mainGame").hide();
    $("#questionResults").hide(); 
    $("#resultsPage").hide(); 

    $(".startbtn").click(function () {
     $("#mainGame").show();
    $(".startSection").hide(); 
    $("#questionResults").show(); 
    $("#resultsPage").show(); 
    //timer to start or game to start 
    });   

var wins = 0; 
var loss = 0; 
var time = 7;  
var quesIndex = 0; 
var answerChoice = ""; 


const myQuestions = { "quiz": [{
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

generateQuestion();
console.log(myQuestions.quiz[0].question); // 
console.log(myQuestions.quiz[0].answers.a);//Gryffindor 
console.log(myQuestions.quiz[0].correctAnswer); //Gryffindor 
console.log(myQuestions.quiz[0].answers[0]);
//timer(); 

console.log(myQuestions.quiz.length); 

//when user selects restart game 
    function startGame() {
        //to clear the answer choices of prev question
       // $("#ans").empty();
         //generate question

    } 


    function generateQuestion() {

        //the current question that is displayed 
        $("#question").html(myQuestions.quiz[quesIndex].question); 
        //display ans choices
        //look into object.key 
    //console.log(Object.keys("object key" + myQuestions.quiz[0].answers)); 
    
        for (i=0; i< myQuestions.quiz[quesIndex].answers.length; i++) {
            var ansDiv = $("<div>")
            var p =  $("<button>").addClass("ans" + i).text("Answer Choice: " +  myQuestions.quiz[quesIndex].answers[i]).attr("data-ans"+i,  myQuestions.quiz[quesIndex].answers[i]);
            $("#question").append(ansDiv); 
            ansDiv.append(p);
            myQuestions.quiz[quesIndex].answers[i]

            $('.ans'+ i).click(function(){ 
                console.log(data-ans1);
                console.log(myQuestions.quiz[quesIndex].answers[i]); 

            }); 
    
           // var ans = $("<div>").append(myQuestions.quiz[quesIndex].answers[i]); 
           // $("#ans").append(myQuestions.quiz[quesIndex].answers[i]); 
        }
        // $.each(myQuestions.quiz, function (element, question, answers) {
        //     console.log(question, answers);
        //     //console.log("This is :" + answers.a); 
        //     $("#ansA").html(element,question,answers); 
        //     //stoneCollection[key].value = getRandom(1, 12);
        //     //console.log("random value :" + stoneCollection[key].value);
        // });
    
    }

    function timer () {
        // generateQuestions after 30 seconds and restart timer 

        setTimeout(timer, 3000);

        if (time == 0) {
            //generate new questions 
            //restart timer 
            loss++; 

        }
        time--; 
    }
    function showAnswer() {
        //showCorrect answer after user clicks option or timer goes up 
    }

    function showResults() {
        //after all questions from the array has been ansswer 
        if (quesIndex == myQuestions.quiz[quesIndex]) {
            $("#resultsPage").show(); 
        }
    }

    //click functions




});