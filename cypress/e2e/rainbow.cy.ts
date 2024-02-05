describe('template spec', () => {
  it('should change background to a rainbow party', () => {
    cy.visit('/')
    cy.get('[data-cy="rainbow-switch"]').should('be.not.disabled');
    cy.get('[data-cy="rainbow-switch"]').click();
    cy.get('[data-cy="rainbow-switch"]').click();
  })
})