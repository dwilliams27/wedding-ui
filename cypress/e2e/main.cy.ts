/// <reference types="cypress" />

describe('Basic tests', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  })

  it('displays top nav bar', () => {
    cy.get('#main-logo').should('exist');
  })
})
