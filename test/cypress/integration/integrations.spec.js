context('Integrations', () => {
    it('Sorting', () => {
        cy.visit('/integrations/');
        cy.get('[data-cy=sort]').within(() => {
            // Default sorting is by popular
            cy.get('a:first').should('have.class', 'blue');

            // Let's sort alphabetically, so the first integration starts with "A" and the last with "Z"
            cy.get('a:nth-child(3)').click();
        });

        // First integrations starts with an "A"
        cy.get('.gh-integrations a:first div:nth-child(2)').contains(/^A/);
        // Changing the sort order doesn't change the route
        cy.assertRoute('/integrations/');
        // Last integration starts with an "Z"
        cy.get('.gh-integrations a:last-child div:nth-child(2)').contains(/^Z/);
        cy.assertRoute('/integrations/');
    });

    it('Filtering', () => {
        cy.visit('/integrations/');
        cy.get('[data-cy=all-integrations-filter]').should('have.class', 'blue');

        cy.get('[data-cy=analytics-filter]').click();
        cy.get('[data-cy=analytics-filter]').should('have.class', 'blue');
        cy.assertRoute('/integrations/analytics/');
    });

    it('Tag archive URLs', () => {
        cy.visit('/integrations/email/')
            .get('[data-cy=email-filter]').should('have.class', 'blue');
    });

    it('Searching', () => {
        cy.visit('/integrations/email/');

        cy.get('[data-cy=close-icon]').should('not.be.visible');

        cy.get('#integrationsearch').type('test')
            .get('[data-cy=email-filter]').should('not.have.class', 'blue')
            .get('[data-cy=all-integrations-filter]').should('have.class', 'blue')
            .get('[data-cy=close-icon]').should('be.visible');

        cy.get('#integrationsearch').type('{backspace}{backspace}{backspace}{backspace}')
            .get('[data-cy=email-filter]').should('have.class', 'blue')
            .get('[data-cy=close-icon]').should('not.be.visible');
    });
});
