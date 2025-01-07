import { faker } from '@faker-js/faker';
import { Product, DiscountType } from '../../products/entities/product.entity';
import { DataSource } from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { Brand } from 'src/brands/entities/brand.entity';
import { Campaign } from 'src/campaigns/entities/campaign.entity';

class ProductFactory {
    constructor(private dataSource: DataSource) {}
  
    async create(category: Category, brand: Brand, campaign: Campaign): Promise<Partial<Product>> {
      const name = faker.commerce.productName();
      const price = parseFloat(faker.commerce.price({ min: 10, max: 1000 }));
  
      return {
        name,
        slug: faker.helpers.slugify(name.toLowerCase()),
        description: faker.commerce.productDescription(),
        price,
        stock: faker.number.int({ min: 0, max: 1000 }),
        category_id: category.id,
        brand_id: brand.id,
        campaign_id: campaign.id || null,
        images: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => faker.image.url()),
        tags: Array.from({ length: faker.number.int({ min: 2, max: 6 }) }, () => faker.commerce.productAdjective()),
        is_active: faker.datatype.boolean({ probability: 0.9 }),
        is_featured: faker.datatype.boolean({ probability: 0.2 }),
        is_free_shipping: faker.datatype.boolean({ probability: 0.3 }),
        is_fast_delivery: faker.datatype.boolean({ probability: 0.4 }),
        is_second_hand: faker.datatype.boolean({ probability: 0.1 }),
        is_digital: faker.datatype.boolean({ probability: 0.15 }),
        discount_type: faker.helpers.maybe(() => faker.helpers.arrayElement(Object.values(DiscountType)), { probability: 0.3 }),
        discount_value: faker.helpers.maybe(() => faker.number.float({ min: 5, max: price * 0.5, fractionDigits: 2 })),
        rating: faker.number.float({ min: 0, max: 5, fractionDigits: 1 }),
        meta_title: faker.helpers.maybe(() => faker.commerce.productName()),
        meta_description: faker.helpers.maybe(() => faker.commerce.productDescription()),
        meta_keywords: faker.helpers.maybe(() => Array.from({ length: 5 }, () => faker.commerce.productAdjective()).join(', ')),
        search_keywords: faker.helpers.maybe(() => Array.from({ length: 3 }, () => faker.commerce.productName()).join(', ')),
        specifications: {
          color: faker.color.human(),
          material: faker.commerce.productMaterial(),
          weight: faker.number.float({ min: 0.1, max: 10, fractionDigits: 1 }) + ' kg',
          dimensions: `${faker.number.int({ min: 5, max: 50 })}x${faker.number.int({ min: 5, max: 50 })}x${faker.number.int({ min: 5, max: 50 })} cm`
        },
        vat: faker.helpers.arrayElement([0, 1, 8, 18]),
        view_count: faker.number.int({ min: 0, max: 10000 }),
        sku: faker.string.numeric(13)
      };
    }
  
    async createMany(count: number, categories: Category[], brands: Brand[], campaigns: Campaign[]): Promise<Partial<Product>[]> {
      const products: Partial<Product>[] = [];
      const usedCombinations = new Set<string>();
      for (let i = 0; i < count; i++) {
        let category, brand, campaign;
        let combination;

        do {
          category = categories[i % categories.length];
          brand = brands[i % brands.length];
          campaign = campaigns[i % campaigns.length];
          combination = `${category.id}-${brand.id}-${campaign.id}`;
        } while (usedCombinations.has(combination));
  
        usedCombinations.add(combination);
        products.push(await this.create(category, brand, campaign));
      }
      return products;
    }
  }
  
  export { ProductFactory };