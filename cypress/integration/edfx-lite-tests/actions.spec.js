/// <reference types="Cypress" />

context('Actions', () => {

    beforeEach(() => {

        cy.log('My first Cypress test is running!');

        cy.visit('http://edfx-lite.test');

    });

    
    it('Menu should open and change backgrounds with links are hovered over.', () => {

        cy.get('.edfx-toggle-button')
            .click({waitForAnimations: false});

        // cy.get('.edfx-toggle-menu .edfx-toggle-menu__link:first')
        //     .should('be.visible')
        //         .trigger('mouseenter');

        const cyTest = wait => {
    
            cy.get('.edfx-toggle-menu__link').each((linkElem, linkElemIndex) => {

                if (linkElemIndex > 2) return;

                if (wait > 0) {

                    cy.wait(wait);

                }
                
                
                cy.wrap(linkElem).should('be.visible').trigger('mouseenter');
                
                switch(linkElemIndex) {
                    
                    case 0: cy.get('.edfx-toggle-menu__item--slide:first')
                    .should('have.attr', 'style')
                    .should('contain', 'opacity: 1');
                    
                    break;
                    
                    case 1: cy.get('.edfx-toggle-menu__item--slide:nth-of-type(2)')
                    .should('have.attr', 'style')
                    .should('contain', 'opacity: 1');
                    
                    break;
                    
                    case 2: cy.get('.edfx-toggle-menu__item--slide:nth-of-type(3)')
                    .should('have.attr', 'style')
                    .should('contain', 'opacity: 1');
                    
                }
                
                if (wait > 0) {

                    cy.wait(wait);

                }
                
                cy.wrap(linkElem).trigger('mouseleave');

            });

        };

        // cyTest(2000);

        // cyTest(1500);

        // cyTest(1000);

        // cyTest(500);

        // cyTest(250);

        cyTest(125);

        cyTest(50);
        
        cyTest(25);

        cyTest(0);
        

    });

});
