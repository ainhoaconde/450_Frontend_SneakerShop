describe("View Options", () => {
    it("should navigate to the product details page when 'View options' is clicked", () => {
      // Visit the page where the ItemCard component is rendered
      cy.visit("/");
  
      // Intercept the route to the product details page
      cy.intercept("/shop/*").as("productDetails");
  
      // Find the first 'View options' button and click it
      cy.get(".cardButton:contains('View options')").first().click();
  
      // Assert that you are now on the product details page
      cy.url().should("match", /\/shop\/\w+/); // Adjust the URL pattern as needed
    });
  });
  