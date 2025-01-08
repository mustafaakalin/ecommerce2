import { DataSource } from 'typeorm';

import { User } from '../users/entities/user.entity';
import { Address } from '../addresses/entities/address.entity';
import { Shipment } from '../shipments/entities/shipment.entity';
import { Category } from '../categories/entities/category.entity';
import { Brand } from '../brands/entities/brand.entity';
import { Campaign } from '../campaigns/entities/campaign.entity';
import { Product } from '../products/entities/product.entity';
import { Order } from '../orders/entities/order.entity';

import { UserFactory } from './factories/user.factory';
import { AddressFactory } from './factories/address.factory';
import { CategoryFactory } from './factories/category.factory';
import { BrandFactory } from './factories/brand.factory';
import { ProductFactory } from './factories/product.factory';
import { CommentFactory } from './factories/comment.factory';
import { RatingFactory } from './factories/rating.factory';
import { LikeFactory } from './factories/like.factory';
import { CartFactory } from './factories/cart.factory';
import { ShipmentFactory } from './factories/shipment.factory';
import { OrderFactory } from './factories/order.factory';
import { OrderItemFactory } from './factories/orderItem.factory';
import { SettingFactory } from './factories/setting.factory';
import { FaqFactory } from './factories/faq.factory';
import { TestimonialFactory } from './factories/testimonial.factory';
import { ContactFactory } from './factories/contact.factory';
import { CampaignFactory } from './factories/campaign.factory';
import { CouponFactory } from './factories/coupon.factory';
import { SoldoutFactory } from './factories/soldout.factory';

export class DatabaseSeeder {
  constructor(private dataSource: DataSource) {}

  // işlemleri paralel hale getirebilirsiniz:
  // async run() {
  //   try {
  //     await Promise.all([
  //       this.seedUsers(20),
  //       this.seedAddresses(40),
  //       this.seedCategories(10),
  //       this.seedBrands(15),
  //       this.seedCampaigns(5),
  //       this.seedProducts(100),
  //       this.seedComments(50),
  //       this.seedRatings(100),
  //       this.seedLikes(80),
  //       this.seedCarts(30),
  //       this.seedShipments(25),
  //       this.seedOrders(25),
  //       this.seedOrderItems(25),
  //       this.seedSoldouts(25),
  //       this.seedSettings(1),
  //       this.seedFaqs(10),
  //       this.seedTestimonials(8),
  //       this.seedContacts(10),
  //       this.seedCoupons(10),
  //     ]);
  //   } catch (error) {
  //     console.error('Seeding failed:', error);
  //     throw error;
  //   }
  // }

  async run() {
    try {
      // Seed in correct order - dependencies first
      await this.seedUsers(10);
      await this.seedAddresses(10);
      await this.seedCategories(10);
      await this.seedBrands(10);
      await this.seedCampaigns(5);
      await this.seedProducts(10);
      await this.seedComments(10);
      await this.seedRatings(10);
      await this.seedLikes(10);
      await this.seedCarts(10);
      await this.seedShipments(10);
      await this.seedOrders(10);
      await this.seedOrderItems(10);
      await this.seedSoldouts(5);
      await this.seedSettings(1);
      await this.seedFaqs(10);
      await this.seedTestimonials(8);
      await this.seedContacts(10);
      await this.seedCoupons(10);
      // ...other seeding
    } catch (error) {
      console.error('Seeding failed:', error);
      throw error;
    }
  }

  // private async functions for seeding
  private async seedUsers(count: number): Promise<void> {
    try {
      const userFactory = UserFactory(this.dataSource);
      const users = await userFactory.createMany(count);
      await this.dataSource.getRepository('User').save(users);
      console.log(`✅ Created ${count} users`);
    } catch (error) {
      console.error('❌ Error seeding users:', error);
      throw new Error(`Failed to seed users: ${error.message}`);
    }
  }

  private async seedCategories(count: number): Promise<void> {
    try {
      const categoryFactory = new CategoryFactory(this.dataSource);
      const categories = await categoryFactory.createMany(count);
      await this.dataSource.getRepository('Category').save(categories);
      console.log(`✅ Created ${count} categories`);
    } catch (error) {
      console.error('❌ Error seeding categories:', error);
      throw new Error(`Failed to seed categories: ${error.message}`);
    }
  }

  private async seedBrands(count: number): Promise<void> {
    try {
      const brandFactory = new BrandFactory(this.dataSource);
      const brands = await brandFactory.createMany(count);
      await this.dataSource.getRepository('Brand').save(brands);
      console.log(`✅ Created ${count} brands`);
    } catch (error) {
      console.error('❌ Error seeding brands:', error);
      throw new Error(`Failed to seed brands: ${error.message}`);
    }
  }

