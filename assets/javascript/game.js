
//Random Number

$(document).ready(function() {
	var Random = Math.floor(Math.random() * 101+19)
	console.log(Random)
	$('#number').html(Random);

})

//Array of variables "printing" wins/losses

var randomNumbers =[];
var total= 0;
var wins=0;
var losses= 0;
$('#numWins').html(wins);
$('#numLosses').html(losses);


// Random numbers for each crystal

function fourRandomNums(){
	for (var i = 0; i < 4; i++) {
		var num = Math.floor(Math.random() * 11+1);
		randomNumbers.push(num);
	}
	console.log(randomNumbers)
}
fourRandomNums();


//game reset

function reset(){
	Random = Math.floor(Math.Random() * 101 +19);
	console.log(Random)
	$('#number').html(Random);
	randomNumbers = [];
	fourRandomNums();
	total = 0;
	$('#combined').html(total);
}

//adding win to totoal

function win(){
	alert("Way to go!");
	wins++;
	$('#numWins').html(wins);
	reset();
}


//adding losses to total

function loss(){
	alert("Oops! Try again!");
	losses++;
	$('#numLoss').html(losses);
	reset();

}

//click events for crystals

$('#red').on('click', function(){
	total = total + randomNumbers[0];
	console.log("New total=" + total);
	$('#combined').html(total);


	if (total === Random){
		win();
	}
	else if (total > Random){
		loss();
	}
})

$('#blue').on('click', function(){
	total = total + randomNumbers[1];
	console.log("New total=" + total);
	$('#combined').html(total);


	if (total === Random){
		win();
	}
	else if (total > Random){
		loss();
	}
})


$('#green').on('click', function(){
	total = total + randomNumbers[2];
	console.log("New total=" + total);
	$('#combined').html(total);


	if (total === Random){
		win();
	}
	else if (total > Random){
		loss();
	}
})

$('#yellow').on('click', function(){
	total = total + randomNumbers[3];
	console.log("New total=" + total);
	$('#combined').html(total);


	if (total === Random){
		win();
	}
	else if (total > Random){
		loss();
	}
});







