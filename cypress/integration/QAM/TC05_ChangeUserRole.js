describe("Login and change user role", () => {
  beforeEach(() => {
    cy.login("tadas@gmail.com", "tadas123");
  });

  it("Open up role selection and change the role of the user", () => {
    cy.get(".settings-button").should("be.visible");

    cy.get(".settings-button")
      .eq(0)
      .click();

    cy.get("#manage-user-role").should("be.visible");

    cy.get(".select-user-role").select("Administratorius");

    cy.get(".save-new-role")
      .should("be.visible")
      .click();

    cy.get("#user-role").contains("Administratorius", { timeout: 5000 });
  });
});
