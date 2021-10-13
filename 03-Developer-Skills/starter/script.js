// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// my code
// function Checktemperatures(temp) {

//     let max = temp[0]
//     let min = temp[0]

//     for (let i = 0; i < temp.length; i++){
//         if (typeof temp[i] !== 'number') continue;

//          if (max < temp[i]){
//              max = temp[i]
//          } 
//          if (min > temp[i]){
//              min = temp[i]
//          }
//      }
//      return max - min
//      console.log(max, min)
// }
// console.log(Checktemperatures(temperatures))

// Keys
// const calcTempAmplitude = function (temps) {
//     let max = temps[0];
//     let min = temps[0];
  
//     for (let i = 0; i < temps.length; i++) {
//       const curTemp = temps[i];
//       if (typeof curTemp !== 'number') continue;
  
//       if (curTemp > max) max = curTemp;
//       if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
//   };
//   const amplitude = calcTempAmplitude(temperatures);
//   console.log(amplitude);

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

function printForecast(test1) {
    let  result =""
    let day = 1
    for (  let index in test1 ){
        result  += `${test1[index]} ºC in ${day} days... `
        day++
    }
    return result
}

const test1 = [17, 21, 23]
const test2 = [12, 5, -5, 0, 4]
console.log(printForecast(test1)) 