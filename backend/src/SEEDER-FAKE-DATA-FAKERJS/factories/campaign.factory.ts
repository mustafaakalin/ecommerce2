import { faker } from '@faker-js/faker';
import { Campaign, DiscountType } from '../../campaigns/entities/campaign.entity';

class CampaignFactory {
    create(): Partial<Campaign> {
      const name = faker.commerce.productAdjective() + ' ' + faker.word.adjective() + ' Campaign';
      const startDate = faker.date.future();
  
      return {
        name,
        slug: faker.helpers.slugify(name.toLowerCase()),
        description: faker.lorem.paragraph(),
        discount_type: faker.helpers.arrayElement(Object.values(DiscountType)),
        discount_value: faker.helpers.arrayElement([
          faker.number.float({ min: 5, max: 50, fractionDigits: 2 }), // For percentage
          faker.number.float({ min: 10, max: 1000, fractionDigits: 2 }) // For fixed amount
        ]),
        start_date: startDate,
        end_date: faker.date.between({ from: startDate, to: faker.date.future({ years: 1 }) }),
        is_active: faker.datatype.boolean({ probability: 0.8 })
      };
    }
  
    async createMany(count: number): Promise<Partial<Campaign>[]> {
      const campaigns: Partial<Campaign>[] = [];
      for (let i = 0; i < count; i++) {
        campaigns.push(this.create());
      }
      return campaigns;
    }
  }
  
  export { CampaignFactory };