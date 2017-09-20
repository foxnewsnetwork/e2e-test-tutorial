# Our First Spec

## Diving in the deep end

At this point, there's probably a lot you don't know (or if there isn't, just sit tight anyway), but there's nothing like jumping in at the deep end to learn something.

## TL;DR

Here's the end result of what we will be writing up `tests/acceptance/specs/hello-world-test.js`

```javascript
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('Acceptance | Sanity | specs/hello-world', () => {
  it('should be ok', () => {
    expect(true).to.be.ok;
  });
});
```

And we will run that test with the following command:

```zsh
ember test --server --filter='specs/hello-world'
```

You should then see the following results:

![Your first spec test passes](https://gist.github.com/foxnewsnetwork/ea10218f33686a0767e41d1df2070149/raw/8fa4425e9e4c8207d80c074cd713898ac3d60a11/02-tldr-results.png)

## Manual new setup

First, we'll create our first new test. Type the following into your terminal:

```zsh
touch tests/acceptance/specs/hello-world-test.js
```

This will create a new empty file called `hello-world-test.js` file. Open this file with your favorite editor and write in the following:

```javascript
import { describe, it } from 'mocha';
import { expect } from 'chai';
```

This statement tells the ember framework to grab the two functions `describe` and `it` from a `node_module` called `mocha`

Similarly, we import the `expect` function from `chai`

## BDD Basics and Mocha

BDD or "Behavior driven development" is a form of software development wherein the developer writes tests based upon how the written software should behave. Like most of modern web development, DBB has its origins in Ruby on Rails, and is still alive and well even today in the world of client-side javascript.

![David Heinemeier Hansson is to web development what Mohummand was to medieval religious development](https://gist.github.com/foxnewsnetwork/ea10218f33686a0767e41d1df2070149/raw/8fa4425e9e4c8207d80c074cd713898ac3d60a11/02-dhh-at-rails-conf.png)

 [Mocha, the testing framework we use](https://mochajs.org/), is the javascript implementation of the rails testing `RSpec` testing framework. BDD ships with its own domain specific language (abbreviated DSL) for writing tests, let's meet two of them right now:

 `describe` and `it`

### Describe blocks
`describe` is a function that takes 2 arguments, one is a description of the associated block of tests, and the other is the block of tests

**Aside**
>Q: what's a function?

>A: The exact definition of a function is best understood by what they do: they group a bunch of instructions together into batch that can be reused.

By convention, `describe` block descriptions start with `Acceptance |`, next is the type of `Page`, `Sanity`, `Functional`, or perhaps `GKQA`, followed by the file location, in this case `specs/hello-world`

```javascript
describe('Acceptance | Sanity | specs/hello-world', () => {

})
```

**Important**
You must begin each description with the word `Acceptance |`, this is because all the tests including developer's unit tests, are all run with the `ember test` command. However, while unit tests can run and finish in under a minute for the full suite, each individual spec test might take up to 6 minutes to run individually. If you don't prepend all these slow spec tests with `Acceptance |`, there is no way for the developer to just run their unit tests during development.

For reference, developers run just the unit tests with the following command:

```zsh
ember test -i --filter='Acceptance' --serve
```

Notably the only difference between running just the acceptance suite and running everything except the acceptance suite is the `-i` flag (meaning to invert).

You might notice `() => {}`, this is a function declaration using the "fat arrow" es6 syntax. We'll go over function declarations and the javascript `function` keyword later.

### It tests
Now that we've setup our top test block, we're ready to put some tests into it. In mocha, tests begin with the function `it`. They do this so that the code is theoretically "readable".

```javascript
describe('Acceptance | Sanity | specs/hello-world', () => {
  it('should do be sane', () => {

  })
})
```

Like the `describe` block, the `it` block starts with a description, and then comes the block wherein we will put our assertions

### Expect assertions

Finally, we get to the crux of the tests - the assertion. This is where we tell the computer that we are expecting some result, and to compare it against result. [Chai.js provides with the tool to build these assertions](http://chaijs.com/api/bdd/) in the form of `expect`

Here's how it works:

```javascript
describe('Acceptance | Sanity | specs/hello-world', () => {
  it('should do be sane', () => {
    expect(true).to.be.true;
  });
});
```

The `expect` function takes as its first argument any object and wraps it inside a special test object to which we can attach predicate chains that perform our assertions. In this case, we've used the boolean `true` and attached on the predicate chains to check that `true` is `true`.

We expect this painfully obvious statement to be true and to therefore pass our given test. Typically, we would never write tests like this in real life, but it is quite common when we're making sure our test suite is running.

For reference, the chains that are possible to an `expect(something)` call are:

- to
- be
- been
- is
- that
- which
- and
- has
- have
- with
- at
- of
- same
- but
- does


## Running the test

Now that we have written our first spec test, let's run it and see what happens. Open up your terminal and type in the following

```zsh
ember test --serve --filter='specs/hello-world'
```

If you see the following, congrats, everything works!

![expected results in your browser](/images/our-first-spec/expected-results.png)

### Breaking down the results

The report is pretty self-explanatory. The text we wrote into our `describe('Acceptance | Sanity | specs/hello-world', () => { ... })` block is now showing up as a big header.

Similar, our test written in our `it('should be ok', () => { ... })` is showing up under the describe block. The little green check signifies that our assertion that where we `expect(true).to.be.true;` was, indeed, true.

All one of our tests passed, none failed, and the tests ran for a duration of 70ms.

Next up, we will actually boot up the apollo2 app and write our first *real* test.

## Links
[Table of Contents](/)

[Previous](/getting-started)

[Next](/booting-the-app)
