describe("Add to Shopping Cart", () => {
  it("should add an item to the shopping cart", () => {
      // Visit the homepage where the ItemCard component is rendered
      cy.visit("/");

      // Intercept the route to the product details page (adjust the route pattern as needed)
      cy.intercept("/shop/*").as("productDetails");

      // Click on the "View options" button of the first item
      cy.get(".cardButton:contains('View options')").first().click();
      cy.wait(1000); // Adjust the wait time as needed

      // Assert that you are now on the product details page (verify the URL)
      cy.url().should("match", /\/shop\/\w+/); // Adjust the URL pattern as needed

      // Click the "Add to Cart" button
      cy.get("button:contains('Add to cart')").click();

      // Confirm that the item was added to the shopping cart by clicking on the shopping cart icon
      cy.get(".shoppingCart button").click();
  });
});
