import '../support/commands';

describe('Navbar', () => {
    beforeEach(() => {
        // Visit the homepage before each test
        cy.visit('http://localhost:3000/');
    });

    it('should display the logo and navigation links', () => {
        // Check if the logo is visible
        cy.get('.logo').should('be.visible');

        // Check if each navigation link is visible
        cy.get('.pages').each((link) => {
            cy.wrap(link).should('be.visible');
        });
    });

    it('should open the navigation menu on small screens', () => {
        // Change the viewport to simulate a small screen (e.g., iPhone 6)
        cy.viewport('iphone-6');

        // Click the navigation menu button (hamburger icon)
        cy.get('.MuiIconButton-root').click();

        // Check if the navigation menu is visible
        cy.get('.MuiMenu-paper').should('be.visible');
    });

    it('should open the shopping cart drawer when clicked', () => {
        // Click on the shopping cart icon
        cy.get('.shoppingCart').click();

        // Check if the shopping cart drawer is visible
        cy.get('.MuiDrawer-paper').should('be visible');
    });
});
