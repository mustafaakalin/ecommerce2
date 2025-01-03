import { faker } from '@faker-js/faker';
import { Soldout } from '../../soldouts/entities/soldout.entity';

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