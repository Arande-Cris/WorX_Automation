import faker from "@faker-js/faker"


class AuthActions {
    constructor() {
        this.next = '[class= "carousel-control-next"]';
        this.prev = '[class= "carousel-control-prev"]';
        this.nameTask = faker.random.words(3);
        this.comentario = 'Testando comentário';
        this.nameLink = 'Cypress Avançado'
        this.linkOthers = 'https://ambevtech.udemy.com/course/testes-automatizados-com-cypress-avancado/learn/lecture/25423310#overview';
        this.barraPesquisa = '.Tag_formsControl__jrpKb'
    }

    go() {
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
        });
        cy.viewport(1200, 1080);
        cy.visit("http://localhost:3001/");
    }

    barraPesquisar() {
        cy.get(this.barraPesquisa).type(faker.random.uuid(1));
        cy.get('div[class^= "fade alert"]', {timout: 10000 })
            .should("be.visible")
            .and("have.text", "Certifique-se que digitou corretamente")
        cy.get(this.barraPesquisa).clear();
    }

    advanceBanner() {
        cy.get(this.next).click();
        cy.get(this.next).click();
        cy.get(this.next).click();
        cy.get(this.next).click();
        cy.get(this.next).click();
        cy.get(this.next).click();
        cy.get(this.next).click();
        cy.get(this.prev).click();
        cy.get(this.prev).click();
        cy.get(this.prev).click();
        cy.get(this.prev).click();
        cy.get(this.prev).click();
        cy.get(this.prev).click();
        cy.get(this.prev).click();
    }

    advanceBanner2() {
        cy.get('button[aria-label="Slide 1"]').click();
        cy.get('button[aria-label="Slide 2"]').click();
        cy.get('button[aria-label="Slide 3"]').click();
        cy.get('button[aria-label="Slide 4"]').click();
        cy.get('button[aria-label="Slide 5"]').click();
        cy.get('button[aria-label="Slide 6"]').click();
        cy.get('button[aria-label="Slide 7"]').click();
    }

    advancePages() {
        cy.get('button[value="0"]').click();
        cy.get('button[value="1"]').click();
        cy.get('button[value="2"]').click();
    }

    validateDatePage1() {
        for (var i = 1; i < 11; i++) {
            cy.get(":nth-child(" + i + ") > .Tag_cardzao__20zfG > .Tag_cardBody__2TX7t > :nth-child(1) > .Tag_datePost__3QIfT > :nth-child(1)").should('contain', '/');

        }

    }

    validateDatePage2() {
        for (var i = 1; i < 11; i++) {
            cy.get('[value="1"]').click();
            cy.get(":nth-child(" + i + ") > .Tag_cardzao__20zfG > .Tag_cardBody__2TX7t > :nth-child(1) > .Tag_datePost__3QIfT > :nth-child(1)").should('contain', '/');

        }
    }

    validateDatePage3() {
        for (var i = 1; i < 11; i++) {
            cy.get('[value="2"]').click();
            cy.get(":nth-child(" + i + ") > .Tag_cardzao__20zfG > .Tag_cardBody__2TX7t > :nth-child(1) > .Tag_datePost__3QIfT > :nth-child(1)").should('contain', '/');

        }
    }

    addTask() {

    }

    validateAddTask() {
      
    }

    giveLike() {
        for (var i = 1; i < 5; i++) {
            cy.get(":nth-child(" + i + ") > .Tag_cardzao__20zfG > .Tag_cardBody__2TX7t > .Tag_interaction__1LnAN > .Tag_icons__-ADEd > .Likes_botaoLike__2ASqa").scrollIntoView().click({ force: true });
            cy.log('esse é o i:' + i);
        }
    }

    validateComents() {
        for (var i = 1; i < 6; i++) {
            cy.get(':nth-child(' + i + ') > .Tag_cardzao__20zfG > .Tag_cardBody__2TX7t > .Tag_interaction__1LnAN > .Tag_icons__-ADEd > .Modal_botaoComents__1XWMa').scrollIntoView()
                .click({ force: true });
            cy.get('input[class="Modal_inputComent__2b0Af"]').type(this.comentario);
            cy.get('button[class="Modal_comentButton__3pASH btn btn-primary"]').click({ force: true });
            cy.get('div[class^="Modal_commentsContainer__3q_KR"]').should('contain', this.comentario);
            cy.get('button[class="Modal_closeButton__Itema btn btn-primary"]').click();
            cy.log('Esse é o i:' + i);
        }
    }

    filter() {

    }

    favoriteNews() {
        for (var i = 1; i < 6; i++) {
            cy.get(':nth-child(' + i + ') > .Tag_cardzao__20zfG > .Tag_cardBody__2TX7t > .Tag_interaction__1LnAN > .Tag_icons__-ADEd > #btn').scrollIntoView()
                .dblclick({ force: true })
        }

    }

    addLinkOthers() {
        cy.get('.Atalhos_botaoAdicionar__2nLfe > .dropdown-toggle').click()
        cy.get('div > .dropdown-item').click({ force: true });
        cy.get('.modal-body > :nth-child(2)').type(this.nameLink);
        cy.get('.modal-body > :nth-child(4)').type(this.linkOthers);
        cy.get('.Atalhos_buttonsalvar__2K0Uy').dblclick({ force: true });
        cy.get(':nth-child(6) > a > p', { timout: 10000 }).should('be.visible')
            .and('have.text', this.nameLink)

    }

    directionLinkTC() {
        cy.get('[class="SidebarLinks_inicio__2lQRG navbar-toggler collapsed"]').click();
        cy.get('div[class="SidebarLinks_pessoasHover__2qnHv nav-item dropdown"]')
            .should('have.text', 'Pessoas')
            .click();
        cy.get('a[href="https://app.teamculture.com.br/"]')
            .should('have.text', 'Team Culture')
            .and('have.attr', 'href', 'https://app.teamculture.com.br/')
            .and('have.attr', 'target', '_blank');
    }

    directionLinkSenior() {
        cy.get('.SidebarLinks_inicio__2lQRG').click();
        cy.get('.SidebarLinks_pessoasHover__2qnHv > #offcanvasNavbarDropdown')
            .should('have.text', 'Pessoas')
            .click();
        cy.get('.dropdown-menu > [href="https://platform.senior.com.br/"]')
            .should('have.text', 'Senior X')
            .and('have.attr', 'href', 'https://platform.senior.com.br/')
            .and('have.attr', 'target', '_blank');
    }

    directionLinkReserva() {
        cy.get('.SidebarLinks_inicio__2lQRG').click();
        cy.get('.SidebarLinks_pessoasHover__2qnHv > #offcanvasNavbarDropdown')
            .should('have.text', 'Pessoas')
            .click();
        cy.get('[href="https://ambevaquinha.webnode.com/reservademesa/"]')
            .should('have.text', 'Reserva de Mesas')
            .and('have.attr', 'href', 'https://ambevaquinha.webnode.com/reservademesa/')
            .and('have.attr', 'target', '_blank');
    }


    // getTextLink() {
    //     cy.get('.Atalhos_botaoAdicionar__2nLfe > .dropdown-toggle').click();
    //     cy.get('.Atalhos_list__3ybBP > :nth-child(7)').invoke('text').as('Link1')
    //     cy.get('.Atalhos_list__3ybBP > :nth-child(8)').invoke('text').as('Link2')
    //     cy.get('.Atalhos_list__3ybBP > :nth-child(9)').invoke('text').as('Link3')


    // }

    // addLink() {
    //     for (var i = 7; i < 10; i++) {
    //         cy.get('.Atalhos_botaoAdicionar__2nLfe > .dropdown-toggle').click();
    //         cy.get('.Atalhos_list__3ybBP > :nth-child(' + i + ')').click();
    //         cy.log('Esse é o original:' + i)

    //     }
    // }

    // validateLinkAdd() {
    //     cy.get(':nth-child(6) > a > p').invoke('text').should('be.eq', this.Link1)
    //     cy.get(':nth-child(7) > a > p').invoke('text').should('be.eq', this.Link2)
    //     cy.get(':nth-child(8) > a > p').invoke('text').should('be.eq', this.Link3)

    // }

}
export default new AuthActions();
