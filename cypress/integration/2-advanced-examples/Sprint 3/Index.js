const el = require("../Sprint 3/Elements").WORX

class acessar{

  visitarPagina(){
   Cypress.on('uncaught:exception', (err, runnable) => {return false})          
   cy.visit('http://localhost:3001/');
  }

 avancarBannerBarra(){
   cy.get(el.Banner1).click()
   cy.get(el.Banner2).click()
   cy.get(el.Banner3).click()
   cy.get(el.Banner4).click()
   cy.get(el.Banner5).click()
   cy.get(el.Banner6).click()
   cy.get(el.Banner7).click() 
  } 

  avancarBannerSeta(){
   cy.get('.carousel-control-next-icon').click();
   cy.get('.carousel-control-next-icon').click();
   cy.get('.carousel-control-next-icon').click();
   cy.get('.carousel-control-next-icon').click();
   cy.get('.carousel-control-next-icon').click();
   cy.get('.carousel-control-next-icon').click();
   cy.get('.carousel-control-next-icon').click();
   cy.get('.carousel-control-prev-icon').click();
   cy.get('.carousel-control-prev-icon').click();
   cy.get('.carousel-control-prev-icon').click();
   cy.get('.carousel-control-prev-icon').click();
   cy.get('.carousel-control-prev-icon').click();
   cy.get('.carousel-control-prev-icon').click();
   cy.get('.carousel-control-prev-icon').click();
   

  }
  
 paginação(){
   cy.get(el.PAGINA1).click() 
   cy.get(el.PAGINA2).click()
   cy.get(el.PAGINA3).click()  
  }

  adicionarlinkFavorito(){
   //SEM VALIDAÇÃO E COM REPETIÇÃO DE CÓDIGO.
   for (var z =8; z<11; z++) {
    var index = 0;

    it('Adicionar Link Favoritos', ()=>{
      for(var i=8; i=z; i++){
         index = i;       
        cy.get('.Atalhos_botaoAdicionar__2nLfe > .dropdown-toggle').click()
        cy.get('.Atalhos_list__3ybBP > :nth-child('+i+')').click()
        cy.get('.Atalhos_list__3ybBP > :nth-child('+i+')').invoke('text').as('nomeLink')
        cy.log('Esse é o original:' +i)
        } 
     });
 
    it('Validar link Favorito adicionado', function(){
       for(var k=8; k<11; k++){
       //if(index == k){
        cy.get('.Atalhos_botoes__2YSld > :nth-child('+k+')').invoke('text').should('contain', this.nomeLink)
        cy.log('Esse é a validação:' +k)
      //}
      }
   
   })
   
   }
  }

  darLike(){
    for(let i=1; i<5; i++){
     cy.get(':nth-child('+i+') > .Tag_cardzao__20zfG > .Tag_cardBody__2TX7t > .Tag_interaction__1LnAN > .Tag_icons__-ADEd > .Likes_botaoLike__2ASqa').click({force: true});
     cy.log('esse é o i:' +i)
    }
  }
  
  validarDataPagina1(){
    for(var i=1; i<16; i++) {
     cy.get(":nth-child("+i+") > .Tag_cardzao__20zfG > .Tag_cardBody__2TX7t > :nth-child(1) > .Tag_datePost__3QIfT > :nth-child(1)").should('contain', '/');
      
    }
  }

  validarDataPagina2(){
    for(var i=1; i<16;i++) {
      cy.get('[value="1"]').click();
      cy.get(":nth-child("+i+") > .Tag_cardzao__20zfG > .Tag_cardBody__2TX7t > :nth-child(1) > .Tag_datePost__3QIfT > :nth-child(1)").should('contain', '/');
      
     }
  }

  validarDataPagina3(){
    for(var i=1; i<11;i++) {
      cy.get('[value="2"]').click();
      cy.get(":nth-child("+i+") > .Tag_cardzao__20zfG > .Tag_cardBody__2TX7t > :nth-child(1) > .Tag_datePost__3QIfT > :nth-child(1)").should('contain', '/');
      
    }
  }

  validarAdicionarTarefa(){
   const escrever = 'Testar Adicionar Tarefas do dia'
   cy.get(el.ESCREVERTAREFAS).type(escrever);
   cy.get(el.ADICIONARTAREFA).click();
   cy.get(el.TAREFAADICIONADA).should('contain', escrever)
   cy.get(el.DELETARTAREFA).click()

  }

