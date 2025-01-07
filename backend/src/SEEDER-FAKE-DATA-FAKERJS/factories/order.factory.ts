import { faker } from '@faker-js/faker';
import { Order, OrderStatus } from '../../orders/entities/order.entity';

class OrderFactory {
    constructor(private userId: number, private shipmentId: number, private addressId: number) {}
  
    create(): Partial<Order> {
      return {
        user_id: this.userId,
        shipment_id: this.shipmentId,
        address_id: this.addressId,
        status: faker.helpers.arrayElement(Object.values(OrderStatus)),
      };
    }
  
    async createMany(count: number): Promise<Partial<Order>[]> {
      const orders: Partial<Order>[] = [];
      for (let i = 0; i < count; i++) {
        orders.push(this.create());
      }
      return orders;
    }
  }
  
  export { OrderFactory };