---
title: A guide to variables in JavaScript
summary: Learn how to declare and use variables in JavaScript. Explore var, let and const, understand their scope and improve your programming with efficient JavaScript variables.
date: August 15, 2023
tags: JavaScript
---

In the world of programming, variables are an important part of application development. In this article, we will explore how to declare and use the different variables that exist in JavaScript, one of the most popular programming languages today.

There are three different ways to declare variables: `var`, `let` and `const`. Each has its own characteristics and applications. But before we talk about the ways of declaration, it is essential to understand the concept of `scope`. The scope of a variable defines the scope or context in which that variable is accessible and has meaning. That is, it determines where the variable can be used.

- **Global Scope:** Variables outside functions are global and accessible from anywhere. However, their excessive use can cause name collisions.

- **Function Scope:** Variables within functions are only visible inside them, preventing accidental changes from outside.

- **Block Scope (ES6):** `let` and `const` introduce block scope, restricting visibility to specific blocks.

After understanding the scope, let's explore the different forms of declaration.

### 1. The classic: `var`

The oldest way to declare variables in JavaScript is using the `var` keyword. However, due to its scope and behavior, it has become advisable to use other options.

<p style="margin-bottom: 10px">Examples of use:</p>

```javascript
var name = "María";
var age = 28;
```

### 2. Modernity with: `let`

The arrival of ECMAScript 6 (ES6) brought with it the `let` keyword, a more modern and recommended alternative for declaring variables. `let` solves some of the scoping problems that `var` had and is especially useful when dealing with more complex control structures.

<p style="margin-bottom: 10px">Examples of use:</p>

```javascript
let quantity = 15;

if (quantity > 10) {
  let message = "La cantidad es mayor que 10";
  console.log(message);
}

console.log(message); // This would cause an error
```

### 3. Immutable with: `const`

In addition to `let`, ES6 also introduced `const`, which is used to declare variables whose values will remain constant after their initial assignment. This provides a way to make certain parts of your code immutable and avoid accidental changes.

<p style="margin-bottom: 10px">Examples of use:</p>

```javascript
const pi = 3.14159;

pi = 3.0; // This would cause an error
```

## Types of data

Variables would not be complete without the data types they store. JavaScript offers several types, including numbers, strings, Booleans, objects, and more.

### 1. Numbers

Numerals (also known by Number) represent numerical values, either integers or decimals, and are essential for mathematical calculations and more.

<p style="margin-bottom: 10px">Examples of use:</p>

```javascript
let age = 28;
let price = 99.99;

console.log(age + price); // Will print 127.99
```

### 2. Text Strings

Text strings (also known by String) are sequences of characters and are used to store words, phrases and any text.

<p style="margin-bottom: 10px">Examples of use:</p>

```javascript
let name = "Ana";
let saludo = "Hello, welcome!";
```

### 3. Booleans

Booleans have only two possible values: `true` or `false`. They are fundamental to programming logic.

<p style="margin-bottom: 10px">Examples of use:</p>

```javascript
let isAdult = true;

if (isAdult) {
  console.log("Is an adult");
} else {
  console.log("Is a minor");
}
```

### 4. Arrays

Arrays are ordered lists of values and are used to store multiple elements.

<p style="margin-bottom: 10px">Examples of use:</p>

```javascript
let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];

// Get the red color from the array “colors”.
console.log(colors[0]);

// Get the number 2 of the array “numbers”.
console.log(numbers[1]);
```

### 5. Objects

Objects allow structured data to be stored using key-value pairs.

<p style="margin-bottom: 10px">Examples of use:</p>

```javascript
let person = {
  name: "Carlos",
  age: 30,
  married: false,
};

// Get the name of the person
console.log(person.name);
```

### 6. Null and Undefined

`null` and `undefined` are special values that represent the absence of value. `null` is used when you want to explicitly express the lack of value, while `undefined` generally refers to variables that have not been initialized.

<p style="margin-bottom: 10px">Examples of use:</p>

```javascript
let nullValue = null;
let undefinedValue;

console.log(nullValue); // Will print null
console.log(undefinedValue); // Will print undefined
```

### 7. Assign functions to variables

Functions are reusable blocks of code that perform a specific task. You can assign a function to a variable for use in different parts of your code.

<p style="margin-bottom: 10px">Examples of use:</p>

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Juan"); // Will print "Hello, Juan!"

// Assigning the function to a variable
let greetingFunction = greet;

// Using the function through the variable
greetingFunction("María"); // Will print "Hello, María!"
```

In this guide to variables in JavaScript, we have learned how to declare variables using `var`, `let` and `const`, and how each affects scope. We have also explored a range of data types, from numbers, strings to arrays, objects, and assigning functions to variables.

Mastering these concepts is crucial to your development as a programmer. With a solid understanding of how to declare variables and use different data types, you will be able to create more robust applications.

Remember, this is just the first step. As you continue your programming journey, you will continue to discover exciting new ways to use variables and data types to solve problems and create innovative solutions. Keep learning and experimenting!
