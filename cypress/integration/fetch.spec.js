context('fetch', () => {
  it('should show success after checkStatus request', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/checkStatus',
      status: 200,
      response: { },
    })

    cy.visit('http://localhost:3000/');
    cy.get('[data-at=success]').should('be.visible');
  });

  it('should show failure after checkStatus request', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/checkStatus',
      status: 500,
      response: { },
    })

    cy.visit('http://localhost:3000/');
    cy.get('[data-at=failure]').should('be.visible');
  });
});
