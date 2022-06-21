// 01 - Comparaison

const test = 143
const bis = 219

console.log(test ===bis);
console.log(test !==bis);
console.log(test > bis);
console.log(test < bis);


// 02 - Condition

const limit = 50
const score = 20

if (score >= limit){
    console.log("Ok good !");
} else {
    console.log("Oh nooo...");
}

// 03 - Condition II

const password = "aze"

if (password.length > 5){
    console.log("The password is secure");
} else{
    console.log("Password is not secured");
}

// 04 - Condition III

if (score >= limit && password.length > 5){
    console.log("Everything is good");
} else if (score >= limit || password.length > 5) {
    console.log("Something is good");  
}else {
    console.log("Nothing is good");
}

// 05 - Random

const min = 1
const max = 6

const random = Math.floor(Math.random() * max) + min

console.log(random);

if (random === 6){
    console.log("Yes i win");
}else {
    console.log("So close...");
}

// 06 - Month

let Month = "October"

switch (Month) {
	case "March": case "April" : case "May": 
		console.log("spring")
		break;
	case "June": case "July": case "August":
		console.log("Summer")
		break;
	case "September": case "October": case "November": 
		console.log("Automn")
		break;
	case "December" : case "January" : case "February": 
		console.log("Winter")
		break;
	default: 
		console.log("That's not a month...")
}

// 07 - Rounded but better

let roundedNumber = 3.2

if (roundedNumber-Math.floor(roundedNumber)>= 0.5){
    roundedNumber = Math.ceil(roundedNumber)
    console.log(roundedNumber);
}else {
    roundedNumber = Math.floor(roundedNumber)
    console.log(roundedNumber);
}