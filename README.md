This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Cypress tests - stubing native fetch

Cypress does not support listening to the fetch method. Therefore, as a workaround we polyfill `fetch` with [traditional XHR](https://www.npmjs.com/package/unfetch) which are supported. Related issue: https://github.com/cypress-io/cypress/issues/687

Magic happens in `cypress/support/hooks.js`
