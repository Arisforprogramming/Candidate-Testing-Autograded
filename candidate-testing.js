const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer ="";


//TODO: Variables for Part 2
let questions =["Who was the first American woman in space? ",
                "True or false: 5 kilometer == 5000 meters? ",
                "(5 + 3)/2 * 10 = ? ",
                "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
                "What is the minimum crew size for the ISS? "];
let correctAnswers =["Sally Ride", "true", "40","Trajectory","3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
   candidateName = input.question("Please Enter your name: ")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // candidateAnswer = input.question(question);
//     for(let i=0; i<questions.length; i++) {
//        console.log(candidateAnswers = (input.question[questions[i]]));
//     }
  
for(let i = 0; i < questions.length; i++){

  let answer = input.question(questions[i]);
  candidateAnswers.push(answer);
  console.log(`Your Answer: ${answer}`);
  console.log(`Correct Answer: ${correctAnswers[i]}\n`)
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  //  if(candidateAnswer === correctAnswer){
  //    console.log("Your answer is correcto!");
  //  }else{
  //     console.log("DON't you stop trying");
  //  }

  //   if(candidateAnswers === correctAnswers){
  //    console.log("Your answer is correcto!");
  //  }else{
  //     console.log("Incorrect, Try again");
  //  }

  
  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
 }

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Hello!,${candidateName}!`);
  askQuestion();
   //console.log(askQuestion(questions));
  gradeQuiz(this.candidateAnswers);
}

 //console.log(runProgram()); // I did added run program function console.log nut actually don't neeed 

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};