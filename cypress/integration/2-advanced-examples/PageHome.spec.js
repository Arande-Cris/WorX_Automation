/// <reference types="cypress" />
import auth from "../../support/Actions/authActions";
import faker from "@faker-js/faker";
faker.locale = 'pt_BR';



describe("Teste Site WorX - Grupo 4", () => {
    beforeEach(() => {
        cy.goToPage();

    });

    it("Pesquisar na barra com faker", () => {
        auth.barraPesquisar();
    });

    it("Avançar Banner", () => {
        auth.advanceBanner();
        auth.advanceBanner2();
    });

    it("Advance Page", () => {
        auth.advancePages();
    });

    //Validando se Titulo Noticia é igual ao titulo do texto após aberto o d
    for (let z = 1; z < 3; z++) {

        var index = 0;

        it('Gravar Titulo Card Pagina 1', () => {
            for (let i = 1; i <= z; i++) {
                index = i;
                cy.log("esse é o i: " + i)
                cy.get(':nth-child(' + i + ') > .Tag_cardzao__20zfG > .Tag_cardBody__2TX7t > :nth-child(1) > .Tag_textPost__2DKS_ > .Tag_cardheader__16N2f').invoke('text').as('titulo');
            }
        });

        it('Validar Noticia', function () {
            for (let k = 1; k < 3; k++) {
                if (index == k) {
                    cy.get(':nth-child(' + k + ') > .Tag_cardzao__20zfG > .Tag_cardBody__2TX7t > :nth-child(1) > .Tag_textPost__2DKS_ > .Tag_leiamais__zeQKp > div > .Modal_buttonCards__1DnSE').click({ force: true })
                    cy.get('.d-flex > h3').invoke('text').should('be.eq', this.titulo)
                    cy.get('button[class="btn-close"]').click()
                }
            }
        });
    }

    it('Adicionar tarefas do dia',() => {
        const nameTask = faker.random.words(2)
        cy.get('button[class="btn btn-primary"]').scrollIntoView().click({force: true})
        cy.get('input[placeholder="Adicione uma nova task"]').type(nameTask)
        cy.get('input[placeholder="Adicione uma nova task"]').invoke('text').as('taks')
        cy.get('.ToDoList_addTask__3zQSA > button').click()
        cy.get('button[class="btn-close"]').click()

    })

    it('Validar tarefas do dia adicionadas', function () {
        cy.get('button[class="btn btn-primary"]').scrollIntoView().click({ force: true })
        cy.get('.modal-body > :nth-child(2) > :nth-child(1)').invoke('text').should('contains', this.taks)

    })

    it("Cadastro Valido", () => {
        cy.registerInfoValid('Arande Cristina', '1234', 'APPIA', '08235770', '1745', '44617465896', '2022-02-08', 'o nome é muito grande');

    });

    it("Cadastro NomeC/ mais de 71 palavras", () => {
        cy.registerInfoInvalidName(faker.random.words(71), '1234', 'APPIA', '08235770', '1745', '44617465896', '2022-02-08', 'o nome é muito grande');

    });

    it("Cadastro Nome Invalido (Caracter Especial)", () => {
        cy.registerInfoInvalidName('%%$$', '1234', 'APPIA', '08235770', '1745', '44617465896', '1998-01-16', 'o campo nome possui caracter inválido');

    });

    it("Cadastro Nome Invalido (Numeros)", () => {
        cy.registerInfoInvalidName('474567 7454541', '1234', 'APPIA', '08235770', '1745', '44617465896', '1998-01-16', 'o campo nome possui caracter inválido');

    });

    it("Cadastro  Matricula Invalido (C/ 3 numeros", () => {
        cy.registerInfoInvalidName('Arande Cristina', '123', 'APPIA', '08235770', '1745', '44617465896', '1998-01-16', 'informe os 4 números de matrícula');

    });

    it("Cadastro  Matricula Invalido (C/ 5 numeros", () => {
        cy.registerInfoInvalidName('Arande Cristina', '12345', 'APPIA', '08235770', '1745', '44617465896', '1998-01-16', 'informe os 4 números de matrícula');

    });

    it("Cadastro  Matricula Invalido (C/ Letras", () => {
        cy.registerInfoInvalidName('Arande Cristina', ' rstrasdtv', 'APPIA', '08235770', '1745', '44617465896', '1998-01-16', 'informe os 4 números de matrícula');

    });

    it("Cadastro Matrícula Invalido (C/ Caracter Especial)", () => {
        cy.registerInfoInvalidName('Arande Cristina', '%$%$%$%$%$%$%$', 'APPIA', '08235770', '1745', '44617465896', '1998-01-16', 'informe os 4 números de matrícula');

    });

    it("Cadastro Torre  Invalido (C/ Apenas numeros)", () => {
        cy.registerInfoInvalidName('Arande Cristina', '1234', '7855659625654', '08235770', '1745', '44617465896', '1998-01-16', 'campo torre tem caracteres numéricos em excesso');

    });

    it("Cadastro Torre Invalido (C/ Caracter Especial)", () => {
        cy.registerInfoInvalidName('Arande Cristina', '1234', '%%$%$%$%', '08235770', '1745', '44617465896', '1998-01-16', 'campo torre tem caracteres especiais em excesso');

    });

    it("Cadastro CEP Invalido (7 Números)", () => {
        cy.registerInfoInvalidName('Arande Cristina', '1234', 'APPIA', '1234857', '1745', '44617465896', '1998-01-16', 'informe os 8 número do cep sem espaço ou dígito');

    });

    it("Cadastro CEP Invalido (9 Números)", () => {
        cy.registerInfoInvalidName('Arande Cristina', '1234', 'APPIA', '123485789', '1745', '44617465896', '1998-01-16', 'informe os 8 número do cep sem espaço ou dígito');

    });

    it("Cadastro CEP Invalido (CEP C/ Caracter Especial)", () => {
        cy.registerInfoInvalidName('Arande Cristina', '1234', 'APPIA', '$$$$$%', '1745', '44617465896', '1998-01-16', 'informe os 8 número do cep sem espaço ou dígito');

    });

    it("Cadastro CEP Invalido (C/ String)", () => {
        cy.registerInfoInvalidName('Arande Cristina', '1234', 'APPIA', 'rtgtssjdft', '1745', '44617465896', '1998-01-16', 'informe os 8 número do cep sem espaço ou dígito');

    });

    it("Cadastro CPF Invalido (C/ 10 numeros)", () => {
        cy.registerInfoInvalidName('Arande Cristina', '1234', 'APPIA', '08235770', '1745', '4491742199', '1998-01-16', 'campo CPF não possui onze dígitos');

    });

    it("Cadastro CPF Invalido (C/ 12 numeros)", () => {
        cy.registerInfoInvalidName('Arande Cristina', '1234', 'APPIA', '08235770', '1745', '449174219999', '1998-01-16', 'campo CPF não possui onze dígitos');

    });

    it("Cadastro CPF Invalido (C/ Caracter Especial)", () => {
        cy.registerInfoInvalidName('Arande Cristina', '1234', 'APPIA', '08235770', '1745', '$%%$##@', '1998-01-16', 'campo CPF não possui onze dígitos');

    });

    it("Cadastro CPF Invalido (C/ String)", () => {
        cy.registerInfoInvalidName('Arande Cristina', '1234', 'APPIA', '08235770', '1745', 'rtffjdtrf', '1998-01-16', 'campo CPF não possui onze dígitos');

    });

    it("Cadastro Data de aniversario Invalido (C/ data no futuro)", () => {
        cy.registerInfoValid('Arande Cristina', '1234', 'APPIA', '08235770', '1745', '44915896336', '1998-01-16');

    });

    it("Validar Tipo data ", () => {
        auth.validateDatePage1();
        auth.validateDatePage2();
        auth.validateDatePage3();
    });

    it("Validar Comentarios", () => {
        auth.validateComents();
    });

    it("Adicionar link Outros", () => {
        auth.addLinkOthers();
    });

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

    // it.only('Compartilhar Noticias', function () {
    //     for (let z = 1; z < 3; z++) {
    //         if (z = 1) {

    //             cy.get(':nth-child(' + z + ') > .Tag_cardzao__20zfG > .Tag_cardBody__2TX7t > :nth-child(1) > :nth-child(1) > .Modal_buttonIcon__2N_Dn > svg').click()
    //             cy.get('.modal-body > button').click()
    //             cy.get('button[class="Modal_Confirm__1zlJm btn btn-primary"]').click()
    //             cy.get(':nth-child(11) > .Modal_ButtonGet__F5NW1').click()
    //             cy.get('.modal-footer > :nth-child(1)').click()
    //             cy.get('.modal-footer > :nth-child(2)').click()
    //         }

    //         else {
    //             cy.get(':nth-child(' + z + ') > .Tag_cardzao__20zfG > .Tag_cardBody__2TX7t > :nth-child(1) > :nth-child(1) > .Modal_buttonIcon__2N_Dn > svg').click()
    //             cy.get(':nth-child(11) > .Modal_ButtonGet__F5NW1').click()
    //             cy.get('.modal-footer > :nth-child(1)').click()
    //             cy.get('.modal-footer > :nth-child(2)').click()
    //         }
    //     }

    // })

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
