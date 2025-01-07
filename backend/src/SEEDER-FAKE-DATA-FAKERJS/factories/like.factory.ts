import { faker } from '@faker-js/faker';
import { DataSource } from 'typeorm';
import { Like } from '../../likes/entities/like.entity';
import { User } from '../../users/entities/user.entity';
import { Product } from '../../products/entities/product.entity';

class LikeFactory {
  constructor(private dataSource: DataSource) {}

  async create(user: User, product: Product): Promise<Partial<Like>> {

    return {
      user_id: user.id,
      product_id: product.id
    };
  }

  async createMany(count: number, users: User[], products: Product[]): Promise<Partial<Like>[]> {
    const likes: Partial<Like>[] = [];
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
      likes.push(await this.create(user, product));
    }
    return likes;
  }
}

export { LikeFactory };