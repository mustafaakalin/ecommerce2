import { faker } from '@faker-js/faker';
import { User, Gender, Type } from '../../users/entities/user.entity';

export const createUser = (): Partial<User> => ({
  name: faker.person.firstName(),
  surname: faker.person.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  dob: faker.date.past(),
  gender: faker.helpers.arrayElement(Object.values(Gender)),
  avatar: faker.image.avatar(),
  instagram: faker.internet.userName(),
  facebook: faker.internet.userName(),
  tiktok: faker.internet.userName(),
  x: faker.internet.userName(),
  github: faker.internet.userName(),
  linkedin: faker.internet.userName(),
  nin: faker.string.numeric(11),
  phone: faker.phone.number(),
  type: Type.USER
});