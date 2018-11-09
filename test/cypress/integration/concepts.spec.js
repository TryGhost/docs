context('Concepts', () => {
    it('Redirects to /introduction', () => {
        cy.visit('/concepts');
        cy.url().should('match', /http:\/\/localhost:8000\/concepts\//);
    });

    // TODO: maybe make sidebar and toc as separate tests?
    context('Sidebar', () => {
        beforeEach(() => {
            cy.visit('/concepts/introduction/');
        });

        it('is responsive', () => {
            // We expect the first link of the sidebar to be expanded
            // and the first element to be active
            cy.get('[data-cy=sidebar] > div > ul > li:first > a')
                .should('have.class', 'sidebarlink-active');

            // No Sidebar on small viewports
            cy.viewport(600, 500);
            cy.get('[data-cy=sidebar]').should('not.be.visible');

            cy.viewport('macbook-15');
            cy.get('[data-cy=sidebar]').should('be.visible');
        });

        it('links, collapses, and expands correctly', () => {
            // Clicking on a new section will change the route...
            cy.get('[data-cy=sidebar] :nth-child(2) h4 a').click()
                .assertRoute('/concepts/architecture/');

            // ...expand the nested elements
            cy.get('[data-cy=sidebar] :nth-child(2) ul').children().should('have.length', 4);

            // ...and set the first item as active
            cy.get('[data-cy=sidebar] :nth-child(2) ul li:first a')
                .should('have.class', 'sidebarlink-active');
        });
    });

    context('ToC', () => {
        it('is responsive', () => {
            // ToC only visible on wider viewports
            cy.viewport('macbook-15');
            cy.visit('/concepts/introduction/');
            cy.get('[data-cy=toc] > h3').should('be.visible');

            // No more ToC visible below this viewport size
            cy.viewport(1050, 500);
            cy.get('[data-cy=toc] > h3').should('not.be.visible');
        });

        it('changes with scroll position');
    });
});