 validarTituloNoticia1(){
  for (let z =1; z<16; z++) {
 
    var index = 0;
  
    it('Gravar Titulo Card Pagina 1',()=>{
       for(let i =1; i<=z; i++){
    
        index = i;
        cy.log("esse é o i: "+i)
        cy.get(':nth-child('+i+') > .Tag_cardzao__20zfG > .Tag_cardBody__2TX7t > :nth-child(1) > .Tag_textPost__2DKS_ > .Tag_cardheader__16N2f').invoke('text').as('titulo');  
       }
     });
    
    it('Validar Noticia', function () {
      for(let k =1; k<16; k++){
         if(index == k){
           cy.get(':nth-child('+k+') > .Tag_cardzao__20zfG > .Tag_cardBody__2TX7t > :nth-child(1) > .Tag_textPost__2DKS_ > .Tag_leiamais__zeQKp > .Modal_buttonCards__1DnSE').click({force: true})
          cy.get('.d-flex > h3').invoke('text').should('be.eq', this.titulo)
          cy.get(el.FECHARNOTICIA).click()
         }
      
       }
 
     });
   }
  }

 validarNoticia2(){
   for (let z =1; z<16; z++) {
  
     var index = 0;
   
     it('Gravar Titulo Card Pagina 2',()=>{
        for(let i =1; i<=z; i++){
         index = i;
         cy.log("esse é o i: "+i)
         cy.get('[value="1"]').click();
         cy.get(':nth-child('+i+') > .Tag_cardzao__20zfG > .Tag_cardBody__2TX7t > :nth-child(1) > .Tag_textPost__2DKS_ > .Tag_cardheader__16N2f').invoke('text').as('titulo');  
        }
      });
     
     it('Validar Noticia', function () {
       for(let k =1; k<16; k++){
          if(index == k){
           cy.get('[value="1"]').click();
           cy.get(':nth-child('+k+') > .Tag_cardzao__20zfG > .Tag_cardBody__2TX7t > :nth-child(1) > .Tag_textPost__2DKS_ > .Tag_leiamais__zeQKp > .Modal_buttonCards__1DnSE').click({force: true})
           cy.get('.d-flex > h3').invoke('text').should('be.eq', this.titulo)
           cy.get(el.FECHARNOTICIA).click()
          }
       
        }
      });
    }
  }
  validarNoticia3(){
   for (let z =1; z<16; z++) {
     var index = 0;
   
     it('Gravar Titulo Card Pagina 3',()=>{
        for(let i =1; i<=z; i++){
         cy.get('[value="2"]').click();
         index = i;
         cy.log("esse é o i: "+i)
         cy.get(':nth-child('+i+') > .Tag_cardzao__20zfG > .Tag_cardBody__2TX7t > :nth-child(1) > .Tag_textPost__2DKS_ > .Tag_cardheader__16N2f').invoke('text').as('titulo');  
        }
      });
     
     it('Validar Noticia', function () {
       for(let k =1; k<16; k++){
          if(index == k){
           cy.get('[value="2"]').click();
           cy.get(':nth-child('+k+') > .Tag_cardzao__20zfG > .Tag_cardBody__2TX7t > :nth-child(1) > .Tag_textPost__2DKS_ > .Tag_leiamais__zeQKp > .Modal_buttonCards__1DnSE').click({force: true})
           cy.get('.d-flex > h3').invoke('text').should('be.eq', this.titulo)
           cy.get(el.FECHARNOTICIA).click()
          }
       
        }
      });
    }
  }

