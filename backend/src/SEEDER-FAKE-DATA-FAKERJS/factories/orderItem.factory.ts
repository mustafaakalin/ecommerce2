import { faker } from '@faker-js/faker';
import { OrderItem } from '../../order_items/entities/order_item.entity';

export const createOrderItem = (orderId: number, productId: number): Partial<OrderItem> => ({
    order_id: orderId,
    product_id: productId,
    quantity: faker.number.int({ min: 1, max: 5 })
});