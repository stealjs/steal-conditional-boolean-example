# steal-conditional boolean syntax demo

[![Greenkeeper badge](https://badges.greenkeeper.io/stealjs/steal-conditional-boolean-example.svg)](https://greenkeeper.io/)

Example app using steal-conditional's [boolean syntax](http://stealjs.com/docs/StealJS.guides.boolean_conditional_loading.html) to load the [JavaScript Internationalization API polyfill](https://github.com/andyearnshaw/Intl.js/) only for browsers that need it.

The file structure of this demo looks like this:

```
├── app.js
├── index.html
├── index.js
├── package.json
└── requires-polyfill.js
```

`index.js` is the main module and it uses the `steal-conditional` syntax to load the Intl polyfill; `requires-polyfill.js` is the condition module used to determine _whether_ the polyfill should be loaded or not when the app is executed in the browser.

In order to run the demo in your browser follow the steps below:

1. Clone this repo
2. Run `npm install`
3. Run `npm start`
4. Open `index.html` in your browser

![boolean](https://cloud.githubusercontent.com/assets/724877/22217582/c7e5b310-e160-11e6-85a6-32588fa2c7d5.png)

# Building the application

1. Run `npm build`
2. Edit `index.html` to load `steal.production.js`
3. Open `index.html` in your browser
