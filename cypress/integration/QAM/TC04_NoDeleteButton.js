describe("Login and delete button is not visible", () => {
  beforeEach(() => {
    cy.login("tadas@gmail.com", "tadas123");
  });

  it("Check if messages and delete button", () => {
    cy.get(".messages").should("not.visible");
    cy.get(".delete-button").should("not.exist");
  });
});
