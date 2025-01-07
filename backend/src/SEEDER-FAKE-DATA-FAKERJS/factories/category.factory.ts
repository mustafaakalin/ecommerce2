import { faker } from '@faker-js/faker';
import { DataSource } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';


class CategoryFactory {
  constructor(dataSource: DataSource) {}

  create(): Partial<Category> {
    return {
      name: faker.commerce.department(),
      parent_id: null,
      slug: faker.helpers.slugify(faker.commerce.department().toLowerCase()),
      icon: faker.image.url(),
      description: faker.commerce.productDescription().substring(0, 500),
      is_active: faker.datatype.boolean({ probability: 0.9 }),
    };
  }

  async createMany(count: number): Promise<Partial<Category>[]> {
    const categories: Partial<Category>[] = [];
    for (let i = 0; i < count; i++) {
      categories.push(this.create());
    }
    return categories;
  }
}

export { CategoryFactory };