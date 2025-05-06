import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

export const generateMockUsers = (count) => {
    const users = [];
    for (let i = 0; i < count; i++) {
        const hashedPassword = bcrypt.hashSync('coder123', 10);
        users.push({
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            password: hashedPassword,
            role: Math.random() < 0.5 ? 'user' : 'admin',
            pets: []
        });
    }
    return users;
};

export const generateMockPets = (count) => {
    const pets = [];
    for (let i = 0; i < count; i++) {
        pets.push({
            name: faker.animal.cat(), // O faker.animal.dog(), si querés variar
            specie: faker.animal.type(),
            birthDate: faker.date.past(),
            adopted: faker.datatype.boolean()
        });
    }
    return pets;
};