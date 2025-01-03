import { faker } from '@faker-js/faker';
import { Address } from '../../addresses/entities/address.entity';

export const createAddress = (userId: number): Partial<Address> => ({
    userId: userId,
    title: faker.helpers.arrayElement(['Home', 'Work', 'Other']),
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    phone: faker.phone.number(),
    address: `${faker.location.streetAddress()} ${faker.location.secondaryAddress()}`,
    city: faker.location.city(),
    state: faker.location.state(),
    country: faker.location.country(),
    zip: faker.location.zipCode(),
    isDefault: faker.helpers.arrayElement([true, false]),
});