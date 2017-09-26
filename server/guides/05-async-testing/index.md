# Async Testing

If you've been following this tutorial and running your tests as we go, you'll have noticed that once you run `ember test --filter='Acceptance' --server` it takes some period of time before your test chrome tab pops up, some more time for the tests to load, some more time for the app to load, and yet more time for each test to run.

The very nature that a lot of these things like booting our app takes time means we'll have to learn how to deal with time in our testing before we can properly test our app.

![E2E testing must necessarily incorporate the idea of time](./images/async-testing/nature-of-time.png)

## TL;DR

In this chapter, we'll learn about how to use `async function` and the `await` keyword. We will meet the `waitUntil` utility helper. In addition, we will also sneak a preview of the `home` page object and its `visit` method and `isLoaded` property.

We will modify our `hello-world-test.js` to look like:

```javascript
import { describe, it, before, after } from 'mocha';
import { expect } from 'chai';
import startApp from 'crapollo/tests/helpers/start-app';
import destroyApp from 'crapollo/tests/helpers/destroy-app';
import home from 'crapollo/tests/pages/home';
import { waitUntil } from 'crapollo/tests/helpers/wait';

describe('Acceptance | Sanity | specs/hello-world', () => {
  let application;
  before(async () => {
    application = startApp();
    home.visit();
    await waitUntil(() => home.isLoaded);
  });
  after(() => {
    destroyApp(application);
  });

  it('should be loaded', () => {
    expect(home.isLoaded).to.be.true;
  });
});
```

## A Brief History of Time

Suppose I asked you go make me a sandwich, write a letter, or bake a pizza. What common ingredient do all these things have in common?

![Bacon lettuce and tomato compose the average sandwich, but aren't we forgetting something?](./images/async-testing/sandwich.png)

The answer is time. A consequences of living in this universe is that everything takes time, and JavaScript requests are no different. Booting up our app and setting up instrumentation against it all take non-trivial amounts of time as we wait for things to boot up. 

When dealing with things that take time, there are 2 strategies that us, as humans, have developed:

1. Wait in place until it's done
2. Go do something else and have someone tell us when it's done

As humans, we're okay with strategy 1 when we know whatever it is we're waiting for will be finished quickly. But we quickly lose patience and demand the call back strategy when we expect things to take longer. JavaScript, a tool developed by not only humans, but the worst kind of humans (programmers) is no different.

By default, JavaScript knows that simple operations like `const a = 1 + 1` should be waited on, but slower things like remote requests should just call back when they're done.

However, in the case of asking the chrome webdriver to boot up so we can run some interaction tests, we want JavaScript to wait until chrome and the page have all loaded before it runs along to test. This is where `async` and `await` come in:

### Async Keyword

The modifier `async` can be used to decorate `function` to indicate to JavaScript that this function will be one that must wait in place (e.g. block):

```javascript
async function somethingSlow() { 
  ...
}
// or in fat arrow syntax
const somethingJustAsSlow = async () => { 
  ...
}
```

### Await Keyword

Now, when we call `async` function, we can explictly tell JavaScript to wait around until the function has finished with the `await` keyword

```javascript
async function somethingSlow() { 
  ...
}

async function usingSomethingSlow() {
  await somethingSlow()
  doSomethingElse()
}
```

Check-out Appendix B for a more detailed guide on how all this works!

## Back to Testing

Now that we have a super rough idea of how asynchrony works, it's time to get back to world of testing. Chrome Webdriver, the service we use to programatically drive our web browser, unfortunately, doesn't provide us with an API to JUST WORK(tm) with our tests. Instead, we must instruct it to click somewhere to type something, then we have to keep checking every few miliseconds to make sure it did what we expect it to do (this is called `polling`)

### Wait Until
What we need is some sort of `async` function that can be `await`ed until whatever result we're looking for is completed.

Luckily, this `waitUntil` function is implemented for you; just import it:

```javascript
import { waitUntil } from 'crapollo/tests/helpers/wait';
```

Then, we can use it in our `before` block:

```javascript
before(async () => {
  // Star the application
  application = startApp();

  // Tells the web-driver to visit the `/` route
  home.visit();

  // Both above requests take time to complete
  // so we wait until the home page is loaded
  await waitUntil(() => home.isLoaded);
})
```

(pretend for now that we have this `home` object that JUST WORKS (tm) - we'll get to disecting it in the next chapter)
