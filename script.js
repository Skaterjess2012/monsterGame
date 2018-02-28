// JavaScript Document


// create an array of food items for the monster to eat
var foodarr = ['pizza', 'icecream', 'trash', 'broccli', 'human', 'half eaten sandwich']; //needs to be a even number; first half, good food, second half bad food
let goodfood = foodarr.slice(0, (foodarr.length / 2));
let badfood = foodarr.slice((foodarr.length / 2), (foodarr.length) + 1);
let score = 0;
let eatSound = new Audio('sounds/eatit.wav');
let eatItSong = new Audio('sounds/weirldal.wav');
let trashIt = new Audio('sounds/trashit.wav');
eatItSong.play();
console.log(goodfood);
console.log(badfood);
var currentfood = "";

// start the game with a function
function rungame(){
	currentfood = getfood();
	setfood(currentfood);
	if (score < 0) {
		score = 0;
	}
	document.getElementById('score').innerHTML = score;
}

// randomly select a food to put in the box
function getfood(){
	var randomfood = Math.floor((Math.random() * foodarr.length) + 0);
	return foodarr[randomfood];
}

// put the food in the box
function setfood(food){
	currentfood = food;
	document.getElementById("foodbox").innerHTML = food;
}

function eatit(){
	for(let i = 0; i < goodfood.length; i++){
		if (currentfood === goodfood[i]) {
			document.getElementById("commentbox").innerHTML = "YUMMY";
			score++;
		}else if (currentfood === badfood[i]) {
			document.getElementById("commentbox").innerHTML = "GROSS";
			score--;
		}
	}
	eatSound.play();
	rungame();
}

function trashit(){
	for(let i = 0; i < goodfood.length; i++){
		if (currentfood === goodfood[i]) {
			document.getElementById("commentbox").innerHTML = "ARRRRRR THAT WAS GOOD! WHY!?!";
			score--;
		}else if (currentfood === badfood[i]) {
			document.getElementById("commentbox").innerHTML = "GOOD RIDDANCE";
			score++;
		}
	}
	trashIt.play();
	rungame();
}