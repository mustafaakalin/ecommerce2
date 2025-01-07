import { faker } from '@faker-js/faker';
import { Brand } from '../../brands/entities/brand.entity';

class BrandFactory {
    constructor(private dataSource: any) {}
  
    create(): Partial<Brand> {
      return {
        name: faker.company.name(),
        slug: faker.helpers.slugify(faker.company.name().toLowerCase()),
        logo: faker.image.url(),
        description: faker.company.catchPhrase(),
        isActive: faker.datatype.boolean({ probability: 0.9 }),
      };
    }
  
    async createMany(count: number): Promise<Partial<Brand>[]> {
      const brands: Partial<Brand>[] = [];
      for (let i = 0; i < count; i++) {
        brands.push(this.create());
      }
      return brands;
    }
  }
  
  export { BrandFactory };