import { faker } from '@faker-js/faker';
import { DataSource } from 'typeorm';
import { Order, OrderStatus } from '../../orders/entities/order.entity';
import { User } from '../../users/entities/user.entity';
import { Shipment } from '../../shipments/entities/shipment.entity';
import { Address } from '../../addresses/entities/address.entity';

class OrderFactory {
  constructor(private dataSource: DataSource) {}

  async create(user: User, shipment: Shipment, address: Address): Promise<Partial<Order>> {

    return {
      user_id: user.id,
      shipment_id: shipment.id,
      address_id: address.id,
      status: faker.helpers.arrayElement(Object.values(OrderStatus)),
    };
  }

  async createMany(count: number, users: User[], shipments: Shipment[], addresses: Address[]): Promise<Partial<Order>[]> {
    const orders: Partial<Order>[] = [];
    const usedCombinations = new Set<string>();

    for (let i = 0; i < count; i++) {
      let user, shipment, address;
      let combination;

      do {
        user = users[i % users.length];
        shipment = shipments[i % shipments.length];
        address = addresses[i % addresses.length];
        combination = `${user.id}-${shipment.id}-${address.id}`;
      } while (usedCombinations.has(combination));

      usedCombinations.add(combination);
      orders.push(await this.create(user, shipment, address));
    }
    return orders;
  }
}

export { OrderFactory };