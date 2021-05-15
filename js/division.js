function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score+=20;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

    
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Results</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "/100" + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};



var questions = [
    new Question("What is 12 / 6?", [5, 6 ,2 ,6], 2),
    new Question("What is 100 / 5?", [30, 20, 25,15], 20),
    new Question("What is 30 / 2", [10, 16, 15, 13], 15),
    new Question("What is 55 / 5", [5, 11, 15, 18], 11),
    new Question("What is 40 / 2", [20, 10, 15, 2], 20)
];

var quiz = new Quiz(questions);

populate();