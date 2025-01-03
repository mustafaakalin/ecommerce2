import { DataSource } from 'typeorm';
import * as factoryuser from './factories/user.factory';
import * as factorycategory from './factories/category.factory';
import * as factorybrand from './factories/brand.factory';
import * as factoryproduct from './factories/product.factory';
import * as factorycomment from './factories/comment.factory';
import * as factoryrating from './factories/rating.factory';
import * as factorylike from './factories/like.factory';
import * as factorycart from './factories/cart.factory';
import * as factoryorder from './factories/order.factory';
import * as factorysetting from './factories/setting.factory';
import * as factoryfaq from './factories/faq.factory';
import * as factorytestimonial from './factories/testimonial.factory';
import * as factorycontact from './factories/contact.factory';
import * as factorycampaign from './factories/campaign.factory';

export class DatabaseSeeder {
  constructor(private dataSource: DataSource) {}

  async run() {
    await this.seedUsers(20);
    await this.seedCategories(10);
    await this.seedBrands(15);
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
    await this.seedCampaigns(5);
  }

  // Implementation of individual seed methods will follow...
  private async seedUsers(count: number) {
    const userFactory = factoryuser.UserFactory(this.dataSource);
    await userFactory.createMany(count);
  }

  private async seedCategories(count: number) {
    const categoryFactory = factories.CategoryFactory(this.dataSource);
    await categoryFactory.createMany(count);
  }

  private async seedBrands(count: number) {
    const brandFactory = factories.BrandFactory(this.dataSource);
    await brandFactory.createMany(count);
  }

  private async seedProducts(count: number) {
    const productFactory = factories.ProductFactory(this.dataSource);
    await productFactory.createMany(count);
  }

  private async seedComments(count: number) {
    const commentFactory = factories.CommentFactory(this.dataSource);
    await commentFactory.createMany(count);
  }

  private async seedRatings(count: number) {
    const ratingFactory = factories.RatingFactory(this.dataSource);
    await ratingFactory.createMany(count);
  }

  private async seedLikes(count: number) {
    const likeFactory = factories.LikeFactory(this.dataSource);
    await likeFactory.createMany(count);
  }

  private async seedCarts(count: number) {
    const cartFactory = factories.CartFactory(this.dataSource);
    await cartFactory.createMany(count);
  }

  private async seedOrders(count: number) {
    const orderFactory = factories.OrderFactory(this.dataSource);
    await orderFactory.createMany(count);
  }

  private async seedSettings(count: number) {
    const settingFactory = factories.SettingFactory(this.dataSource);
    await settingFactory.createMany(count);
  }

  private async seedFaqs(count: number) {
    const faqFactory = factories.FaqFactory(this.dataSource);
    await faqFactory.createMany(count);
  }

  private async seedTestimonials(count: number) {
    const testimonialFactory = factories.TestimonialFactory(this.dataSource);
    await testimonialFactory.createMany(count);
  }

  private async seedContacts(count: number) {
    const contactFactory = factories.ContactFactory(this.dataSource);
    await contactFactory.createMany(count);
  }

  private async seedCampaigns(count: number) {
    const campaignFactory = factories.CampaignFactory(this.dataSource);
    await campaignFactory.createMany(count);
  }
}