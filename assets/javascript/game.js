$(document).ready(function(){

var computerChoices = Math.floor(Math.random() * 109 + 11);

var wins = 0;
var losses = 0;
var total = 0;

var crystalOne = Math.floor(Math.random * 12 + 1);
var crystalTwo = Math.floor(Math.random * 12 + 1);
var crystalThree = Math.floor(Math.random * 12 + 1);
var crystalFour = Math.floor(Math.random * 12 + 1);


$('#crystal1').click(function(event) {
	total = total + crystalOne;
	
	
}

$('#crystal2').click(function(event) {
	total = total + crystalTwo;

}

$('#crystal3').click(function(event) {
	total = total + crystalThree;

}

$('#crystal4').click(function(event) {
	total = total + crystalFour;

}










