var computerChoices = Math.floor((Math.random() * 101) + 19);
var wins = 0;
var losses = 0;
var myTotal = 0;

var crystalOne = Math.floor((Math.random * 12) + 1);
var crystalTwo = Math.floor((Math.random * 12)+ 1);
var crystalThree = Math.floor((Math.random * 12) + 1);
var crystalFour = Math.floor((Math.random * 12) + 1);


var updateTotal = function() {

	$('#empty-div2').empty();
	$('#empty-div2').append(myTotal);

	$('#winning').empty();
	$('#winning').append(wins);

	$('#losing').empty();
	$('#losing').append(losses);
}


var game = function() {
	if (myTotal === computerChoices) {
		wins++;
		alert('YOU WIN!');
		restart();
	} else if(myTotal > computerChoices) {
		losses++;
		alert('YOU LOSE! Maybe next time!');
		restart();
	} else {
		updateTotal();
    }
}



$(document).ready(function(){


$('#empty-div1').html(computerChoices);


$('#crystal1').click(function(event) {
	myTotal = myTotal + crystalOne;
	game();
	
})

$('#crystal2').click(function(event) {
	myTotal = myTotal + crystalTwo;
	game();
})

$('#crystal3').click(function(event) {
	myTotal = myTotal + crystalThree;
	game();
})

$('#crystal4').click(function(event) {
	myTotal = myTotal + crystalFour;
	game();
})

});


var reset = function() {
	var crystalOne = Math.floor(Math.random * 12 + 1);
	var crystalTwo = Math.floor(Math.random * 12 + 1);
	var crystalThree = Math.floor(Math.random * 12 + 1);
	var crystalFour = Math.floor(Math.random * 12 + 1);
	updateTotal();

    myTotal = 0;
	var computerChoices = Math.floor(Math.random() * 101 + 19);

	$('#empty-div1').empty();
	$('#empty-div1').append(computerChoices);

	$('#empty-div2').empty();
	$('#empty-div2').append(myTotal);
}




