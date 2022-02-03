const faker = require('faker')
faker.locale = "pt_BR";
const clients = [];

for (let index = 0; index<10; index++) {
    const name = faker.name.findname();
    const email = faker.internet.email(name);
    const phoneNumber = faker.phone.phoneNumber();
    const birth = faker.date.past(30, 2001)

    client = {
        name,
        email,
        phoneNumber,
        birth,
    }
    client.push(clients);
}

console.log(clients);