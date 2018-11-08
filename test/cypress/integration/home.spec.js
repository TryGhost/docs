context('Home', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Global search', () => {
        cy.viewport('macbook-15');
        cy.get('#globalnavsearch').should('be.visible');
        cy.viewport(1050, 500);
        cy.get('#globalnavsearch').should('not.be.visible');

        // TODO: test search modal behaviour
    });
});