  validarNoticia4(){
   for (let z =1; z<6; z++) {
     var index = 0;
   
     it('Gravar Titulo Card Pagina 4',()=>{
        for(let i =1; i<=z; i++){
         index = i;
         cy.get('[value="3"]').click();
         cy.log("esse é o i: "+i)
         cy.get(':nth-child('+i+') > .Tag_cardzao__20zfG > .Tag_cardBody__2TX7t > :nth-child(1) > .Tag_textPost__2DKS_ > .Tag_cardheader__16N2f').invoke('text').as('titulo');  
        }
     });
      
     it('Validar Noticia', function () {
       for(let k =1; k<6; k++){
         if(index == k){
           cy.get('[value="3"]').click();
           cy.get(':nth-child('+k+') > .Tag_cardzao__20zfG > .Tag_cardBody__2TX7t > :nth-child(1) > .Tag_textPost__2DKS_ > .Tag_leiamais__zeQKp > .Modal_buttonCards__1DnSE').click({force: true})
           cy.get('.d-flex > h3').invoke('text').should('be.eq', this.titulo)
           cy.get(el.FECHARNOTICIA).click()
          }
        }
      });
    }
  }

 comentar(){
   cy.get(el.BOTÃOCOMENTAR1).click()
   cy.get(el.DIGITARCOMENTS).type(el.TEXTOCOMENTS)  
   cy.get(el.CONFIRMARCOMENTS).click()
   cy.get(el.FECHARCOMENTS).click()
      
  }
   
 validarComentario(){
   cy.get(el.BOTÃOCOMENTAR1).click()
   cy.get(el.DIGITARCOMENTS).type("Teste Comentando")  
   cy.get(el.COMENTARIO).click()
   cy.get('.modal-body > :nth-child(2)').should('have.text', 'usuarioTeste Comentando')
   cy.get(el.FECHARNOTICIA).click()
  }
 comentar2(){
   cy.get(el.BOTÃOCOMENTAR2).click()
   cy.get(el.DIGITARCOMENTS).type(el.TEXTOCOMENTS)  
   cy.get(el.CONFIRMARCOMENTS).click()
   cy.get(el.FECHARCOMENTS).click()
       
  }
    
 validarComentario2(){
   cy.get(el.BOTÃOCOMENTAR2).click()
   cy.get(el.DIGITARCOMENTS).type("Teste Comentando")  
   cy.get(el.COMENTARIO).click()
   cy.get('.modal-body > :nth-child(2)').should('have.text', 'usuarioTeste Comentando')
   cy.get(el.FECHARNOTICIA).click()
  }

 comentar3(){
   cy.get(el.BOTÃOCOMENTAR3).click()
   cy.get(el.DIGITARCOMENTS).type(el.TEXTOCOMENTS)  
   cy.get(el.CONFIRMARCOMENTS).click()
   cy.get(el.FECHARCOMENTS).click()
        
  }
     
 validarComentario3(){
   cy.get(el.BOTÃOCOMENTAR3).click()
   cy.get(el.DIGITARCOMENTS).type("Teste Comentando")  
   cy.get(el.COMENTARIO).click()
   cy.get('.modal-body > :nth-child(2)').should('have.text', 'usuarioTeste Comentando')
   cy.get(el.FECHARNOTICIA).click()
  }

 comentar4(){
   cy.get(el.BOTÃOCOMENTAR4).click()
  cy.get(el.DIGITARCOMENTS).type(el.TEXTOCOMENTS)  
   cy.get(el.CONFIRMARCOMENTS).click()
   cy.get(el.FECHARCOMENTS).click()
        
  }
     
 validarComentario4(){
   cy.get(el.BOTÃOCOMENTAR4).click()
   cy.get(el.DIGITARCOMENTS).type("Teste Comentando")  
   cy.get(el.COMENTARIO).click()
   cy.get('.modal-body > :nth-child(2)').should('have.text', 'usuarioTeste Comentando')
   cy.get(el.FECHARNOTICIA).click()
  }

 comentar5(){
   cy.get(el.BOTÃOCOMENTAR5).click()
   cy.get(el.DIGITARCOMENTS).type(el.TEXTOCOMENTS)  
   cy.get(el.CONFIRMARCOMENTS).click()
   cy.get(el.FECHARCOMENTS).click()
        
  }
     
 validarComentario5(){
   cy.get(el.BOTÃOCOMENTAR5).click()
   cy.get(el.DIGITARCOMENTS).type("Teste Comentando")  
   cy.get(el.COMENTARIO).click()
   cy.get('.modal-body > :nth-child(2)').should('have.text', 'usuarioTeste Comentando')
   cy.get(el.FECHARNOTICIA).click()
  }
  
 filtroRecente(){
   cy.get(el.FILTRO).click({force: true})
   cy.get(el.FILTRORECENTE).click({force: true})
  }

