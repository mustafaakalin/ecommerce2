import { faker } from '@faker-js/faker';
import { Category } from '../../categories/entities/category.entity';

export const createCategory = (parentId?: number): Partial<Category> => ({
  name: faker.commerce.department(),
  parent_id: parentId || null,
  slug: faker.helpers.slugify(faker.commerce.department().toLowerCase()),
  icon: faker.image.url(),
  description: faker.commerce.productDescription().substring(0, 500),
  is_active: faker.datatype.boolean({ probability: 0.9 }),
});