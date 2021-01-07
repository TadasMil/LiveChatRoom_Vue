describe("Login and change user role", () => {
  it("Open up register window and complete registration", () => {
    cy.visit("http://localhost:8080");

    cy.location("protocol").should("eq", "http:");

    cy.get(".container").should("be.visible");

    cy.get("#first-login-register").click();

    cy.contains("Registracija");

    cy.get('[type="text"]').type("tadas@gmail.com");

    cy.get('[type="email"]').type("tadas11@gmail.com");

    cy.get('[type="password"]').type("tadas123");

    cy.get(".register").click();
  });
});
