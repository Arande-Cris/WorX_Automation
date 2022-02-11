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

import SignupFactories from "../factories/SignupFactory"

Cypress.Commands.add('goToPage', () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
    });
    cy.viewport(1024, 768);
    cy.visit("http://localhost:3001/");
    cy.get('.SidebarUser_infosUserTxt__1jPO6', { timeout: 20000 }).should("be.visible")
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

Cypress.Commands.add('registerInfoValid', (name, register, sector,  postalCode, numberStreet, cpf, date) => {
    cy.get('.MeuPerfil_dropdownLink__1-bCv').click();
    cy.get('[type="name"]').type(name, { force: true });
    cy.get(':nth-child(8) > :nth-child(1) > .MeuPerfil_linkName__36AgK').type(register);
    cy.get(':nth-child(8) > :nth-child(2) > .MeuPerfil_linkName__36AgK').type(sector);
    cy.get(':nth-child(1) > :nth-child(1) > .form-control-group > .MeuPerfil_linkName__36AgK').type(postalCode);
    cy.get(':nth-child(2) > :nth-child(2) > .form-control-group > .MeuPerfil_linkName__36AgK').click();
    cy.get(':nth-child(2) > :nth-child(2) > .form-control-group > .MeuPerfil_linkName__36AgK').type(numberStreet);
    cy.get(':nth-child(11) > :nth-child(1) > .MeuPerfil_linkName__36AgK').type(cpf)
    cy.get(':nth-child(11) > :nth-child(2) > .MeuPerfil_linkName__36AgK').click()

    cy.get(':nth-child(11) > :nth-child(2) > .MeuPerfil_linkName__36AgK').type(date)
    cy.get('[type="name"]').should('have.value', name)
    cy.get(':nth-child(8) > :nth-child(1) > .MeuPerfil_linkName__36AgK').should('have.value', register)
    cy.get(':nth-child(8) > :nth-child(2) > .MeuPerfil_linkName__36AgK').should('have.value', sector)
    cy.get(':nth-child(1) > :nth-child(1) > .form-control-group > .MeuPerfil_linkName__36AgK').should('have.value', postalCode)
    cy.get(':nth-child(2) > :nth-child(2) > .form-control-group > .MeuPerfil_linkName__36AgK').should('have.value', numberStreet);
    cy.get(':nth-child(11) > :nth-child(1) > .MeuPerfil_linkName__36AgK').should('have.value', cpf)
    cy.get(':nth-child(11) > :nth-child(2) > .MeuPerfil_linkName__36AgK').should('have.value', date)
    // cy.get(':nth-child(2) > :nth-child(1) > .form-control-group > .MeuPerfil_linkName__36AgK').should('have.value', '')
    // cy.get(':nth-child(3) > :nth-child(1) > .form-control-group > .MeuPerfil_linkName__36AgK').should('have.value', '')
    // cy.get(':nth-child(3) > :nth-child(2) > .form-control-group > .MeuPerfil_linkName__36AgK').should('have.value', '')
    // cy.get(':nth-child(1) > :nth-child(2) > .form-control-group > .MeuPerfil_linkName__36AgK').should('have.value', '')
    cy.get('.modal-body > :nth-child(21)').click()
})

