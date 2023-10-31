import '../support/commands';

describe('Navbar', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    });
  
    it('should display the logo and navigation links', () => {
      cy.get('.logo').should('be.visible');
  
      cy.get('.pages').each((link) => {
        cy.wrap(link).should('be.visible');
      });
      });
  
    it('should open the navigation menu on small screens', () => {
      cy.viewport('iphone-6');
  
      cy.get('.MuiIconButton-root').click();
  
      cy.get('.MuiMenu-paper').should('be.visible');
  
    });
  
    it('should open the shopping cart drawer when clicked', () => {
      cy.get('.shoppingCart').click();
  
      cy.get('.MuiDrawer-paper').should('be.visible');
    });
  });
  