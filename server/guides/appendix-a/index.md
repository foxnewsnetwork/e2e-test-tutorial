# Appendix A: Javascript Crash Course

Welcome to the JavaScript crash course. JavaScript is a weird language; some people woud even say it's a "badly designed" language. However, it is the gun the industry has chosen to conquer the world of front-end design.

![javascript is a badly designed gun](./images/appendix-a/javascript-is-a-gun.png)

If you're new to programming JavaScript, there is no way in hell you'll walk out of this chapter being a master of modern JavaScript (also known as ECMAScript). But there is no harm in trying, so let's get started!

## Philosophy

First things first: progamming language is, at the end of the day, a human language. It might have its own grammar that's different from our familiar language of English, but it doesn't change the fact it tries to express ideas in much the same way English does.

With this basic philosophy in mind, let's move onto the grammar of JavaScript:

## Objects

Everything in JavaScript is an object. But what's an object?

Without getting into theory or abstraction, an object is to JavaScript what nouns are to English. Notably, an object does stuff.

We declare basic objects like so:

```javascript
const myObject = {};
let myObject2 = {};
var myObject3 = {};
```

Say we have the English sentence "dog barks", in JavaScript, we would express that idea like so:

```javascript
dog.bark();
```

Similarly, the statement "barking of dog" can be expressed as:

```javascript
barking(dog);
```

## Declarations

In JavaScript, there are 3 ways to declare variables (also known as objects): `const`, `let`, and `var`. The difference between the three types of declarations have to do with "scope" and "mutability".

### Block Scope and Immutable
`const`, short of constant, declares a variable that won't change and has block scope. What is block scope? A block is set of stuff enclosed in a `{ }`:

```javascript
console.log(dog); // not in scope
if (something) {
  // In a block
  const dog = 'dog';
  console.log(dog); // in scope

  dog = 'cat'; // can't reassign
}
console.log(dog); // not in scope
```

Bear in mind that, in JavaScript `=` is assignment, not "equals to". And the statement `dog = 'cat'` is an attempt to reassign `dog` to another value. This is not allowed because we declared `dog` with `const` which means it can only be assigned once and never changed

### Block Scope and Mutable
If we wanted to be able to change `dog` to have another value, we'd use the `let` keyword:

```javascript
if (something) {
  let dog = 'dog';

  dog = 'rover'; // dog now stores rover
}
console.log(dog); // not in scope
```
`let` has the same "block scope" rules as `const`

### Function Scope and Mutable
Finally there is `var` which is effectively deprecated in modern JavaScript, but you might see it in older time. `var` is like `let` except it hoists the variable up to closest function scope.

```javascript
function barking(dog) {
  if (dog) {
    if (dog.name === 'rover') {
      var cu = 'ck';
    }
  }
  console.log(cu); // this is ok
}
```

## Function Theory
In our previous example, I introduced the `function` keyword, but what is a function? A function is to JavaScript what verbs are to English. They package together a block of instructions (also known as a closure) and gives them a name so you can reuse it.

For example, in English, the verb `bark` can be defined as:

>**bark**: the act of first breathing in air, then opening your mouth, then quickly letting out air in quick gutteral bursts

And in javascript, we can do the same thing:

```javascript
function bark(you) {
  breathIn(you);
  openMouth(you);
  quicklyBurstOutAir(you);
}
```

>**note**: remember, everything in JavaScript is an object, even functions

## Context
In JavaScript, you'll often see the keyword `this` being throw around in functions. So what is `this`?

`this` is an object that is implicitly passed into every function depending upon how the function is used (`call`ed).

In English, our cadre of pronouns all play the role of JavaScript's `this`. Consider the sentence "he got fired", depending upon the context of that sentence, "he" can refer to completely different people. In javascript, we can express the same idea as:

```javascript
function getFired() {
  this.unemployed = true;
  this.isPoor = true;
}
```

In English, we can use the "he got fired" in an context like "Tom is a new UX developer, he got fired", which in JavaScript becomes:

```javascript
class UXDeveloper {
  getFired: getFired
}

const tom = new UXDeveloper();

tom.getFired();
```

In this case, we've attached our previously written `getFired` function to the class prototype `UXDeveloper`, we've then indicated that `tom` is a `new` instance of a `UXDeveloper`, then, when we performed `tom.getFired()` javascript was smart enough to figure out that `this` referred to `tom`.

In other words, blocks created with the `function` keyword has a fluid `this` pronoun that can be used to refer to different things in different contexts.

>**Note**: When you're at the topmost block scope level, `this` refers to the `window` object that is a reference to the browser window

## Fat Arrows

Of course, the malleability of the JavaScript `this` is also one of its greatest weaknesses, as it can be very hard for the developer to intuitive know from looking at function what `this` is actually referring to.

This is where the "fat arrow" syntax comes in:

```javascript
const whatIsThis = () => {
  return this;
}

class UXDeveloper {
  whatIsThis: whatIsThis
}

const tom = new UXDeveloper();
tom.whatIsThis(); // the `window` object
```

When you create a function with a fat arrow, the `this` pronoun refers to the context where the function was declared (this is called "lexical scope"), and this didn't change even if we attached that function to something else.

## Homework
Have a good feel for how javascript works now? Crank through the next few homework problems at your desk!

### Q: Get familiar calling functions! 

Given to two following two functions:

```javascript
function greet(person) {
  return `hey ${person}, `;
}

function areFired(someone) {
  return `${someone} are fired!`;
}
```

And the object:

```javascript
let person = 'tom';
```

Use the function to construct the sentence `'hey tom, you are fired!'`

### Q: Writing your own functions

Remember, functions can take other functions as arguments and return other functions

Create a `myFun` that can be used like so to make the following statements true:

```javascript
myFun('sony') === 'oh no, sony is finished';
myFun('microsoft') === 'oh no, microsoft is finished';
```

### Q: Functions as arguments and return values

In JavaScript, functions are also objects and can be used as arguments and return values.

Given the following 2 functions:

```javascript
function plus1(number) {
  return number + 1;
}

function times4(number) {
  return number * 4;
}
```

Fill in the contents of the following function:

```javascript
function myHigherFun(number) {
  return // your code here!
}
```

Such that the following test statement is true:

```javascript
myFun(4) === 20
```

## Solutions

At least attempt each problem before looking at the solutions!

### S: Calling Functions

```javascript
areFired(greet(person));
```

### S: Writing functions

```javascript
function myFun(company) {
  return `oh no, ${company} is finished`;
}
```

### S: Higher Order functions

```javascript
function myHigherFun(number) {
  return times4(plus1(number));
}
```

[For the really motivated, do some code katas from the internet!](https://www.codewars.com/?language=javascript)

## Links
[Table of Contents](/#/)

[Previous](/#/conclusion)

[Next](/#/appendix-b)
