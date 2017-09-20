# Async Testing

If you've been following this tutorial and running your tests as we go, you'll have noticed that once you run `ember test --filter='Acceptance' --server` it takes some period of time before your test chrome tab pops up, some more time for the tests to load, some more time for the app to load, and yet more time for each test to run.

The very nature that a lot of these things like booting our app takes time means we'll have to learn how to deal with time in our testing before we can properly test our app.

![E2E testing must necessarily incorporate the idea of time](/images/async-testing/nature-of-time.png)

## TL;DR

In this chapter, we'll learn about how to use `async function` and the `await` keyword. We will meet the `waitUntil` utility helper. In addition, we will also sneak a preview of the `home` page object and its `visit` method and `isLoaded` property.

We will modify our `hello-world-test.js` to look like:

```javascript
import { describe, it, before, after } from 'mocha';
import { expect } from 'chai';
import startApp from 'apollo2/tests/helpers/start-app';
import destroyApp from 'apollo2/tests/helpers/destroy-app';
import home from 'apollo2/tests/pages/home';
import { waitUntil } from 'apollo2/tests/helpers/wait';

describe('Acceptance | Sanity | specs/hello-world', () => {
  let application;
  before(async () => {
    application = startApp();
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

## Links
[Table of Contents](/)

[Previous](./booting-the-app)

[Next](./intro-to-page-objects)
