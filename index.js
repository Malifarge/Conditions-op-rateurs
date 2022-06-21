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

let roundedNumber = 153.8

if (roundedNumber-Math.floor(roundedNumber)>= 0.5){
    roundedNumber = Math.ceil(roundedNumber)
    
}else {
    roundedNumber = Math.floor(roundedNumber)
    
}

console.log(roundedNumber);

// 08 - Rounded but better, Méthode 2

let roundedNumber2 = 43.2356
let roundedNumberString = roundedNumber2.toString()
let pos1 = roundedNumberString.indexOf(".")+1
let pos2 = roundedNumberString.indexOf(".")+2
let pos = roundedNumberString.substring(pos1 ,pos2)

if (pos>=5){
	roundedNumber2 = Math.ceil(roundedNumber2)
    
}else {
    roundedNumber2 = Math.floor(roundedNumber2)
    
}

console.log(roundedNumber2);

// 09 - Rounded but better, Méthode 3

let roundedNumber3 = 34.2864564
let roundedNumberString2 = roundedNumber3.toString()
let roundedNumberindex= roundedNumberString2.indexOf(".")+1
let roundedNumberSplit = roundedNumberString2.split("")

if (roundedNumberSplit[roundedNumberindex]>=5){
	roundedNumber3 = Math.ceil(roundedNumber3)
    
}else {
    roundedNumber3 = Math.floor(roundedNumber3)
    
}

console.log(roundedNumber3);
