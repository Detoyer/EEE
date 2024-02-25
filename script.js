function start() {
	document.getElementById("question").style.display ="none";
	document.getElementById("button1").style.display ="none";
	document.getElementById("button2").style.display ="none";
	document.getElementById("button3").style.display ="none";
	document.getElementById("name").style.display ="none";
	document.getElementById("image").style.display ="none";
}



const questions = [
	[
		["What is your preferred fighting style?"],
		["Superhuman strength and durability", "Mastery of weapons", "Technology Reliant"]
	],[
		["Which quality do you value the most?"],
		["Aggression", "Precision", "Intelligence"]
	],[
		["What is your preferred team role?"],
		["The powerhouse", "The Supporter", "The strategist"]
	],[
		["What motivates you to fight?"],
		["Destruction", "Seeking redemption", "Standing up for justice"]
	],[
		["Which Avenger trait do you identify with the most?"],
		["Incredible physical prowess", "Unmatched accuracy", "Genius-level intellect"]
	]
]

var questionNumber = 0;

function setQuestion() {
	document.getElementById("question").innerHTML = questions[questionNumber][0];
	document.getElementById("button1").innerHTML = questions[questionNumber][1][0];
	document.getElementById("button2").innerHTML = questions[questionNumber][1][1];
	document.getElementById("button3").innerHTML = questions[questionNumber][1][2];

	document.getElementById("question").style.display ="block";
	document.getElementById("button1").style.display ="block";
	document.getElementById("button2").style.display ="block";
	document.getElementById("button3").style.display ="block";
	document.getElementById("name").style.display ="none";
	document.getElementById("start").style.display ="none";
	document.getElementById("description").style.display ="none";
	document.getElementById("image").style.display ="none";
}

var hawkeye = 0;
var ironman = 0;
var hulk = 0;

function addpoint(selected) {
	if (selected == 1) {
		hulk += 1;
	} else if (selected == 2) {
		hawkeye += 1;
	} else if (selected == 3) {
		ironman += 1;
	}
}

function result() {
	let highest = Math.max(hulk, hawkeye, ironman)
	if (hulk == highest) {
		document.getElementById("name").innerHTML = "<b>You resemble Hulk! You are very aggressive and like fighting and destroying things, while being protective over what you care about."
		document.getElementById("image").src = "hulk.png"
	} else if (hawkeye == highest) {
		document.getElementById("name").innerHTML = "<b>You resemble Hawkeye! You are very precise and good at whatever you do. Perfection is a requirement, not a benefit for you."
		document.getElementById("image").src = "hawkeye.png"
	} else if (ironman == highest) {
		document.getElementById("name").innerHTML = "<b>You resemble Ironman! You like solving problems with your money and your brain, and you do it in style."
		document.getElementById("image").src = "ironman.png"
	}

	document.getElementById("name").style.display = "block";
	document.getElementById("image").style.display = "block"
	document.getElementById("question").style.display = "none"
	document.getElementById("button1").style.display = "none"
	document.getElementById("button2").style.display = "none"
	document.getElementById("button3").style.display = "none"

}

function button1_clicked() {
	addpoint(1);
	questionNumber +=1;
	if (questionNumber == 5) {
		result();
	} else {
		setQuestion();
	}
}

function button2_clicked() {
	addpoint(2);
	questionNumber += 1;
	if (questionNumber == 5) {
		result();
	} else {
		setQuestion();
	}
}

function button3_clicked() {
	addpoint(3);
	questionNumber += 1;
	if (questionNumber == 5) {
		result();
	} else {
		setQuestion();
	}
}