  private async seedCampaigns(count: number): Promise<void> {
    try {
      const campaignFactory = new CampaignFactory();
      const campaigns = await campaignFactory.createMany(count);
      await this.dataSource.getRepository('Campaign').save(campaigns);
      console.log(`✅ Created ${count} campaigns`);
    } catch (error) {
      console.error('❌ Error seeding campaigns:', error);
      throw new Error(`Failed to seed campaigns: ${error.message}`);
    }
  }

  private async seedProducts(count: number): Promise<void> {
    try {
      const productFactory = new ProductFactory(this.dataSource);
      const categoryRepository = this.dataSource.getRepository(Category);
      const brandRepository = this.dataSource.getRepository(Brand);
      const campaignRepository = this.dataSource.getRepository(Campaign);
      const categories = await categoryRepository.find();
      const brands = await brandRepository.find();
      const campaigns = await campaignRepository.find();
      if (
        categories.length === 0 ||
        brands.length === 0 ||
        campaigns.length === 0
      ) {
        throw new Error('Categories, Brands, or Campaigns not found');
      }
      const products = await productFactory.createMany(
        count,
        categories,
        brands,
        campaigns,
      );
      await this.dataSource.getRepository('Product').save(products);
      console.log(`✅ Created ${count} products`);
    } catch (error) {
      console.error('❌ Error seeding products:', error);
      throw new Error(`Failed to seed products: ${error.message}`);
    }
  }

  private async seedComments(count: number): Promise<void> {
    try {
      const commentFactory = new CommentFactory(this.dataSource);
      const userRepository = this.dataSource.getRepository(User);
      const productRepository = this.dataSource.getRepository(Product);
      const users = await userRepository.find();
      const products = await productRepository.find();
      const comments = await commentFactory.createMany(count, users, products);
      await this.dataSource.getRepository('Comment').save(comments);
      console.log(`✅ Created ${count} comments`);
    } catch (error) {
      console.error('❌ Error seeding comments:', error);
      throw new Error(`Failed to seed comments: ${error.message}`);
    }
  }

  private async seedRatings(count: number): Promise<void> {
    try {
      const ratingFactory = new RatingFactory(this.dataSource);
      const userRepository = this.dataSource.getRepository(User);
      const productRepository = this.dataSource.getRepository(Product);
      const users = await userRepository.find();
      const products = await productRepository.find();
      const ratings = await ratingFactory.createMany(count, users, products);
      await this.dataSource.getRepository('Rating').save(ratings);
      console.log(`✅ Created ${count} ratings`);
    } catch (error) {
      console.error('❌ Error seeding ratings:', error);
      throw new Error(`Failed to seed ratings: ${error.message}`);
    }
  }

  private async seedLikes(count: number): Promise<void> {
    try {
      const likeFactory = new LikeFactory(this.dataSource);
      const userRepository = this.dataSource.getRepository(User);
      const productRepository = this.dataSource.getRepository(Product);
      const users = await userRepository.find();
      const products = await productRepository.find();
      const likes = await likeFactory.createMany(count, users, products);
      await this.dataSource.getRepository('Like').save(likes);
      console.log(`✅ Created ${count} likes`);
    } catch (error) {
      console.error('❌ Error seeding likes:', error);
      throw new Error(`Failed to seed likes: ${error.message}`);
    }
  }

  private async seedCarts(count: number): Promise<void> {
    try {
      const cartFactory = new CartFactory(this.dataSource);
      const userRepository = this.dataSource.getRepository(User);
      const productRepository = this.dataSource.getRepository(Product);
      const users = await userRepository.find();
      const products = await productRepository.find();
      const carts = await cartFactory.createMany(count, users, products);
      await this.dataSource.getRepository('Cart').save(carts);
      console.log(`✅ Created ${count} carts`);
    } catch (error) {
      console.error('❌ Error seeding carts:', error);
      throw new Error(`Failed to seed carts: ${error.message}`);
    }
  }

  private async seedShipments(count: number): Promise<void> {
    try {
      const shipmentFactory = new ShipmentFactory(this.dataSource);
      const shipments = await shipmentFactory.createMany(count);
      await this.dataSource.getRepository('Shipment').save(shipments);
      console.log(`✅ Created ${count} shipments`);
    } catch (error) {
      console.error('❌ Error seeding shipments:', error);
      throw new Error(`Failed to seed shipments: ${error.message}`);
    }
  }

