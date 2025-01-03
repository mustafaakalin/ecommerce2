import { faker } from '@faker-js/faker';
import { Brand } from '../../brands/entities/brand.entity';

export const createBrand = (): Partial<Brand> => ({
    name: faker.company.name(),
    slug: faker.helpers.slugify(faker.company.name().toLowerCase()),
    logo: faker.image.url(),
    description: faker.company.catchPhrase(),
    isActive: faker.datatype.boolean({ probability: 0.9 }),
});