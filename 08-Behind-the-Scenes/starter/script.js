'use strict';

let age = 30;
let oldAge = age;
age = 31;
console.log('age', age);
console.log('oldAge', oldAge)

const me ={
    name: 'Jonas',
    age: 30,
}

const friend = me
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me);

// Primatives stored in call stack
// Number
// String
// Boolean
// Undefined
// Null
// Symbol
// Bright

// Object stored in HEAP
// Object literal
// Arrays
// Functions
// Many more ...