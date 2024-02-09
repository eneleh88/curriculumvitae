/// <reference types="Cypress" />

describe('Sidebar content', () => {
    it('should have a list with the development stack', () => {
        cy.visit('/');
        cy.get('[data-cy="sidebar-list-stack"]').children().should('have.length', 7);
    })
})