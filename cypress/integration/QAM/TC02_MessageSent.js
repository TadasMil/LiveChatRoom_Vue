describe("Login and send a new message", () => {
  beforeEach(() => {
    cy.login("tadas@gmail.com", "tadas123");
  });

  it("Create and send a message", () => {
    cy.get("textarea").type("message");

    cy.get("form").submit();

    cy.get(".messages", { timeout: 5000 }).should("be.visible");

    cy.get(".single-message").contains("message");

    cy.get(".name-message-block").contains("tadas");
  });
});
