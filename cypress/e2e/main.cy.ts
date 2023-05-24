/// <reference types="cypress" />

describe('Basic tests', () => {
  beforeEach(() => {
    cy.visit('localhost:8080');
  })

  it('displays top nav bar', () => {
    cy.get('.MuiToolbar-root div').should('exist');
  })
})
