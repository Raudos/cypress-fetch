enableFetchWorkaround();

function enableFetchWorkaround() {
  let polyfill;

  before(() => {
    console.info('Load fetch XHR polyfill');
    cy.readFile('./node_modules/unfetch/dist/unfetch.umd.js').then((content) => {
      polyfill = content
    })
  });

  Cypress.on('window:before:load', (win) => {
    delete win.fetch;

    win.eval(polyfill);
    win.fetch = win.unfetch;
  })
}
