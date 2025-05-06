import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

export const generateMockPets = (count) => {
    const pets = [];
    for (let i = 0; i < count; i++) {
        pets.push({
            name: faker.animal.cat(),
            specie: faker.animal.type(),
            birthDate: faker.date.past(),
            adopted: faker.datatype.boolean()
        });
    }
    return pets;
};
