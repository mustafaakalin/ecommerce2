import { DataSource } from 'typeorm';

import { UserFactory } from './factories/user.factory';
import { CategoryFactory } from './factories/category.factory';
import { BrandFactory } from './factories/brand.factory';
import { ProductFactory } from './factories/product.factory';
import { CommentFactory } from './factories/comment.factory';
import { RatingFactory } from './factories/rating.factory';
import { LikeFactory } from './factories/like.factory';
import { CartFactory } from './factories/cart.factory';
import { OrderFactory } from './factories/order.factory';
import { SettingFactory } from './factories/setting.factory';
import { FaqFactory } from './factories/faq.factory';
import { TestimonialFactory } from './factories/testimonial.factory';
import { ContactFactory } from './factories/contact.factory';
import { CampaignFactory } from './factories/campaign.factory';
import { CouponFactory } from './factories/coupon.factory';

export class DatabaseSeeder {
  constructor(private dataSource: DataSource) {}

  async run() {
    try {
      // Seed in correct order - dependencies first
      await this.seedUsers(20);
      await this.seedCategories(10);
      await this.seedBrands(15);
      await this.seedCampaigns(5);
      await this.seedProducts(100);
      await this.seedComments(50);
      await this.seedRatings(100);
      await this.seedLikes(80);
      await this.seedCarts(30);
      await this.seedOrders(25);
      await this.seedSettings(1);
      await this.seedFaqs(10);
      await this.seedTestimonials(8);
      await this.seedContacts(10);
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
      const productFactory = new ProductFactory(this.dataSource, 1,1,1);
      const products = await productFactory.createMany(count);
      await this.dataSource.getRepository('Product').save(products);
      console.log(`✅ Created ${count} products`);
    } catch (error) {
      console.error('❌ Error seeding products:', error);
      throw new Error(`Failed to seed products: ${error.message}`);
    }
  }


  private async seedComments(count: number): Promise<void> {
    try {
      const commentFactory = new CommentFactory(1, 1);
      const comments = await commentFactory.createMany(count);
      await this.dataSource.getRepository('Comment').save(comments);
      console.log(`✅ Created ${count} comments`);
    } catch (error) {
      console.error('❌ Error seeding comments:', error);
      throw new Error(`Failed to seed comments: ${error.message}`);
    }
  }

  private async seedRatings(count: number): Promise<void> {
    try {
      const ratingFactory = new RatingFactory(1, 1);
      const ratings = await ratingFactory.createMany(count);
      await this.dataSource.getRepository('Rating').save(ratings);
      console.log(`✅ Created ${count} ratings`);
    } catch (error) {
      console.error('❌ Error seeding ratings:', error);
      throw new Error(`Failed to seed ratings: ${error.message}`);
    }
  }


  private async seedLikes(count: number): Promise<void> {
    try {
      const likeFactory = new LikeFactory(1, 1);
      const likes = await likeFactory.createMany(count);
      await this.dataSource.getRepository('Like').save(likes);
      console.log(`✅ Created ${count} likes`);
    } catch (error) {
      console.error('❌ Error seeding likes:', error);
      throw new Error(`Failed to seed likes: ${error.message}`);
    }
  }


  private async seedCarts(count: number): Promise<void> {
    try {
      const cartFactory = new CartFactory(1, 1);
      const carts = await cartFactory.createMany(count);
      await this.dataSource.getRepository('Cart').save(carts);
      console.log(`✅ Created ${count} carts`);
    } catch (error) {
      console.error('❌ Error seeding carts:', error);
      throw new Error(`Failed to seed carts: ${error.message}`);
    }
  }


  private async seedOrders(count: number): Promise<void> {
    try {
      const orderFactory = new OrderFactory(1, 1, 1);
      const orders = await orderFactory.createMany(count);
      await this.dataSource.getRepository('Order').save(orders);
      console.log(`✅ Created ${count} orders`);
    } catch (error) {
      console.error('❌ Error seeding orders:', error);
      throw new Error(`Failed to seed orders: ${error.message}`);
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





}
