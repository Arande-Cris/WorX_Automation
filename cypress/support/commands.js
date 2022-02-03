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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('goToPage', () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
    });
    cy.viewport(1200, 1080);
    cy.visit("http://localhost:3001/");
})

Cypress.Commands.add('testLink', (nameClass, nameLink, url, target) => {
    cy.get('.SidebarLinks_inicio__2lQRG').click();
    cy.get('.SidebarLinks_pessoasHover__2qnHv > #offcanvasNavbarDropdown')
        .should('have.text', nameClass)
        .click();
    cy.get('[href="https://app.teamculture.com.br/"]')
        .should('have.text', nameLink)
        .and('have.attr', 'href', url)
        .and('have.attr', 'target', target);
})