  private async seedOrders(count: number): Promise<void> {
    try {
      const userRepository = this.dataSource.getRepository(User);
      const shipmentRepository = this.dataSource.getRepository(Shipment);
      const addressRepository = this.dataSource.getRepository(Address);

      const users = await userRepository.find();
      const shipments = await shipmentRepository.find();
      const addresses = await addressRepository.find();

      if (
        users.length === 0 ||
        shipments.length === 0 ||
        addresses.length === 0
      ) {
        throw new Error('Users, Shipments, or Addresses not found');
      }

      const orderFactory = new OrderFactory(this.dataSource);
      const orders = await orderFactory.createMany(
        count,
        users,
        shipments,
        addresses,
      );
      await this.dataSource.getRepository('Order').save(orders);
      console.log(`✅ Created ${count} orders`);
    } catch (error) {
      console.error('❌ Error seeding orders:', error);
      throw new Error(`Failed to seed orders: ${error.message}`);
    }
  }

  private async seedOrderItems(count: number): Promise<void> {
    try {
      const orderItemFactory = new OrderItemFactory(this.dataSource);
      const orderRepository = this.dataSource.getRepository(Order);
      const productRepository = this.dataSource.getRepository(Product);
      const orders = await orderRepository.find();
      const products = await productRepository.find();
      const orderItems = await orderItemFactory.createMany(
        count,
        orders,
        products,
      );
      await this.dataSource.getRepository('OrderItem').save(orderItems);
      console.log(`✅ Created ${count} order items`);
    } catch (error) {
      console.error('❌ Error seeding order items:', error);
      throw new Error(`Failed to seed order items: ${error.message}`);
    }
  }

  private async seedSettings(count: number): Promise<void> {
    try {
      const settingFactory = new SettingFactory();
      const settings = await settingFactory.createMany(count);
      await this.dataSource.getRepository('Setting').save(settings);
      console.log(`✅ Created ${count} settings`);
    } catch (error) {
      console.error('❌ Error seeding settings:', error);
      throw new Error(`Failed to seed settings: ${error.message}`);
    }
  }

  private async seedFaqs(count: number): Promise<void> {
    try {
      const faqFactory = new FaqFactory();
      const faqs = await faqFactory.createMany(count);
      await this.dataSource.getRepository('Faq').save(faqs);
      console.log(`✅ Created ${count} faqs`);
    } catch (error) {
      console.error('❌ Error seeding faqs:', error);
      throw new Error(`Failed to seed faqs: ${error.message}`);
    }
  }

  private async seedTestimonials(count: number): Promise<void> {
    try {
      const testimonialFactory = new TestimonialFactory();
      const testimonials = await testimonialFactory.createMany(count);
      await this.dataSource.getRepository('Testimonial').save(testimonials);
      console.log(`✅ Created ${count} testimonials`);
    } catch (error) {
      console.error('❌ Error seeding testimonials:', error);
      throw new Error(`Failed to seed testimonials: ${error.message}`);
    }
  }

  private async seedContacts(count: number): Promise<void> {
    try {
      const contactFactory = new ContactFactory();
      const contacts = await contactFactory.createMany(count);
      await this.dataSource.getRepository('Contact').save(contacts);
      console.log(`✅ Created ${count} contacts`);
    } catch (error) {
      console.error('❌ Error seeding contacts:', error);
      throw new Error(`Failed to seed contacts: ${error.message}`);
    }
  }

  private async seedCoupons(count: number): Promise<void> {
    try {
      const couponFactory = new CouponFactory();
      const coupons = await couponFactory.createMany(count);
      await this.dataSource.getRepository('Coupon').save(coupons);
      console.log(`✅ Created ${count} coupons`);
    } catch (error) {
      console.error('❌ Error seeding coupons:', error);
      throw new Error(`Failed to seed coupons: ${error.message}`);
    }
  }

  private async seedAddresses(count: number): Promise<void> {
    try {
      const addressFactory = new AddressFactory(this.dataSource);
      const userRepository = this.dataSource.getRepository(User);
      const users = await userRepository.find();
      const addresses = await addressFactory.createMany(count, users);
      await this.dataSource.getRepository('Address').save(addresses);
      console.log(`✅ Created ${count} addresses`);
    } catch (error) {
      console.error('❌ Error seeding addresses:', error);
      throw new Error(`Failed to seed addresses: ${error.message}`);
    }
  }

  private async seedSoldouts(count: number): Promise<void> {
    try {
      const soldoutFactory = new SoldoutFactory(this.dataSource);
      const userRepository = this.dataSource.getRepository(User);
      const productRepository = this.dataSource.getRepository(Product);
      const orderRepository = this.dataSource.getRepository(Order);
      const users = await userRepository.find();
      const products = await productRepository.find();
      const orders = await orderRepository.find();
      const soldouts = await soldoutFactory.createMany(count, users, products, orders);
      await this.dataSource.getRepository('Soldout').save(soldouts);
      console.log(`✅ Created ${count} soldouts`);
    } catch (error) {
      console.error('❌ Error seeding soldouts:', error);
      throw new Error(`Failed to seed soldouts: ${error.message}`);
    }
  }
}
