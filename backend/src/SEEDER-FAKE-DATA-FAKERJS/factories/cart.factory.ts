import { faker } from '@faker-js/faker';
import { Cart } from '../../carts/entities/cart.entity';

class CartFactory {
    constructor(private userId: number, private productId: number) {}
  
    create(): Partial<Cart> {
      return {
        user_id: this.userId,
        product_id: this.productId,
        quantity: faker.number.int({ min: 1, max: 10 }),
      };
    }
  
    async createMany(count: number): Promise<Partial<Cart>[]> {
      const carts: Partial<Cart>[] = [];
      for (let i = 0; i < count; i++) {
        carts.push(this.create());
      }
      return carts;
    }
  }
  
  export { CartFactory };