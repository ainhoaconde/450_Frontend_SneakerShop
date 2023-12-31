describe("View Options", () => {
  it("should navigate to the product details page when 'View options' is clicked", () => {
    // Visit the page where the ItemCard component is rendered
    cy.visit("/");

    // Intercept the route to the product details page and respond with mock data
    cy.intercept("/shop/*", (req) => {
      req.reply({
        status: 200,
        body: { message: "Mocked data" },
      });
    }).as("productDetails"); // Mocking the request and responding with a mock response here

    // Find the first 'View options' button and click it
    cy.get(".cardButton:contains('View options')").first().click();

    // Assert that you are now on the product details page (verify the URL)
    cy.url().should("match", /\/shop\/\w+/); // Adjust the URL pattern as needed
    cy.screenshot("screenshots/viewOptions-screenshot");
    cy.screenshot("viewOptions-screenshot.png", { capture: "viewport" });
  });
});
