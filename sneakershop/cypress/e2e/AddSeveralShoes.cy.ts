describe("Add several shoes to Shopping Cart", () => {
    it("should add an item to the shopping cart and then remove it", () => {
      // Visit the page where the ItemCard component is rendered
      cy.visit("/");
  
      // Intercept the route to the product details page (adjust the route pattern as needed)
      cy.intercept("/shop/*").as("productDetails");
  
      // Click the "View options" button of the first item
      cy.get(".cardButton:contains('View options')").first().click();
      cy.wait(1000); // Adjust the wait time as needed
  
      // Assert that you are now on the product details page
      cy.url().should("match", /\/shop\/\w+/); // Adjust the URL pattern as needed
  
      // Click the "Add to cart" button
      cy.get("button:contains('Add to cart')").click();
  
      // Click the shopping cart icon
      cy.get(".shoppingCart button").click();
  
      // Add a confirmation or wait between the button clicks
      cy.wait(1000); // Adjust the wait time as needed
  
      // Click the "Delete" button (class name can be adjusted)
      cy.get(".deleteButton").click();
  
      // Check if "No items in cart" is displayed in the cart
      cy.contains("No items in cart.").should("be.visible");
    });
  });
  