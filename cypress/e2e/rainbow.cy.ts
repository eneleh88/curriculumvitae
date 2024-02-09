/// <reference types="Cypress" />

describe('Rainbow effect', () => {
  it('should change the background with toggle switch', () => {
    cy.visit('/')
    cy.get('[data-cy="rainbow-switch"]').should('be.not.disabled');
    cy.get('[data-cy="rainbow-switch"]').click();
    cy.get('body')
      .should('not.have.css', 'background-color', 'rgb(251, 203, 116)')
    cy.get('[data-cy="rainbow-switch"]').click();
    cy.get('body')
      .should('have.css', 'background-color', 'rgb(251, 203, 116)')
  });

  it('should have a tooltip on toggle switch', () => {
    cy.visit('/');
    cy.contains('Do not flip the switch').should('not.exist');
    cy.get('[data-cy="rainbow-switch"]').click().then(() => {
      cy.contains('Do not flip the switch');
    })
  })
})