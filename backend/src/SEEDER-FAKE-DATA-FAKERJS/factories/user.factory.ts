import { faker } from '@faker-js/faker';
import { DataSource } from 'typeorm';
import { User, Gender, Type } from '../../users/entities/user.entity';


export const UserFactory = (dataSource: DataSource) => ({
  createOne: (): Partial<User> => ({
    name: faker.person.firstName(),
    surname: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    dob: faker.date.past(),
    gender: faker.helpers.arrayElement(Object.values(Gender)),
    avatar: faker.image.avatar(),
    instagram: faker.internet.username(),
    facebook: faker.internet.username(),
    tiktok: faker.internet.username(),
    x: faker.internet.username(),
    github: faker.internet.username(),
    linkedin: faker.internet.username(),
    nin: faker.string.numeric(11),
    phone: faker.phone.number(),
    type: Type.USER
  }),

  createMany: async (count: number): Promise<Partial<User>[]> => {
    return Array.from({ length: count }, () => ({
      name: faker.person.firstName(),
      surname: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      dob: faker.date.past(),
      gender: faker.helpers.arrayElement(Object.values(Gender)),
      avatar: faker.image.avatar(),
      instagram: faker.internet.username(),
      facebook: faker.internet.username(),
      tiktok: faker.internet.username(),
      x: faker.internet.username(),
      github: faker.internet.username(),
      linkedin: faker.internet.username(),
      nin: faker.string.numeric(11),
      phone: faker.phone.number(),
      type: Type.USER
    }))
  }
});

export default UserFactory;