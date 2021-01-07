// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
Cypress.Commands.add("login", (username, password) => {
  cy.visit("/");

  cy.location("protocol").should("eq", "http:");

  cy.get(".container").should("be.visible");

  cy.get('[type="email"]').type(username);

  cy.get('[type="password"]').type(password);

  cy.get(".login")
    .contains("Prisijungti")
    .click();

  cy.url().should("include", "/chatroom");

  cy.get(".chat-window").should("be.visible");

  cy.url().should("include", "/chatroom");

  cy.get(".chat-window").should("be.visible");
});

//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
