import { faker } from '@faker-js/faker';
import { Order, OrderStatus } from '../../orders/entities/order.entity';

export const createOrder = (
    userId: number, 
    shipmentId: number, 
    addressId: number
): Partial<Order> => ({
    user_id: userId,
    shipment_id: shipmentId,
    address_id: addressId,
    status: faker.helpers.arrayElement(Object.values(OrderStatus)),
});