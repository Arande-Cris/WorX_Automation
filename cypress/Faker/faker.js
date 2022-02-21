import faker from "@faker-js/faker"

faker.locale = 'pt_BR';

for (let index = 0; index < 10; index++){
    const name = faker.name.findName();
    const birth = faker.date.past(30, 2000)

    client= {
        name, 
        birth,
    }

    clients.push(client);

}

console.log(clients);