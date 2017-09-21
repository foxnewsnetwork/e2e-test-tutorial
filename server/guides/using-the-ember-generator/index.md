## Using the ember cli generator

Firstly, in your terminal, type in the following:

```zsh
ember generate acceptance-test specs/hello-world
```

This will use `ember-cli` to write a skeleton (aka boilerplate) file for our spec test. In Ember CLI convention, what we call "spec tests" are called "acceptance tests". This is a difference in diction we should be aware of.

>Interesting tidbit: we have this difference in terminology because developer unfamilarity with ember-cli

![generate the spec test](https://gist.github.com/foxnewsnetwork/ea10218f33686a0767e41d1df2070149/raw/8fa4425e9e4c8207d80c074cd713898ac3d60a11/02-generate-acceptance-test.png)

Open up the newly generated file in your favorite editor; it should look something like this:

```javascript
import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from 'crapollo/tests/helpers/start-app';
import destroyApp from 'crapollo/tests/helpers/destroy-app';

describe('Acceptance | specs/hello world', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('can visit /specs/hello-world', function() {
    visit('/specs/hello-world');

    return andThen(() => {
      expect(currentURL()).to.equal('/specs/hello-world');
    });
  });
});
```

Ember made some assumptions regarding what we want to test and did its best to write the test for us. Unfortunately, for our immediate purposes, it's almost entirely wrong.
