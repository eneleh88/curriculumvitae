/// <reference types="Cypress" />

describe('Sidebar content', () => {
    it('should have content in all components', () => {
        cy.visit('/');
        cy.get('[data-cy="profile-name"]').should('have.length.at.least', 1).and('be.visible');
        cy.get('[data-cy="profile-text"]').should('not.be.undefined').and('be.visible');
        cy.get('[data-cy="profile-location"] svg').should('exist');
        cy.get('[data-cy="profile-location"] p').should('not.be.undefined');
        cy.get('[data-cy="profile-strengths"] svg').should('have.length.at.most', 3);
        cy.get('[data-cy="profile-skills"]').should('have.length.above', 1);
        cy.get('[data-cy="profile-some"]').should('have.attr', 'href');
        cy.get('[data-cy="sidebar-list-stack"]').children().should('have.length', 7).and('be.visible');
    });

    it('should have social media links', () => {
        cy.visit('/');
    });
})