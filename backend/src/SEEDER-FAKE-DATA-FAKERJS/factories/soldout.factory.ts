import { faker } from '@faker-js/faker';
import { Soldout } from '../../soldouts/entities/soldout.entity';
import { DataSource } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Product } from '../../products/entities/product.entity';
import { Order } from 'src/orders/entities/order.entity';

export const createSoldout = (
    userId: number, 
    productId: number, 
    orderId: number
): Partial<Soldout> => ({
    user_id: userId,
    product_id: productId,
    order_id: orderId,
    is_sold: faker.datatype.boolean({ probability: 0.8 }),
    notes: faker.helpers.maybe(() => faker.lorem.sentence(), { probability: 0.6 })
});


class SoldoutFactory {
  constructor(private dataSource: DataSource) {}

  async create(user: User, product: Product, order: Order): Promise<Partial<Soldout>> {

    return {
      user_id: user.id,
      product_id: product.id,
      order_id: order.id,
      is_sold: faker.datatype.boolean({ probability: 0.8 }),
      notes: faker.helpers.maybe(() => faker.lorem.sentence(), { probability: 0.6 })
    };
  }

  async createMany(count: number, users: User[], products: Product[], orders: Order[]): Promise<Partial<Soldout>[]> {
    const soldouts: Partial<Soldout>[] = [];
    const usedCombinations = new Set<string>();

    for (let i = 0; i < count; i++) {
      let user, product, order;
      let combination;

      do {
        user = users[i % users.length];
        product = products[i % products.length];
        order = orders[i % orders.length];
        combination = `${user.id}-${product.id}-${order.id}`;
      } while (usedCombinations.has(combination));

      usedCombinations.add(combination);
      soldouts.push(await this.create(user, product, order));
    }
    return soldouts;
  }
}

export { SoldoutFactory };