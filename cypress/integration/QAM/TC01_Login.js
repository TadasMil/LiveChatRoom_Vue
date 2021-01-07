describe("Register", function() {
  it("Sign up", function() {
    //involves three phases: 1. Arrange, 2. Act, 3. Assert
    //1. Arrange - setup initial app state
    // -- visit a web page
    // -- query for an element
    //2. Act - take an action
    // --interact with that element
    //3. Assert - make an assertion
    // -- make an assertion about page content

    cy.visit("http://localhost:8080");

    cy.get('[type="email"]').type("tadas@gmail.com");

    cy.get('[type="password"]').type("tadas123");

    cy.get(".login")
      .contains("Prisijungti")
      .click();
  });
});
