# Getting Started
## What you need to dive in

TL;DR

- yarn
- ember-cli
- nvm
- nodejs 6.10.x
- google chrome

Sounds good so far? Great! If not, it's not like you have a choice if you've been assigned to QA for your job. So you'd best prepare your body and let's get started!

![reggie's body is ready for some spec tests](https://gist.github.com/foxnewsnetwork/ea10218f33686a0767e41d1df2070149/raw/a6d9e41584fdce7bc240962914fa6c33c956b30a/01-body-is-ready.jpg =256x*)

The journey of a 1000 miles begins with 1 step, and that first step we will take will be in our safe sandbox. Suppose you've been assigned to perform QA for a Netflix-clone streaming app called Crapollo, but you've never written JavaScript before. What should you do?

First, you'll need to get access to the sandbox repo. You probably already have this, but if not, get access to the Sony repo by talking to your manager. Once this is done, use git to clone the repo:

```zsh
git clone git@github.com:foxnewsnetwork/crapollo.git
```

While this is cloning, this is the perfect opportunity to setup with `yarn` and `ember-cli` both of which we will need. In addition, if for whatever reason you don't have [Google Chrome on your computer, now is a good time to download and install it](https://www.google.com/chrome/browser/desktop/index.html)

![get google chrome, we test with it](https://www.google.com/chrome/assets/common/images/chrome_logo_2x.png?mmfb=a5234ae3c4265f687c7fffae2760a907)

```zsh
brew install yarn
npm install -g ember-cli
```

When all this is done, it's time to `cd crapollo` and setup the environment:

![go into the crapollo directory via shell](https://gist.github.com/foxnewsnetwork/ea10218f33686a0767e41d1df2070149/raw/a6d9e41584fdce7bc240962914fa6c33c956b30a/01-cd-apollo-ps4.png)

Next, checkout the branch corresponding to this chapter and install all the dependencies.

```zsh
git checkout -b getting-started origin/getting-started
npm install
```

This should take a million years, but eventually this should finish and, congrats, you're now setup to develop and test our crapollo project.

![party parrots](https://i.amz.mshcdn.com/DwsIlvbRG3T0Rtb1xss4yqskHW4=/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F529652%2Ff651862e-4cfe-4a4e-b227-2e9b73347ad7.jpg =100%x*)

## Run the tests!

Before we write any tests, let's first run the tests and get a feel for what is happening.

Run test the ember test server with the following shell command:

```zsh
ember test --server --filter='Acceptance'
```

Ember will take some time to build, but eventually, an automated Google Chrome instance will pop up with the currently spec tests being run:

![currently, our spec tests are run in the google chrome browser via mocha](https://gist.github.com/foxnewsnetwork/ea10218f33686a0767e41d1df2070149/raw/5166c817cccc6b73316b6edd40997b0287721dba/01-mocha-spec-chrome.png)

Meanwhile, your terminal should enter the ember test server mode using `testem.js`:

![we use testem as the nodejs test driver](https://gist.github.com/foxnewsnetwork/ea10218f33686a0767e41d1df2070149/raw/5166c817cccc6b73316b6edd40997b0287721dba/01-ember-test-server.png)

If everything went correctly, you should have seen the above two images replicated on your computer. If not, bother @tom.chen and have him fix this, otherwise, take some time to go over the generated report.

>PS: don't worry if any of these terms are confusing at, everything will make sense over time

Once you've done this, it's time to jump in at the deep end and try writing it on your own.
