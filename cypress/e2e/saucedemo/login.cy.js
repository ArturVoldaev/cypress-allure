/// <reference types="cypress" />

describe('Login to saucedemo"', () => {
  beforeEach(() => {
    cy.visit({url:"https://www.saucedemo.com/", failOnStatusCode: false})
  });
  it("Positive login to saucedemo", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get("#login-button").click();

    cy.get(".shopping_cart_link").should("be.visible");
  });
});
