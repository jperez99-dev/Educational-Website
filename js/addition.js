var ranNumber1;
var ranNumber2;
var score = 0;
var userInput;
var questionCount = 1;
var answer;



// score = document.getElementById("score").textContent += score;
// ranNumber1 = Math.floor(Math.random() * 100);
// ranNumber2 = Math.floor(Math.random() * 100);
// var problem = document.getElementById("problem").textContent = ranNumber1 + " + " + ranNumber2;
// var answer = ranNumber1 + ranNumber2;
// var userInput = document.getElementById("user-input").value;
// alert(userInput);

function getInputValue(){
    questionCount++;
    if (questionCount < 11){
// generate random numbers to solve from
ranNumber1 = Math.floor(Math.random() * 100);
ranNumber2 = Math.floor(Math.random() * 100);
var problem = document.getElementById("problem").textContent = ranNumber1 + " + " + ranNumber2;

if (userInput == answer){
    alert("hi");
 }

// Get random numbers sum
answer = ranNumber1 + ranNumber2;

userInput = document.getElementById("user-input").value;

alert(userInput);


}
}


// score = document.getElementById("score").textContent += score;
