/// <reference types="cypress" />
import auth from "../../support/Actions/authActions";
import { parse } from "date-fns";
import faker from "@faker-js/faker";

describe("Teste Site WorX - Grupo 4", () => {
    beforeEach(() => {
        cy.goToPage();
    });

    it.only("Pesquisar na barra com faker", () => {
      auth.barraPesquisar();
    });

    it("Avançar Banner", () => {
        auth.advanceBanner();
        auth.advanceBanner2();
    });

    it("Validar Tipo data ", () => {
        auth.validateDatePage1();
        auth.validateDatePage2();
        auth.validateDatePage3();
    });

    it("Validar Tarefa Adicionada", () => {
        auth.validateAddTask();
    });

    it("Validar Comentarios", () => {
        auth.validateComents();
    });

    it("Adicionar link Outros", () => {
        auth.addLinkOthers();
    });

    //Redirecionamento Links

    it("Validar Link Team Culture", () => {
        cy.testLink(
            "Pessoas",
            "Team Culture",
            "https://app.teamculture.com.br/",
            "_blank"
        );
    });

    it("Redirecionamento Link Team culture", () => {
        auth.directionLinkTC();
    });

    it("Redirecionamento Link Senior X", () => {
        auth.directionLinkSenior();
    });

    it("Redirecionamento Link Reserva de Mesas", () => {
        auth.directionLinkReserva();
    });

    // it("have dates sorted chronologically", () => {
    //     for (let i = 1; i < 5; i++) {
    //         cy.get(".Tag_filterLogo__2uCzf > .dropdown > .dropdown-toggle").click();
    //         cy.get('.dropdown-menu > [href="/home"]').click();

    //         const parseDate = (date) => parse(date, "dd.MM.yyyy", new Date());
    //         let prevDate = parseDate("08.08.2019");

    //         cy.get(":nth-child(" +i +") > .Tag_cardzao__20zfG > .Tag_cardBody__2TX7t > :nth-child(1) > .Tag_datePost__3QIfT > :nth-child(1)").each(($pre) => {
    //             const currentDate = parseDate($pre.text());
    //             expect(prevDate).gte(currentDate);

    //             prevDate == currentDate;
    //         });
    //     }
    // });

    // it("Login", () => {
    //     cy.get('.SignInButton_buttonLogin__2j-Rg').scrollIntoView()
    //         .dblclick();
    // })

    // it("Verificar data por cronologia", () => {
    //     for (let i = 1; i < 20; i++) {
    //         const parseDate = (date) => parse(date, "dd/MM/yyyy", new Date());
    //         let prevDate = parseDate("02.07.2019");

    //         cy.get(".Tag_postSection__2r1Wv")
    //             .find(":nth-child(" + i + ") > .Tag_cardzao__20zfG > .Tag_cardBody__2TX7t > :nth-child(1) > .Tag_datePost__3QIfT > :nth-child(1)", { force: true })
    //             .each(($pre) => {
    //                 const currentDate = parseDate($pre.text());
    //                 expect(prevDate).gte(currentDate);

    //                 prevDate = currentDate;
    //             });
    //     }
    // });

    // it("Curtir Noticias", () => {
    //     auth.giveLike();
    // })

    // it("Favoritar Noticias", () => {
    //     auth.favoriteNews();
    // })

    // it('Pegar Texto do Link Adicionado', () => {
    //     cy.get('.Atalhos_botaoAdicionar__2nLfe > .dropdown-toggle').click();
    //     cy.get('.Atalhos_list__3ybBP > :nth-child(9)').invoke('text').as('Link1')
    //     cy.get('.Atalhos_list__3ybBP > :nth-child(10)').invoke('text').as('Link2')
    //     cy.get('.Atalhos_list__3ybBP > :nth-child(11)').invoke('text').as('Link3')

    // })

    // it('Adicionar Link Favoritos', () => {
    //     for (var i = 9; i < 12; i++) {
    //         cy.get('.Atalhos_botaoAdicionar__2nLfe > .dropdown-toggle').click({force: true});
    //         cy.get('.Atalhos_list__3ybBP > :nth-child(' + i + ')').scrollIntoView()
    //             .click({force: true});
    //         cy.log('Esse é o original:' + i)

    //     }

    // })

    // it('Validar a Nome do link adicionado', function () {
    //     cy.get(':nth-child(6) > a > p').invoke('text').should('contain', this.Link1)
    //     cy.get(':nth-child(7) > a > p').invoke('text').should('contain', this.Link2)
    //     cy.get(':nth-child(8) > a > p').invoke('text').should('contain', this.Link3)

    // })

    // it('Remover link Favoritos', ()=>{
    //     cy.get(':nth-child(7) > .Atalhos_botaoDelete__NQDCy').click({force: true});
    //     cy.get(':nth-child(6) > .Atalhos_botaoDelete__NQDCy').click({force: true});
    //     cy.get('.Atalhos_botaoDelete__NQDCy').click({force: true});

    // })
});
