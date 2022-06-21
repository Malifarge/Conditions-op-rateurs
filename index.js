// 01 - Comparaison

const test = 143
const bis = 219

console.log(test ===bis);
console.log(test !==bis);
console.log(test > bis);
console.log(test < bis);
console.log(test >= bis);
console.log(test <= bis);


// 02 - Condition

const limit = 50
const score = 20
let compare = score >=limit

if (compare){
    console.log("Ok good !");
} else {
    console.log("Oh nooo...");
}

// 03 - Condition II

const password = "azerty"
let passwordlength = password.length >5

if (passwordlength){
    console.log("The password is secure");
} else{
    console.log("Password is not secured");
}

// 04 - Condition III

if (compare && passwordlength){
    console.log("Everything is good");
} else if (compare || passwordlength) {
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

let roundedNumber = 53.265
let delta = roundedNumber-Math.floor(roundedNumber)

if (delta>= 0.5){
    roundedNumber = Math.ceil(roundedNumber)
    
}else {
    roundedNumber = Math.floor(roundedNumber)
    
}

console.log(roundedNumber);

// 08 - Rounded but better, Méthode 2

const roundedNumber2 = 43.2356
const roundedNumberString = roundedNumber2.toString()
const pos1 = roundedNumberString.indexOf(".")+1
const pos2 = roundedNumberString.indexOf(".")+2
let pos = roundedNumberString.substring(pos1 ,pos2)
pos = Number (pos)

if (pos>=5){
	console.log(Math.ceil(roundedNumber2));
    
}else {
    console.log(Math.floor(roundedNumber2));
    
}

// 09 - Rounded but better, Méthode 3

const roundedNumber3 = 34.8864564
const roundedNumberString2 = roundedNumber3.toString()
const roundedNumberindex= roundedNumberString2.indexOf(".")+1
const roundedNumberSplit = roundedNumberString2.split("")
let mynumber = roundedNumberSplit[roundedNumberindex]
mynumber = Number (mynumber)

if (roundedNumberSplit[roundedNumberindex]>=5){
	console.log(Math.ceil(roundedNumber3));
    
}else {
 	console.log(Math.floor(roundedNumber3));
}
