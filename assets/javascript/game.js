var numberGenerator = function(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var goalRandomNumber = numberGenerator(19, 120);
	console.log(goalRandomNumber);

var crystal1 = numberGenerator(1, 12);
var crystal2 = numberGenerator(1, 12);
var crystal3 = numberGenerator(1, 12);
var crystal4 = numberGenerator(1, 12);
	console.log(crystal1 + " " + crystal2 + " " + crystal3 + " " + crystal4);

var totalScore = 0;
var wins = 0;
var losses = 0;
var gameStarted = true;

var resetGame = function() {
	goalRandomNumber = numberGenerator(19, 120);
	crystal1 = numberGenerator(1, 12);
	crystal2 = numberGenerator(1, 12);
	crystal3 = numberGenerator(1, 12);
	crystal4 = numberGenerator(1, 12);
	totalScore = 0;
	gameStarted = true;
	$("#total-score").html(totalScore);
	$("#random-number-goal").html(goalRandomNumber);
	$("#wins").html(wins);
	$("#losses").html(losses);
}

var winChecker = function() {
	if (totalScore === goalRandomNumber) {
		$("#messagebox").html("You Win!");
		wins++;
		$("#wins").html(wins);
		gameStarted = false;
		resetGame();
		console.log(crystal1 + " " + crystal2 + " " + crystal3 + " " + crystal4);
		$("img").off();
		
	} else if (totalScore > goalRandomNumber) {
		$("#messagebox").html("You Lose!");
		losses++;
		$("#losses").html(losses);
		gameStarted = false;
		resetGame();
		console.log(crystal1 + " " + crystal2 + " " + crystal3 + " " + crystal4);
	}
}

$("#total-score").html(totalScore);
$("#random-number-goal").html(goalRandomNumber);
$("#wins").html(wins);
$("#losses").html(losses);

$("#reset").click(function(event) {
	resetGame();
	console.log(crystal1 + " " + crystal2 + " " + crystal3 + " " + crystal4);
});

if (gameStarted = true) {
	$("#crystal1").click(function(event) {
		totalScore = totalScore + crystal1;
		$("#total-score").html(totalScore);
		winChecker();
	});

	$("#crystal2").click(function(event) {
		totalScore = totalScore + crystal2;
		$("#total-score").html(totalScore);
		winChecker();
	});

	$("#crystal3").click(function(event) {
		totalScore = totalScore + crystal3;
		$("#total-score").html(totalScore);
		winChecker();
	});

	$("#crystal4").click(function(event) {
		totalScore = totalScore + crystal4;
		$("#total-score").html(totalScore);
		winChecker();
	});
} else {
	//resetGame();
	//console.log(crystal1 + " " + crystal2 + " " + crystal3 + " " + crystal4);
}