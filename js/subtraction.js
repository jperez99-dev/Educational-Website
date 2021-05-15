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
    new Question("What is 50 - 36?", [20, 16,14,19], 14),
    new Question("What is 80 - 23?", [57, 63, 52, 60], 57),
    new Question("What is 60 - 54", [5, 9, 4, 6], 6),
    new Question("What is 40 - 50", [15, 20, 10, 5], 10),
    new Question("What is 86 - 60", [30, 26, 22,31], 26)
];

var quiz = new Quiz(questions);

populate();