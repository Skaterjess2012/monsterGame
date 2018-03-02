// JavaScript Document


// create an array of food items for the monster to eat
let foodarr = ['pizza', 'icecream', 'trash', 'broccli', 'human', 'half eaten sandwich']; //needs to be a even number; first half, good food, second half bad food
let goodfood = foodarr.slice(0, (foodarr.length / 2));
let badfood = foodarr.slice((foodarr.length / 2), (foodarr.length) + 1);
let score = 0;
let songplaying = false;
let eatSound = new Audio('sounds/eatit.wav');
let eatItSong = new Audio('sounds/weirldal.wav');
let trashIt = new Audio('sounds/trashit.wav');
let volUpIcon = document.getElementById('volup');
let volOffIcon = document.getElementById('voloff');
let currentfood = "";

try {
	eatItSong.play();
	songplaying = true;
	volUpIcon.style.display = "inline";
	volOffIcon.style.display = "none";
}
catch(err) {
	console.log("song isnt playing!");
	songplaying = false;
	volUpIcon.style.display = "inline";
	volOffIcon.style.display = "none";
}

// start the game with a function
function rungame(){
	currentfood = getfood();
	setfood(currentfood);
	if (score < 0) {
		score = 0;
	}
	document.getElementById('score').innerHTML = score;
}

function playpause() {
	switch (songplaying) {
		case true:
			eatItSong.pause();
			songplaying = false;
			volUpIcon.style.display = "none";
			volOffIcon.style.display = "inline";
			break;
		case false:
			eatItSong.play();
			songplaying = true;
			volOffIcon.style.display = "none";
			volUpIcon.style.display = "inline";
			break;
	}
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