Cypress.Commands.add('registerInfoInvalidName', (name, register, sector,  postalCode, numberStreet, cpf, date, menssegeError) => {
    cy.get('.MeuPerfil_dropdownLink__1-bCv').click();
    cy.get('[type="name"]').type(name, { force: true });
    cy.get(':nth-child(8) > :nth-child(1) > .MeuPerfil_linkName__36AgK').type(register);
    cy.get(':nth-child(8) > :nth-child(2) > .MeuPerfil_linkName__36AgK').type(sector);
    cy.get(':nth-child(1) > :nth-child(1) > .form-control-group > .MeuPerfil_linkName__36AgK').type(postalCode);
    cy.get(':nth-child(2) > :nth-child(2) > .form-control-group > .MeuPerfil_linkName__36AgK').type(numberStreet);
    cy.get(':nth-child(11) > :nth-child(1) > .MeuPerfil_linkName__36AgK').type(cpf)
    // cy.get(':nth-child(11) > :nth-child(2) > .MeuPerfil_linkName__36AgK').select()
    cy.get(':nth-child(11) > :nth-child(2) > .MeuPerfil_linkName__36AgK').type(date)
    cy.get('[type="name"]').should('have.value', name)
    cy.get(':nth-child(8) > :nth-child(1) > .MeuPerfil_linkName__36AgK').should('have.value', register)
    cy.get(':nth-child(8) > :nth-child(2) > .MeuPerfil_linkName__36AgK').should('have.value', sector)
    cy.get(':nth-child(1) > :nth-child(1) > .form-control-group > .MeuPerfil_linkName__36AgK').should('have.value', postalCode)
    cy.get(':nth-child(2) > :nth-child(2) > .form-control-group > .MeuPerfil_linkName__36AgK').should('have.value', numberStreet);
    cy.get(':nth-child(11) > :nth-child(2) > .MeuPerfil_linkName__36AgK').should('have.value', date);
    cy.get(':nth-child(11) > :nth-child(1) > .MeuPerfil_linkName__36AgK').should('have.value', cpf);
    cy.get('.modal-body > .fade')
        .should('be.visible')
        .and('have.text', menssegeError)

    // cy.get(':nth-child(11) > :nth-child(2) > .MeuPerfil_linkName__36AgK').should('have.value', date)
    // cy.get(':nth-child(2) > :nth-child(1) > .form-control-group > .MeuPerfil_linkName__36AgK').should('have.value', '')
    // cy.get(':nth-child(3) > :nth-child(1) > .form-control-group > .MeuPerfil_linkName__36AgK').should('have.value', '')
    // cy.get(':nth-child(3) > :nth-child(2) > .form-control-group > .MeuPerfil_linkName__36AgK').should('have.value', '')
    // cy.get(':nth-child(1) > :nth-child(2) > .form-control-group > .MeuPerfil_linkName__36AgK').should('have.value', '')
})

Cypress.Commands.add('registerInfoInvalid', (name, register, sector,  postalCode, numberStreet, cpf, date, menssegeError) => {
    cy.get('.MeuPerfil_dropdownLink__1-bCv').click();
    cy.get('[type="name"]').type(name, { force: true });
    cy.get(':nth-child(8) > :nth-child(1) > .MeuPerfil_linkName__36AgK').type(register);
    cy.get(':nth-child(8) > :nth-child(2) > .MeuPerfil_linkName__36AgK').type(sector);
    cy.get(':nth-child(1) > :nth-child(1) > .form-control-group > .MeuPerfil_linkName__36AgK').type(postalCode);
    cy.get(':nth-child(2) > :nth-child(2) > .form-control-group > .MeuPerfil_linkName__36AgK').type(numberStreet);
    cy.get(':nth-child(11) > :nth-child(1) > .MeuPerfil_linkName__36AgK').type(cpf)
    // cy.get(':nth-child(11) > :nth-child(2) > .MeuPerfil_linkName__36AgK').select()
    // cy.get(':nth-child(11) > :nth-child(2) > .MeuPerfil_linkName__36AgK').type(date)
    cy.get('[type="name"]').should('have.value', name)
    cy.get(':nth-child(8) > :nth-child(1) > .MeuPerfil_linkName__36AgK').should('have.value', register)
    cy.get(':nth-child(8) > :nth-child(2) > .MeuPerfil_linkName__36AgK').should('have.value', sector)
    cy.get(':nth-child(1) > :nth-child(1) > .form-control-group > .MeuPerfil_linkName__36AgK').should('have.value', postalCode)
    cy.get(':nth-child(2) > :nth-child(2) > .form-control-group > .MeuPerfil_linkName__36AgK').should('have.value', numberStreet);
    cy.get(':nth-child(11) > :nth-child(1) > .MeuPerfil_linkName__36AgK').should('have.value', cpf)
    // cy.get(':nth-child(11) > :nth-child(2) > .MeuPerfil_linkName__36AgK').should('have.value', date)
    // cy.get(':nth-child(2) > :nth-child(1) > .form-control-group > .MeuPerfil_linkName__36AgK').should('have.value', '')
    // cy.get(':nth-child(3) > :nth-child(1) > .form-control-group > .MeuPerfil_linkName__36AgK').should('have.value', '')
    // cy.get(':nth-child(3) > :nth-child(2) > .form-control-group > .MeuPerfil_linkName__36AgK').should('have.value', '')
    // cy.get(':nth-child(1) > :nth-child(2) > .form-control-group > .MeuPerfil_linkName__36AgK').should('have.value', '')
})