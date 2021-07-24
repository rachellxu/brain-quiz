
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

main();

/* ----------------- */













