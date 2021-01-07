describe("Login and delete all existing messages", () => {
  beforeEach(() => {
    cy.login("tadas@gmail.com", "tadas123");
  });

  it("Delete all existing messages", () => {
    cy.get(".delete-button")
      .should("be.visible")
      .click();

    cy.get(".messages").should("not.visible");
  });
});