 filtroAntigos(){
   cy.get(el.FILTRO).click({force: true})
   cy.get(el.FILTROANTIGAS).click()
   }

 
 filtroImportante(){
   cy.get(el.FILTRO).click({force: true})
   cy.get(el.FILTROIMPORTANTE).click({force: true})
   
   }
 
 filtroComemoracoes(){
   cy.get(el.FILTRO).click({force: true})
   cy.get(el.FILTROCOMEMORACOES).click().click({force: true})
    
  }

 filtroSaude(){
   cy.get(el.FILTRO).click({force: true})
   cy.get(el.FILTROSAUDE).click()
      
  }
 
 filtroVagas(){
   cy.get(el.FILTRO).click({force: true})
   cy.get(el.FILTROVAGAS).click({force: true})
        
  }


  filtroNovasAquisicoes(){
   cy.get(el.FILTRO).click({force: true})
   cy.get(el.FILTROAQUISICOES).click({force: true})
         
  }
 
 filtroTreinamentos(){
   cy.get(el.FILTRO).click({force: true})
   cy.get(el.FILTROTREINAMENTOS).click({force: true})
         
  }
  
  
 filtroConcursosECompeticoes(){
   cy.get(el.FILTRO).click({force: true})
   cy.get(el.FILTROCONCURSOS).click({force: true})
         
  }
  
 filtroOutros(){
   cy.get(el.FILTRO).click({force: true})
   cy.get(el.FILTROOUTROS).click({force: true})
         
  }

 filtroAutores1(){
   cy.get(el.FILTRO).click({force: true})
   cy.get(el.FILTROCAMILA).click()
         
  }

 filtroAutores2(){
   cy.get(el.FILTRO).click({force: true})
   cy.get(el.FILTROCINTIA).click({force:true})
          
  }

 filtroAutores3(){
   cy.get(el.FILTRO).click({force: true})
   cy.get(el.FILTROJOAO).click()
            
  }
  
 favoritarNoticia1(){
   cy.get(el.FAVORITAR1, {timeout: 10000}).dblclick({force: true})

  }

 favoritarNoticia2(){
   cy.get(el.FAVORITAR2, {timeout: 10000}).dblclick({force: true})

  }

 favoritarNoticia3(){
   cy.get(el.FAVORITAR3, {timeout: 10000}).dblclick({force: true})

  }
 
 adicionarLinkOutros(){
   cy.get(el.ADICIONARLINK).click();
   cy.get(el.LINKFAVORITOOUTROS).click(); 
   cy.get(el.NOMELINK).type('Cypress Avançado');
   cy.get(el.NOMELINK).invoke('text').as('LinkOutros')
   cy.get(el.URLLINK).type('https://ambevtech.udemy.com/course/testes-automatizados-com-cypress-avancado/learn/lecture/25423310#overview') 
   cy.get(el.CONFIRMARLINK).click({force: true});          
             
  }
 
 deletarLink(){
   cy.get(el.DELETARLINK).trigger('click', {force: true});
   
  }

 pesquisarNaBarraPesquisa(){
   cy.get(el.BARRAPESQUISA).type(el.TEXTOPESQUISA)
    
  }

 direcionamentoTwitter(){
   cy.get(el.LINKTWITTER).click({force: true})
              
  }
   
 direcionamentoLinkedIn(){
   cy.get(el.LINKLINKEDIN).click({force: true})
              
  }
  
 direcionamentoFacebook(){
   cy.get(el.LINKFACEBOOK).click({force: true})
         
  }
 
 direcionamentoInstagram(){
   cy.get(el.LINKINSTAGRAM).click({force: true})
              
  }

 direcionamentoHome(){
   cy.get(el.INICIO).click({force: true})
   cy.get(el.DIRECIONAMENTOHOME).click({force: true})
            
  }

 direcionamentoPessoas(){
   cy.get(el.INICIO).click({force: true})
   cy.get(el.PESSOAS).click({force: true})

  }

  direcionamentoParaVoce(){
   cy.get(el.INICIO).click({force: true})
   cy.get(el.PRAVOCE).click({force: true})
  }

