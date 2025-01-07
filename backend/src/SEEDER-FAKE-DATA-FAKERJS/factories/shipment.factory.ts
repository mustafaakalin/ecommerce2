import { faker } from '@faker-js/faker';
import {
  Shipment,
  CarrierType,
  ShipmentStatus,
} from '../../shipments/entities/shipment.entity';
import { DataSource } from 'typeorm';
import { Cart } from '../../carts/entities/cart.entity';

class ShipmentFactory {
  constructor(private dataSource: DataSource) {}

  async create(): Promise<Partial<Shipment>> {
    return {
      tracking_number: faker.string.alphanumeric(16).toUpperCase(),
      carrier: faker.helpers.arrayElement(Object.values(CarrierType)),
      status: faker.helpers.arrayElement(Object.values(ShipmentStatus)),
    };
  }

  async createMany(count: number): Promise<Partial<Shipment>[]> {
    const shipments: Partial<Shipment>[] = [];
    for (let i = 0; i < count; i++) {
      shipments.push(await this.create());
    }
    return shipments;
  }
}
export { ShipmentFactory };
