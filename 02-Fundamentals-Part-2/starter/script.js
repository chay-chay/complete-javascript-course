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

// function calling other functions

// function cutFruitPieces(fruit) {
//     return fruit * 4
//   }
  
//   function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples)
//     const orangePieces = cutFruitPieces(oranges)
  
  
//   const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange`
//   return juice
//   }
  
//   console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }
  
// console.log(yearsUntilRetirement(1991, 'Jonas'))

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
// 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
// 5. Ignore draws this time.

// TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// HINT: To calculate average of 3 values, add them all together and divide by 3
// HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉


// const calcAverage = (a,b,c) => (a + b + c) / 3

// const dolphinsScore = calcAverage(44, 23, 71)
// const koalasScore = calcAverage(85, 54, 41)

// function checkWinner(dolphinsAve, koalasAve) {
//     if (dolphinsAve >= 2 * koalasAve) {
//         console.log("Dolphins Won!")
//     } else if (koalasAve >= 2 * dolphinsAve){
//         console.log("koalas Won!")
//     } else {
//         console.log("No team wins")
//     }
// }

// console.log(checkWinner(dolphinsScore, koalasScore))