  direcionamentoBemEstar(){
   cy.get(el.INICIO).click({force: true})
   cy.get(el.BEMESTAR).click({force: true})
  }

  direcionamentoEstudos(){
   cy.get(el.INICIO).click({force: true})
   cy.get(el.ESTUDOS).click({force: true})
  
  }

  direcionamentoSuporte(){
   cy.get(el.INICIO).click({force: true})
   cy.get(el.SUPORTE).click({force: true})
  }

 direcionamentoContatos(){
   cy.get(el.INICIO).click({force: true})
   cy.get(el.CONTATOS).click({force: true})

  }

  direcionamentoIndicadores(){
   cy.get(el.INICIO).click({force: true})
   cy.get(el.INDICADORES).click({force: true})

  }

  direcionamentoDeI(){
   cy.get(el.INICIO).click({force: true})
   cy.get(el.DeI).click({force: true})

  }
  
  direcionamentoSenior(){
    cy.get(el.LINKSENIOR).click({force: true})
  }

  direcionamentoReserva(){
   cy.get(el.LINKRESERVA).click({force: true})

  }

 direcionamentoNoticias(){
   cy.get(el.LINKNOTICIAS).click({force: true})

  }

 direcionamentoTeamCulture(){
   cy.get(el.LINKTEAMCULTURE).click({force: true})

  }
  direcionamentoPoliticas(){
    cy.get(el.LINKPOLITICAS).click({force: true})

  }
  direcionamentoMeuPerfil(){
   cy.get(el.LINKMEUPERFIL).click({force: true})

  }
  direcionamentoCicloGente(){
    cy.get(el.LINKCICLOGENTE).click({force: true})

  }
  direcionamentoRespeito(){
    cy.get(el.LINKRESPEITO).click({force: true})

  }
  direcionamentoBeneficios(){
    cy.get(el.LINKBENEFICIOS).click({force: true})


  }
  direcionamentoCarreirasStartTech(){
   cy.get(el.LINKCARREIRASTARTTECH).click({force: true})

  }
  direcionamentoSelfFriday(){
    cy.get(el.LINKSELFFRIDAY).click({force: true})

  }
  direcionamentoZenKlub(){
   cy.get(el.LINKZENKLUB).click({force: true})
  }
  direcionamentoCaliandra(){
   cy.get(el.LINKCALIANDRA).click({force: true})

  }
  direcionamentoGympass(){
    cy.get(el.LINKGYMPASS).click({force: true})

  }
  direcionamentoAmbevOn(){
    cy.get(el.LINKAMBEVON).click({force: true})

  }

  direcionamentoAmbevOnTech(){
    cy.get(el.LINKAMBEVONTECH).click({force: true})
  }
  direcionamentoWiki(){
    cy.get(el.LINKWIKI).click({force: true})

  }

  direcionamentoDevGalaxia(){
   cy.get(el.LINKDEVGALAXIA).click({force: true})

  }

  direcionamentoLinkedInLearning(){
   cy.get(el.LINKLINKEDIN).click({force: true})

  }

  direcionamentoCyberSecurity(){
   cy.get(el.LINKCYBERSECURITY).click({force: true})

  }

  direcionamentoTechOps(){
   cy.get(el.LINKTECHOPS).click({force: true})

  }

  direcionamentoTemplates(){
   cy.get(el.LINKTEMPLATES).click({force: true})

  }

  direcionamentoAgiliza(){
   cy.get(el.LINKAGILIZA).click({force: true})
  }
 
 direcionamentoClick(){
    cy.get(el.LINKCLICK).click({force: true})
  
  }

 direcionamentoNps(){
   cy.get(el.LINKNPS).click({force: true})

  }

 direcionamentoComiteDeAutTech(){
    cy.get(el.LINKCOMITEDEAUTTECH).click({force: true})

  }
 
 direcionamentoOuvidoria (){
   cy.get(el.LINKOUVIDORIA).click({force: true})
             
  }

 direcionamentoAmbevOn (){
   cy.get(el.LINKAMBEVON).click({force: true})
       
  }

 direcionamentoGente360 (){
   cy.get(el.LINKGENTE360).click({force: true})
             
  }

  direcionamentoSelfLearning(){
    cy.get(el.LINKSELFLEARNING).click({force: true})
             
  
  }

}

export default new acessar
