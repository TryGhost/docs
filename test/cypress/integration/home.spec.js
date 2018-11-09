context('Home', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    context('Header nav', () => {
        context('Global search', () => {
            it('is responsive', () => {
                cy.viewport(1050, 500);
                cy.get('#globalnavsearch').should('not.be.visible');

                cy.viewport('macbook-15');
                cy.get('#globalnavsearch').should('be.visible');
            });

            it('opens and closes search modal', () => {
                cy.viewport('macbook-15');
                cy.get('#globalnavsearch').click();
                cy.get('.ReactModal__Content').should('be.visible');
                cy.get('[data-cy=close-modal]').click();

                cy.viewport(1050, 500);
                cy.get('[data-cy=header-navigation] [data-cy=search-icon]').click();
                cy.get('.ReactModal__Content').should('be.visible');
                cy.get('[data-cy=close-modal').click();
            });
        });
    });

    context('Home search', () => {
        it('opens search modal', () => {
            cy.get('#homesearch').click();
            cy.get('.ReactModal__Content').should('be.visible');
            cy.get('[data-cy=close-modal').click();
        });
    });
});
