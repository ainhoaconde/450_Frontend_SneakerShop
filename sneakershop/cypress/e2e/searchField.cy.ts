describe("search with the search field a specific shoe", () => {
  it("should type name of shoe in search field", () => {
    // Visit the homepage where the ItemCard component is rendered
    cy.visit("/shop");

    // Get the input field and type in a shoe name (replace "Shoe Name" with the name you want to search for)
    cy.get(".searchBar input").type("Air Jordan 1");

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
  it("should type name of shoe in search field that doesn't exist", () => {
    // Visit the homepage where the ItemCard component is rendered
    cy.visit("/shop");

    // Get the input field and type in a shoe name (replace "Shoe Name" with the name you want to search for)
    cy.get(".searchBar input").type("test");

    // Wait for the search results to appear (adjust the selector as needed)
    cy.get(".searchResult").should("not.exist");

    cy.screenshot("screenshots/searchField-screenshot");

    cy.screenshot("searchField-screenshot.png", { capture: "viewport" });
  });
});
