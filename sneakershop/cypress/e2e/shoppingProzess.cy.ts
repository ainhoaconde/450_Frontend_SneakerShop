describe("Add to Shopping Cart", () => {
  it("should add an item to the shopping cart", () => {
    // Visit the page where the ItemCard component is rendered
    cy.visit("/");

    // Intercept the route to the product details page (adjust the route pattern as needed)
    cy.intercept("/shop/*").as("productDetails");

    cy.get(".cardButton:contains('View options')").first().click();
    cy.wait(1000); // Adjust the wait time as needed

    // Assert that you are now on the product details page
    cy.url().should("match", /\/shop\/\w+/); // Adjust the URL pattern as needed

    // Click the "Add to Cart" button
    cy.get("button:contains('Add to cart')").click(); // Confirm that the item was added to the shopping cart
    cy.get(".shoppingCart button").click();
    // Confirm that the item was added to the shopping cart
    cy.get("button:contains('Checkout')").click();
    cy.wait(1000); // Adjust the wait time as needed
    cy.get("button:contains('Complete Shopping')").click();
    cy.wait(1000); // Adjust the wait time as needed
    cy.get(".MuiDialogTitle-root:contains('Send invoice via email')").should(
      "be.visible"
    );

    // Find and click the "Cancel" button in the dialog
    cy.get("button:contains('Cancel')").click();
  });
  it("should add an item to the shopping cart and download", () => {
    // Visit the page where the ItemCard component is rendered
    cy.visit("/");

    // Intercept the route to the product details page (adjust the route pattern as needed)
    cy.intercept("/shop/*").as("productDetails");

    cy.get(".cardButton:contains('View options')").first().click();
    cy.wait(1000); // Adjust the wait time as needed

    // Assert that you are now on the product details page
    cy.url().should("match", /\/shop\/\w+/); // Adjust the URL pattern as needed

    // Click the "Add to Cart" button
    cy.get("button:contains('Add to cart')").click(); // Confirm that the item was added to the shopping cart
    cy.get(".shoppingCart button").click();
    // Confirm that the item was added to the shopping cart
    cy.get("button:contains('Checkout')").click();
    cy.wait(1000); // Adjust the wait time as needed
    cy.get("button:contains('Complete Shopping')").click();
    cy.wait(1000); // Adjust the wait time as needed
    cy.get(".MuiDialogTitle-root:contains('Send invoice via email')").should(
      "be.visible"
    );

    // Find and click the "Cancel" button in the dialog
    cy.get("#downloadButton").click();
  });
});
