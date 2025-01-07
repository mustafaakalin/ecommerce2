import { faker } from '@faker-js/faker';
import { DataSource } from 'typeorm';
import { Rating } from '../../ratings/entities/rating.entity';
import { User } from '../../users/entities/user.entity';
import { Product } from '../../products/entities/product.entity';

class RatingFactory {
  constructor(private dataSource: DataSource) {}

  async create(user: User, product: Product): Promise<Partial<Rating>> {

    return {
      user_id: user.id,
      product_id: product.id,
      rating: faker.number.float({ 
        min: 0, 
        max: 5, 
        fractionDigits: 1 
      })
    };
  }

  async createMany(count: number, users: User[], products: Product[]): Promise<Partial<Rating>[]> {
    const ratings: Partial<Rating>[] = [];
    const usedCombinations = new Set<string>();
    for (let i = 0; i < count; i++) {
      let user, product;
      let combination;
      do {
        user = users[i % users.length];
        product = products[i % products.length];
        combination = `${user.id}-${product.id}`;
      } while (usedCombinations.has(combination));

      usedCombinations.add(combination);
      ratings.push(await this.create(user, product));
    }
    return ratings;
  }
}

export { RatingFactory };