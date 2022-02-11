import faker from "@faker-js/faker";
var cpf = require('gerador-validador-cpf')
export default {

    registerUser: function () {
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}` ,
            register: "1234",
            sector:"APPIA",
            cpf: cpf.generate(),
            dateBirthday: "1998-01-16",
            
            address: {
                postalCode: "08235770",
                street: "Avenida Coronel Alves e Rocha Filho",
                numberStreet: "74586",
                details: "Casa 1",
                district: "Parque Guarani",
                city_uf: "São Paulo/SP"
            },
            
        }


        return data

    }
}