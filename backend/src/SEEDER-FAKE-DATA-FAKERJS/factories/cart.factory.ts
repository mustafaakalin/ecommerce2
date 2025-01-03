import { faker } from '@faker-js/faker';
import { Cart } from '../../carts/entities/cart.entity';

export const createCart = (userId: number, productId: number): Partial<Cart> => ({
    user_id: userId,
    product_id: productId,
    quantity: faker.number.int({ min: 1, max: 10 }),
});