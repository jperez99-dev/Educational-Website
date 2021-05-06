var ranNumber1;
var ranNumber2;
var score = 0;
var userInput;
var questionCount = 1;

function getInputValue(){

    userInput = document.getElementById("user-input").value;
    alert(userInput);
}

// loop through each question
for(i = 1; i < 11; i++){
// generate random numbers to solve from
ranNumber1 = Math.floor(Math.random() * 100);
ranNumber2 = Math.floor(Math.random() * 100);
questionCount = [i];

// Get random numbers sum
var answer = ranNumber1 + ranNumber2;
 

// Get user input
var userInput = prompt(ranNumber1 + "+" + ranNumber2 + "= ?");


if (userInput == answer){
    score +=10;
    alert("Correct!");
    alert(score);
} else {
    alert("wrong");
    alert(score);
}

alert("question " + questionCount);
}



