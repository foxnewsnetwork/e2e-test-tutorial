# Booting the App

So far we've got our feet wet with writing our first spec test, but we've yet to actually test Apollo! In this chapter, we'll boot the app for real and try our best to write a real end-to-end test:

![I'm a real SDET now](./images/booting-the-app/real-boy-now.png)

## TL;DR

In this chapter we'll meet the following functions:

- `startApp`
- `destroyApp`
- `before`
- `after`

And we will add to our `hello-world-test.js` file until it looks like the following:

```javascript
import { describe, it, before, after } from 'mocha';
import { expect } from 'chai';
import startApp from 'crapollo/tests/helpers/start-app';
import destroyApp from 'crapollo/tests/helpers/destroy-app';

describe('Acceptance | Sanity | specs/hello-world', () => {
  let application;
  before(() => {
    application = startApp();
  });
  after(() => {
    destroyApp(application);
  });

  it('should be ok', () => {
    expect(application).to.be.ok;
  });
});
```

Running the same old command:

```zsh
ember test --server --filter='specs/hello-world'
```

We should see the same thing we saw in the previous section

## Intermediate BDD Tools

This time, we will learn about mocha's tools for setting up the testing environment.

### before

Suppose we have a bunch of tests that look like:

```javascript
import { describe, it } from 'mocha';
describe('apollo test basics', () => {
  it('should app to be ok', () => {
    const application = startApp();
    expect(application).to.be.ok;
    destroyApp(application);
  });

  it('should not suck', () => {
    const application = startApp();
    expect(application.notSuck).to.be.true;
    destroyApp(application);
  });

  it('should not cause developers to kill themselves', () => {
    const application = startApp();
    expect(application.developers).to.have.property('shouldKillSelf', false);
    destroyApp(application);
  });
});
```

In each test, you'll notice we are spinning up an app, testing something, then tear-downing our app. This is good and all, but we really don't want to repeat ourselves so much, so let's clean this up with a `before` statement:

```javascript
import { describe, it, before } from 'mocha';
describe('crapollo test basics II', () => {
  let application;
  before(() => {
    application = startApp()
  });
  it('should be ok', () => {
    expect(application).to.be.ok
    destroyApp(application);
  });
  it('should not suck', () => {
    expect(application.notSuck).to.be.true;
    destroyApp(application);
  });
  it('should not cause developers to kill themselves', () => {
    expect(application.developers).to.have.property('shouldKillSelf', false);
    destroyApp(application);
  });
});
```

Now, `application` will be made once and for all the tests in our `apollo tests basics II` block, which saves us some writing and a lot of time in spinning up new application instances for each test.

### after

But there is a problem, right now, we `startApp` our app once before all of our tests, but we `destroyApp` 3 times (once at the end of each test). If we've only created 1 app, we certainly can't go about destroying 3 of them. Instead, we want to destroy the app just once after we finish all our tests.

Luckily, the `after` function does exact this:

```javascript
import { describe, it, before, after } from 'mocha';
describe('crapollo test basics III', () => {
  let application;
  before(() => {
    application = startApp()
  });
  after(() => {
    destroyApp(application);
  })
  it('should be ok', () => {
    expect(application).to.be.ok;
  });
  it('should not suck', () => {
    expect(application.notSuck).to.be.true;
  });
  it('should not cause developers to kill themselves', () => {
    expect(application.developers).to.have.property('shouldKillSelf', false);
  });
});
```

### Aside: Functions, Scopes, and Contexts

>Questions: Why didn't we put everything in the `before` block?

```javascript
before(() => {
  const application = startApp();
});
it('should be ok', () => {
  expect(application).to.be.ok;
});
```

and instead put `let application` outside the `before` function?

This is because `const`, `let`, and `var` are declare their variables only within the `{ }` block they live in (this is called "scope"). The `before` block and the `it` block have their own `{ }` neighborhood scopes, and so we need to put the `let application` declaration in the `describe` block's `{ }` that the others live in.

[Check out Appendix A for a tutorial on javascript functions](./appendix-a)

## Test Helpers

Next are the test helpers. Where `before` and `after` are functions that come as a part of the mocha testing framework, `startApp` and `destroyApp` are particular to our ember app, and are created by the ember team to provide us with an easy macro to spin up a test version of our ember app.

The two we will go over right now are `startApp` and its complement `destroyApp`:

```javascript
import startApp from 'crapollo/tests/helpers/start-app';
import destroyApp from 'crapollo/tests/helpers/destroy-app';
```
### startApp
So what does `startApp` do? 

From the function name, it seems to suggest it starts our app. And that's indeed true. The exact details of how it does this is encapulsated from us, but suffice it to say, it provides us a way to start up our entire Apollo 2 application and interact with it in much the same way a real user would.

In addition, the `startApp` function returns a reference to our application. This `application` is the ember object that is the root of our ember application. [You can read the API docs here](https://emberjs.com/api/ember/2.15/classes/Ember.Application?show=inherited%2Cprotected%2Cprivate)

But for our purposes, we won't actually be using the `application` object under normal circumstances, instead, the effect of calling `startApp` merely serves the purpose of creating the little app we see at the bottom right corner of our test chrome page:

![this is what startApp creates that we then use to test](./images/booting-the-app/apollo-app-in-testing-2.png)

### destroyApp
Once we have `startApp`, we need to also `destroyApp` once we're finished with it. This sort of cleaning up after yourelf is good practice not just in programming, but also in real life. After all, after you have dinner, you don't leave the dishes around for someone else to find out and be annoyed by, you clean your dishes and put them back into the cupboard for the next meal.

In spec testing, if you ever `startApp`, you must always remember to `destroyApp` also:

```javascript
import { describe, it, before, after } from 'mocha';
import startApp from 'crapollo/tests/helpers/start-app';
import destroyApp from 'crapollo/tests/helpers/destroy-app';

describe('before-after', () => {
  let application;
  before(() => {
    application = startApp();
  });
  after(() => {
    destroyApp(application);
  });
  // My Tests Here...
});
```

## Summary

In this chapter, we learned about how to setup and load the Apollo 2 app. However, we haven't actually run any tests against it. In the next chapter, we will go over actually testing the app.

## Links
[Table of Contents](/)

[Previous](./03-out-first-spec)

[Next](./05-async-testing)
