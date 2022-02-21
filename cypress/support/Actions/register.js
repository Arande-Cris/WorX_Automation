class Auth{


fillForm(name, register, sector,  postalCode, numberStreet, cpf, date, menssegeError){
        cy.get('.MeuPerfil_dropdownLink__1-bCv').click();
        cy.get('input[type="name"]').type(name, { force: true });
        cy.get('input[placeholder="0000"]').type(register);
        cy.get('input[type="torre"]').type(sector);
        cy.get('input[name="cep"]').type(postalCode);
        cy.get('input[name="numero"]').type(numberStreet);
        cy.get('input[type="cpf"]').type(cpf)
        // cy.get('input[type="date"]').select()
        cy.get('input[type="date"]').type(date)
        cy.get('input[type="name"]').should('have.value', name)
        cy.get('input[placeholder="0000"]').should('have.value', register)
        cy.get('input[type="torre"]').should('have.value', sector)
        cy.get('input[name="cep"]').should('have.value', postalCode)
        cy.get('input[name="numero"]').should('have.value', numberStreet);
        cy.get('input[type="date"]').should('have.value', date);
        cy.get('input[type="cpf"]').should('have.value', cpf);
        cy.get('.modal-body > .fade')
            .should('be.visible')
            .and('have.text', menssegeError)
    
        // cy.get('input[type="date"]').should('have.value', date)
        // cy.get(':nth-child(2) > :nth-child(1) > .form-control-group > .MeuPerfil_linkName__36AgK').should('have.value', '')
        // cy.get(':nth-child(3) > :nth-child(1) > .form-control-group > .MeuPerfil_linkName__36AgK').should('have.value', '')
        // cy.get(':nth-child(3) > :nth-child(2) > .form-control-group > .MeuPerfil_linkName__36AgK').should('have.value', '')
        // cy.get(':nth-child(1) > :nth-child(2) > .form-control-group > .MeuPerfil_linkName__36AgK').should('have.value', '')
 
}
}