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