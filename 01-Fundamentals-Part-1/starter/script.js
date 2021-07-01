// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Chay");
// console.log(23);

// let firstName = "Janas";
// let first = "jonas";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);


// // convention 
// let jonas_matilda = "JM";
// let $function = 27;
// let person = "jonas";
// let PI = 3.1415;

// // Try to set name as understandable as you can
// let myFirstJob = "Programmer"
// let myCurrentjob = "Teacher"



////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
// BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
const markWeight = 78;
const markTall = 1.69;
const johnWeight = 92;
const johnTall = 1.95;
// let markHigherBMI = 
const markBMI = markWeight / markTall ** 2
const johnBMI = johnWeight / johnTall * johnTall

console.log(markBMI, johnBMI)

// const BMI = markBMT > johnBMT
// console.log(BMI)

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
  } else {
    console.log(`John's BMI (${johnBMI}) is higher than Marks's (${markBMI})!`)
  }

  ////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// const dolphins = (96 + 108 + 89) / 3
// const koalas = (88 + 91 + 110) / 3

// console.log(dolphins, koalas)
// if (dolphins > koalas) {
//   console.log("The winner is Dolphins" )
// } else if (koalas > dolphins) {
//   console.log("The winner is Koalas")
// } else if (dolphins === koalas) {
//   console.log("DRAW")
// }

// // BONUS

// const dolphinsScore = (97 + 112 + 101)
// const koalasScore = (109 + 95 + 123)

// if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
//   console.log("The winner is dolphinsScore")
// } else if (koalasScore > dolphinsScore && koalasScore >= 100) {
//   console.log("The winner is Koalas")
// } else if (dolphinsScore === koalasScore && dolphinsScore >= 100 && koalasScore >= 100) {
//   console.log("DRAW")
// }



// function declaration 
// function calcAge(birthYear) {
//   return 2037 - birthYear
// }

// const age1 = calcAge(1991);

// // function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2)

