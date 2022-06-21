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