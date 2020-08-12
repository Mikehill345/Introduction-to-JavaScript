/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
// did you mean >= 18 cause you can be 18 to vote.
let votingAge = 18;
if (votingAge >= 18) {
    console.log('true')
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let color = 'black';
let vehicle = 'truck';

if (vehicle === 'truck') {
    color = 'blue';
}
else{
    color = 'red'
}

// color = vehicle === 'truck' ? 'blue':'red'

// console.log(color)

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let a = "1999";
 parseInt (a)

// console.log(parseInt(a))


//Task d: Write a function to multiply a*b 
function multiply(a, b) {
    return a * b
}
// console.log(multiply(6, 4));


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
const b = 7
const c = 'Dog Years!'
const arrowFunction = (a, b, c) => a * b + ' '+ c;


// console.log(arrowFunction(45, b, c));



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
function feedMeSeymour(dogMonths, dogWeight) {
    if (dogMonths >= 12) {
        if (dogWeight <= 5)
            return dogWeight * .05;
        if (dogWeight >= 6 && dogWeight <= 10)
            return dogWeight * .04;
        if (dogWeight >= 11 && dogWeight <= 15)
            return dogWeight * .03;
        if (dogWeight > 15)
            return dogWeight * .02;
    }
    if (dogMonths >= 2 && dogMonths <= 4)
        return dogWeight * .10;
    if (dogMonths >= 4 && dogMonths <= 7)
        return dogWeight * .05;
    if (dogMonths >= 7 && dogMonths <= 12)
        return dogWeight * .04;
}
// console.log(feedMeSeymour(12, 23))




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
const rock = 0.3;
const paper = 0.6;
const sissors = 0.9;

function rockPaperSissor(playerChoice) {
    let bot = Math.random();
    if (playerChoice === 0.3 && bot >= .9)
        return 'You Win!';
    if (playerChoice === 0.3 && bot >= .6 && bot < .9)
        return 'You Lose!';
    if (playerChoice === 0.6 && bot <= .3)
        return 'You Win!';
    if (playerChoice === 0.6 && bot >= .9)
        return 'You Lose!';
    if (playerChoice === 0.9 && bot <= .6 && bot >= .4)
        return 'You Win!';
    if (playerChoice === 0.9 && bot <= .3)
        return 'You Lose!';

    return 'tie';
}

//  console.log(rockPaperSissor(paper))





/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
let km = 1;

function multiply(km) {
    return km * 0.621371
}

// console.log(multiply(4))


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
let feet = 1;

function multiplyTwo(feet) {
    return feet * 30.48
}
// console.log(multiplyTwo(3))


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

for (let i = 99; i >= 1; i--) {

    console.log((i) + (' bottles of soda on the wall ') + (i) + ' bottles of soda, take one down pass it around '+ (i- 1) + ' left over bottles of soda on the wall ')
//     // console.log(`${i} bottles of soda on the wall ${i} bottles of soda, take one down pass it around ${i - 1} left over bottles of soda on the wall `)
}





/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
let grades = 0;
function school(grades) {
    if (grades >= 90) {
        return 'A'
    }
    else if (grades >= 80) {
        return 'B'
    }
    else if (grades >= 70) {
        return 'C'
    }
    else if (grades >= 60) {
        return 'D'
    }
    else
        return 'F'
}
//   console.log(school(90))


/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method
let count = 0;
let s = 'chAracters are stupid and dumb' .toLowerCase() .split ('')
for(let i = 0; i < s.length; i++ ){
    // if(s.includes ('r')||s.includes('e'))
    if (s[i] === 'a' || s[i] === 'e'|| s[i] === 'i'|| s[i] === 'o'|| s[i] === 'u')
     count++
}
// console.log(count)

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object


// let s = 'string'.split ('')
// console.log(s)
// let str = ['s', 't', 'r', 'i', 'n', 'g']
// console.log(str.includes ('s'))
// console.log(s[2])