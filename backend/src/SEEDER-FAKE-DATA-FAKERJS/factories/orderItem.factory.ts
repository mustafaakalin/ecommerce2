import { faker } from '@faker-js/faker';
import { OrderItem } from '../../order_items/entities/order_item.entity';
import { DataSource } from 'typeorm';
import { Order, OrderStatus } from '../../orders/entities/order.entity';
import { User } from '../../users/entities/user.entity';
import { Shipment } from '../../shipments/entities/shipment.entity';
import { Address } from '../../addresses/entities/address.entity';
import { Product } from '../../products/entities/product.entity';



class OrderItemFactory {
    constructor(private dataSource: DataSource) {}

    async create(order: Order, product: Product): Promise<Partial<OrderItem>> {
        return {
            order_id: order.id,
            product_id: product.id,
            quantity: faker.number.int({ min: 1, max: product.stock }),
        };
    }

    async createMany(count: number, orders: Order[], products: Product[]): Promise<Partial<OrderItem>[]> {
        const orderItems: Partial<OrderItem>[] = [];
        const usedCombinations = new Set<string>();

        for (let i = 0; i < count; i++) {
      let order, product;
      let combination;

      do {
        order = orders[i % orders.length];
        product = products[i % products.length];
        combination = `${order.id}-${product.id}`;
      } while (usedCombinations.has(combination));

      usedCombinations.add(combination);
      orderItems.push(await this.create(order, product));
    }
    return orderItems;
    }
}

export { OrderItemFactory };