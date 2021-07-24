
console.log("Hi");

3+5;

console.log(4+2);

/* ----------------- */

function testFunction() {
	console.log("This happens first");
}

function getInputAndUpdateList(myList) {
	let value1 = "c";

	if (value1 === "a") {
		myList[0] += 1;
	} else if (value1 === "b") {
		myList[1] += 1;
	} else if (value1 === "c") {
		myList[2] += 1;
	} else {
		console.log("Choose one of the options chicken brain");
	}

	console.log("inside "+myList);
}

// testFunction();

// let tempList = [0,0,0];
// console.log("first "+tempList);
// getInputAndUpdateList(tempList);
// console.log("after "+tempList);

function main() {
	console.log("How big is your brain");
	let myList = [0,0,0];
	console.log("Can you tell when a boy likes you?");
	getInputAndUpdateList(myList);

	console.log("Can you remember the score");
	getInputAndUpdateList(myList);

	console.log("Can you remember song lyrics");
	getInputAndUpdateList(myList);

	console.log("Here is your result!");

	if (myList[0] >= 2) {
		console.log("You have galaxy brain");
	} else if (myList[1] >= 2) {
		console.log("You have chicken brain");
	} else if (myList[2] >= 2) {
		console.log("You have big brain");
	} else {
		console.log("You have chicken brain haha");
	}
}

// main();

/* ----------------- */

// setTimeout(() => { console.log("Surprise!") }, 1000);
// setTimeout(() => { console.log("Second Surprise!") }, 2000);
// setTimeout(() => { console.log("Third Surprise!") }, 3000);
// setTimeout(() => { console.log("Fourth Surprise!") }, 4000);
// setTimeout(() => { window.alert("EXTRA Surprise!") }, 5000);

/* ----------------- */

// function onClickButton(event) {
//     console.log("cat meow");
//     console.log(10*10);
// }
 
// const clickMeButton = document.getElementById('button');
// clickMeButton.addEventListener('click', onClickButton);

function onClickButton(event) {
	let target = event.target;
    console.log(target);
    console.log(target.id);
}
 
const q1_a_Button = document.getElementById('q1_a');
q1_a_Button.addEventListener('click', onClickButton);
 
const q1_b_Button = document.getElementById('q1_b');
q1_b_Button.addEventListener('click', onClickButton);
 
const q1_c_Button = document.getElementById('q1_c');
q1_c_Button.addEventListener('click', onClickButton);

 const q2_a_Button = document.getElementById('q2_a');
q2_a_Button.addEventListener('click', onClickButton);
 
const q2_b_Button = document.getElementById('q2_b');
q2_b_Button.addEventListener('click', onClickButton);
 
const q2_c_Button = document.getElementById('q2_c');
q2_c_Button.addEventListener('click', onClickButton);

const q3_a_Button = document.getElementById('q3_a');
q3_a_Button.addEventListener('click', onClickButton);
 
const q3_b_Button = document.getElementById('q3_b');
q3_b_Button.addEventListener('click', onClickButton);
 
const q3_c_Button = document.getElementById('q3_c');
q3_c_Button.addEventListener('click', onClickButton);

/* ----------------- */




















