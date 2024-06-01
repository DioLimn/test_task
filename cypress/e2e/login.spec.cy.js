const selector = require('../helper/selectors');

describe('login', () => {
    const baseUrl = Cypress.env('base_url');
    const userName = Cypress.env('user_name');
    const password = Cypress.env('password');

    it('All elements should exist', () => {
        cy.visit(baseUrl);
        cy.contains(selector.loginScreen.errorMessage)
            .should('not.exist');
        cy.get(selector.loginScreen.logo)
            .should('exist');
        cy.contains(selector.loginScreen.title)
            .should('exist');
        cy.get(selector.loginScreen.userName)
            .should('exist')
            .should('be.empty');
        cy.get(selector.loginScreen.password)
            .should('exist')
            .should('be.empty');
        cy.get(selector.loginScreen.submitBtn)
            .should('exist');
    });

    it('Login should fail', () => {
        cy.visit(baseUrl);
        cy.contains(selector.loginScreen.errorMessage)
            .should('not.exist');
        cy.get(selector.loginScreen.userName)
            .type(userName);
        cy.get(selector.loginScreen.password)
            .type(password);
        cy.get(selector.loginScreen.submitBtn)
            .click();
        cy.contains(selector.loginScreen.errorMessage)
            .should('exist');
    });

    it('Should Login successfully', () => {
        cy.visit(baseUrl);
        cy.get(selector.loginScreen.userName)
            .type(userName);
        cy.get(selector.loginScreen.password)
            .type(password);
        cy.get(selector.loginScreen.submitBtn)
            .click();
        cy.contains(selector.loginScreen.errorMessage)
            .should('not.exist');
    });
});
