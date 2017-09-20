# Appendix B: JavaScript and Time

At the end of the day, front-end JavaScript is used build user interactions. And one of the most salient features of an user is that he or she isn't there all the time. Furthermore, many times when we make requests to remote data sources, we have to wait some period of time before we get results back. So how does JavaScript handle the idea of time?

Modern JavaScript has `async` functions, `promise`s, and `future`s to handle all this, but before we can understand what they are and how to use, them, we must go back to the very beginning:

![let's go back](/images/appendix-b/back-to-reddit.png)

## Callbacks
In the very beginning, JavaScript handled this with callbacks. But what's a callback?

It's exactly what it shoulds like, it's function that will be "called" when a result gets "back" to us. For example:

```javascript
ajax('/kamaji/session', (result) => {
  console.log('Hey, Kamaji got back to us with the following result', result);
})
```

In this case, the function `ajax` took 2 arguments: the first one being the uri we wanted to hit, and the second being a our "callback function" that should be called whenever the function `ajax` finishes doing whatever it needs to do. 

## Problem with Callbacks
For a period of about a decade, every single website was built using this sort of `callback` framework. But there were many problems with this approach, notably, it was incredibly hard work with the `result` we got back from Kamaji in any sensible way.

For example, if we wanted to model the English sentence "Make a request to Kamaji, extract the product ID from the results, use that to make a request to Pegasus, get the entitlementID from there, then launch the game via PSCLOUD", we'd have to do:

```javascript
ajax('/kamaji/session', (result) => {
  const productId = result.product_id;
  ajax(`/pegasus/${productId}`, (result) => {
    const entitlementId = result.defaultSku.entitlement_id
    PSCloud.launchGame(productId, entitlementId, (result) => {
      console.log('launched game!', result);
    })
  })
})
```
![callbacks lead to thick nesting](/images/appendix-b/thicc.png)

Notice how thickly nested this is; as an industry, web-development found this sort of thicc nesting abhorrent, having no choice, we lived under the heavy and oppressive reign of the thick callback stack.

Many developers, unable to stock such thickness and unable to find these big beautiful code curves to be understandable, fled in droves to the neighboring lands of Ruby, Python, and other flatter languages

![ruby is flatter than JS callbacks](/images/appendix-b/ruby.png)

## Promises

Sometime in 2012, JavaScript engineers managed to devise a way to make JavaScript almost as flat as Ruby using a construct called a `Promise`.

A Promise is an object that represents the result of a calculation that can't be completed right away. A good real life analog of a JS Promise is a pre-order for your favorite game console (say the Switch). You've already paid for the Switch, and Nintendo has sent you confirmation email with your recipt that reprsents their promise that they will eventually ship the Switch to you, but you haven't actually received your Switch at the moment you paid for the it.

If we invented an `ajaxPromise` function, we would be able to model our above English sentence as:

```javascript
ajaxPromise('/kamaji/session')
.then((result) => {
  const productId = result.product_id;
  return ajaxPromise(`/pegasus/${productId}`);
})
.then((result) => {
  return PSCloudPromise.launchGame(result)
})
```

Here, `then` is a method on the `promise` that allows to register a callback function that can return either our desired result or yet another promise. We can then attain some level of flatness by chaining promises together.

>**note**: The first library to do this, was a library called bluebird.

## Async Functions

But what if we wanted to go flatter? Without modifying the exact bone/skeletal/DNA structure of the javascript language itself, this wasn't possible. However, some time in 2015, engineers at Mozilla proposed to the World Web Committee exactly this change to the language. 

![mozilla really, really, really likes flat](/images/appendix-b/firefox.png)

So for the ES2017 version of JavaScript, `async` and `await` will come in as an alternative way to work with promises that will produce maximum flatness.

```javascript
async function requestLaunchGame() {
  const { productId } = await ajaxPromise('/kamaji/session');
  const { entitlementId } = await ajaxPromise(`/pegasus/${productId}`);
  return await PSCloudPromise.launchGame({ productId, entitlementId });
}
```

Here, the `then` and its associated callbacks are replaced with `await` which can be used in dangerously flat functions we designate as `async`.

And that's it for now!
