import { faker } from '@faker-js/faker';
import { Address } from '../../addresses/entities/address.entity';
import { DataSource } from 'typeorm';
import { Cart } from '../../carts/entities/cart.entity';
import { User } from '../../users/entities/user.entity';


class AddressFactory {
  constructor(private dataSource: DataSource) {}

  async create(user: User): Promise<Partial<Address>> {
    return {
        userId: user.id,
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
      };
    }

  async createMany(count: number, users: User[]): Promise<Partial<Address>[]> {
    const addresses: Partial<Address>[] = [];
    const usedCombinations = new Set<string>();



    for (let i = 0; i < count; i++) {
      let user;
      let combination;

      do {
        user = users[i % users.length];
        combination = `${user.id}`;
      } while (usedCombinations.has(combination));

      usedCombinations.add(combination);
      addresses.push(await this.create(user));
    }
    return addresses;

  }
}

export { AddressFactory };
