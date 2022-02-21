/// <reference types="cypress" />
var cpf = require('gerador-validador-cpf')
import faker from "@faker-js/faker";
faker.locale = 'pt_BR';

var firstName = faker.name.firstName()
var lastName = faker.name.lastName()

var cp = cpf.generate()

context('Required Fields', function () {
    const messages = [
        { field: 'name', output: "É necessário informar o nome" },
        { field: 'cpf', output: "É necessário informar o CPF" },
        { field: 'email', output: "É necessário informar o email" },
        { field: 'postalCode', output: "É necessário informar o CEP" },
        { field: 'number_address', output: "É necessário informar o número do endereço" },
        { field: 'deliver_method', output: "Selecione o método de entrega" },
        { field: 'cnh', output: "Adicione uma foto da sua CNH" }
    ]
    before(function() {
        signup.go()
        signup.submit()
    })

    messages.forEach(function(msg) {
       it(`${msg.field} is required`, function(){
        signup.alertMessageShouldBe(msg.output) 
       }) 
    })
})