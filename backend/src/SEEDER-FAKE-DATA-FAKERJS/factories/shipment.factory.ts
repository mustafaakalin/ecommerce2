import { faker } from '@faker-js/faker';
import { Shipment, CarrierType, ShipmentStatus } from '../../shipments/entities/shipment.entity';

export const createShipment = (orderId: number): Partial<Shipment> => ({
    order_id: orderId,
    tracking_number: faker.string.alphanumeric(16).toUpperCase(),
    carrier: faker.helpers.arrayElement(Object.values(CarrierType)),
    status: faker.helpers.arrayElement(Object.values(ShipmentStatus))
});