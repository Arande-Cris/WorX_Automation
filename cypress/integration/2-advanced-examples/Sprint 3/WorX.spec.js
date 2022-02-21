/// <reference types="cypress" />

// const faker = require('../2-advanced-examples/faker')
const el = require ("../Sprint 3/Elements").WORX
import acessar from "../Sprint 3/Index"

describe('Teste Site WorX - Grupo 4', () =>{


  beforeEach(() => {
   cy.viewport(1200,1080);
   acessar.visitarPagina();
  
  });

 //SEM VALIDAÇÃO E COM REPETIÇÃO DE CÓDIGO.


 it('Pegar Texto do Link Adicionado', ()=>{
   const z = 
   cy.get('.Atalhos_botaoAdicionar__2nLfe > .dropdown-toggle').click();
   cy.get('.Atalhos_list__3ybBP > :nth-child(7)').invoke('text').as('Link1')
   cy.get('.Atalhos_list__3ybBP > :nth-child(8)').invoke('text').as('Link2')
   cy.get('.Atalhos_list__3ybBP > :nth-child(9)').invoke('text').as('Link3')

   
  })
  
  it('Adicionar Link Favoritos', ()=>{
   for(var i=7; i<10; i++){ 
     cy.get('.Atalhos_botaoAdicionar__2nLfe > .dropdown-toggle').click();
     cy.get('.Atalhos_list__3ybBP > :nth-child('+i+')').click();
     cy.log('Esse é o original:' +i)

    }

  })  
  
 it('Validar a Nome do link adicionado', function(){
   cy.get(':nth-child(6) > a > p').invoke('text').should('be.eq', this.Link1)
   cy.get(':nth-child(7) > a > p').invoke('text').should('be.eq', this.Link2)
   cy.get(':nth-child(8) > a > p').invoke('text').should('be.eq', this.Link3)
  })
  
 it('Deletar Link Favorito',()=>{
   cy.get(':nth-child(8) > .Atalhos_botaoDelete__NQDCy').click({force: true});
   cy.get(':nth-child(7) > .Atalhos_botaoDelete__NQDCy').click({force: true});
   cy.get(':nth-child(6) > .Atalhos_botaoDelete__NQDCy').click({force: true});

  })

 //COM VALIDAÇÃO E NÃO QUERO ALTERAR A CURTO PRAZO.
 
  it('Adicionar tarefas do dia',()=>{
   acessar.validarAdicionarTarefa();

  })

  
 //COM VALIDAÇÃO, MAS É NECESSÁRIO MELHORAR.

 //VALIDAR TIPO DATA E CRONOLOGIA.

 it('Verificar Presença de data Pagina 1',()=>{
   acessar.validarDataPagina1()
  });

  it('Verificar Presença de data Pagina 2',()=>{
    acessar.validarDataPagina2();
    
  });

  it('Verificar Presença de data Pagina 3',()=>{
   acessar.validarDataPagina3();
    
  });

 it('Validar Comentário ', ()=>{
   acessar.validarComentario()
    
  });

 it('Validar Comentário ', ()=>{
   acessar.validarComentario2()
   
  });
 
 it('Validar Comentário', ()=>{
   acessar.validarComentario3()
      
  });   

 //SEM VALIDAÇÃO, MAS SERIA INTERESSANTE ADICIONAR.

//  it('Dar Like Pagina 1',()=>{
//    acessar.darLike

//   })

//   it('Favoritar Noticia 1', ()=>{
//    acessar.favoritarNoticia1();
          
//   });

//   it('Favoritar Noticia 2', ()=>{
//    acessar.favoritarNoticia2();
           
//   });

//  it('Favoritar Noticia 3', ()=>{
//    acessar.favoritarNoticia3();
           
//   });

 it('Filtro Todas: Mais Recentes', ()=>{
   acessar.filtroRecente()
         
  });

 it('Filtro Todas: Mais Antigas', ()=>{
   acessar.filtroAntigos()
         
  });

 it('Filtro Por Tag: Importante', ()=>{
   acessar.filtroImportante()
    
  });
   
 it('Filtro Por Tag: Comemorações', ()=>{
   acessar.filtroComemoracoes()
              
  });

 it('Filtro Por Tag: Saúde', ()=>{
   acessar.filtroSaude()
                  
  }); 
    
 it('Filtro Por Tag: Vagas', ()=>{
   acessar.filtroVagas()
    
  });

 it('Filtro Por Tag: Novas Aquisições', ()=>{
   acessar.filtroNovasAquisicoes()
            
  });

 it('Filtro Por Tag: Treinamentos', ()=>{
   acessar.filtroTreinamentos();
    
  });

 it('Filtro Por Tag: Concursos e Competições', ()=>{
    acessar.filtroConcursosECompeticoes();
     
  });

 it('Filtro Por Tag: Outros', ()=>{
    acessar.filtroOutros();
         
  });

 //MELHORAR PESQUISA NA BARRA E VALIDAR. PEDIR ALTERAÇÃO PARA OS DEV'S (aparecer menssagem de aviso quando buscada uma palavra que não se encontra nas noticias ou com grafia incorreta)
   
 it('Pesquisar Noticia', ()=>{
   acessar.pesquisarNaBarraPesquisa();
     
  });

 //SEM VALIDAÇÃO, MAS NÃO É PRIORIDADE. 

 it('Direcionamento Twitter', ()=>{
   acessar.direcionamentoTwitter();
             
  });
 
 it('Direcionamento LinkedIn', ()=>{
   acessar.direcionamentoLinkedIn();
             
  });
    
 it('Direcionamento Facebook', ()=>{
   acessar.direcionamentoFacebook();
          
  });

 it('Direcionamento Instagram', ()=>{
   acessar.direcionamentoInstagram();   
    
  });
 
 it('Direcionamento Home', ()=>{
    acessar.direcionamentoHome();
                   
  });
 
 it('Direcionamento Senior', ()=>{
   acessar.direcionamentoPessoas();
   acessar.direcionamentoSenior();
                      
  });

 it('Direcionamento Reserva de Mesa', ()=>{
    acessar.direcionamentoPessoas();
    acessar.direcionamentoReserva();                 
    
  });

  it('Direcionamento Noticias', ()=>{
    acessar.direcionamentoPessoas();
    acessar.direcionamentoNoticias();               
       
  });
  
  it('Direcionamento Team Culture', ()=>{
    acessar.direcionamentoPessoas();
    acessar.direcionamentoTeamCulture();             
          
  });
 
  it('Direcionamento Políticas', ()=>{
   acessar.direcionamentoPessoas();
   acessar.direcionamentoPoliticas();             
             
  });

  it('Direcionamento Meu Perfil', ()=>{
    acessar.direcionamentoParaVoce();
    acessar.direcionamentoMeuPerfil();            
             
  });
   
 it('Direcionamento Ciclo de Gente', ()=>{
    acessar.direcionamentoParaVoce();
    acessar.direcionamentoCicloGente();        
             
  });

 it('Direcionamento Respeito', ()=>{
    acessar.direcionamentoParaVoce();
    acessar.direcionamentoRespeito();         
             
  });

  it('Direcionamento Benificios', ()=>{
    acessar.direcionamentoParaVoce();
    acessar.direcionamentoBeneficios();             
             
  });
 
  it('Direcionamento Carreira Start Tech', ()=>{
    acessar.direcionamentoParaVoce();
    acessar.direcionamentoCarreirasStartTech();

  });

  it('Direcionamento Gente 360', ()=>{
    acessar.direcionamentoBemEstar();
    acessar.direcionamentoGente360();
             
  });
 
  it('Direcionamento Self Friday', ()=>{
    acessar.direcionamentoBemEstar();
    acessar.direcionamentoSelfFriday();            
             
  });
   
  it('Direcionamento ZenKlub', ()=>{
    acessar.direcionamentoBemEstar();
    acessar.direcionamentoZenKlub();            
             
  });
 
  it('Direcionamento Caliandra', ()=>{
    acessar.direcionamentoBemEstar();
    acessar.direcionamentoCaliandra();
    
  });
 
 it('Direcionamento Gympass', ()=>{
    acessar.direcionamentoBemEstar();
    acessar.direcionamentoGympass();
               
  });
 
  it('Direcionamento AmbevOn Tech', ()=>{
    acessar.direcionamentoEstudos();
    acessar.direcionamentoAmbevOnTech();          
             
  });

  it('Direcionamento AmbevON', ()=>{
    acessar.direcionamentoEstudos();
    acessar.direcionamentoAmbevOn();
                
  }); 
       
 it('Direcionamento Wiki Ambev Tech', ()=>{
    acessar.direcionamentoEstudos();
    acessar.direcionamentoWiki();             
             
  });

 it('Direcionamento Cyber Security', ()=>{
    acessar.direcionamentoSuporte();
    acessar.direcionamentoCyberSecurity();             
             
  });
 
  it('Direcionamento TechOps', ()=>{
    acessar.direcionamentoSuporte();
    acessar.direcionamentoTechOps();             
                
  });
    
  it('Direcionamento Templates e Padrões', ()=>{
    acessar.direcionamentoSuporte();
    acessar.direcionamentoTemplates();             
                
  });
    
  it('Direcionamento Agiliza', ()=>{
    acessar.direcionamentoSuporte();
    acessar.direcionamentoAgiliza();             
               
  });
                              
  it('Direcionamento Click', ()=>{
    acessar.direcionamentoContatos();
    acessar.direcionamentoClick();
                 
  });

  it('Direcionamento Ouvidoria', ()=>{
    acessar.direcionamentoContatos();
    acessar.direcionamentoOuvidoria();
              
  });
 
  it('Direcionamento NPS', ()=>{
    acessar.direcionamentoIndicadores();
    acessar.direcionamentoNps();

  });
    
 it('Direcionamento Diversidade & Inclusão', ()=>{
    acessar.direcionamentoDeI();
    acessar.direcionamentoComiteDeAutTech();
                 
  });

 it('Direcionamento Self Learning', ()=>{
    acessar.direcionamentoEstudos();
    acessar.direcionamentoSelfLearning();
       
  });  

});

    


