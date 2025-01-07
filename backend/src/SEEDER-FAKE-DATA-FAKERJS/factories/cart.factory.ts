import { faker } from '@faker-js/faker';
import { DataSource } from 'typeorm';
import { Cart } from '../../carts/entities/cart.entity';
import { User } from '../../users/entities/user.entity';
import { Product } from '../../products/entities/product.entity';

class CartFactory {
  constructor(private dataSource: DataSource) {}

  async create(user: User, product: Product): Promise<Partial<Cart>> {
    return {
      user_id: user.id,
      product_id: product.id,
      quantity: faker.number.int({ min: 1, max: product.stock }),
    };
  }

  async createMany(count: number, users: User[], products: Product[]): Promise<Partial<Cart>[]> {
    const carts: Partial<Cart>[] = [];
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
      carts.push(await this.create(user, product));
    }
    return carts;

  }
}

export { CartFactory };