import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddressesModule } from './addresses/addresses.module';
import { BrandsModule } from './brands/brands.module';
import { CampaignsModule } from './campaigns/campaigns.module';
import { CartsModule } from './carts/carts.module';
import { CategoriesModule } from './categories/categories.module';
import { CommentsModule } from './comments/comments.module';
import { ContactsModule } from './contacts/contacts.module';
import { CouponsModule } from './coupons/coupons.module';
import { FaqsModule } from './faqs/faqs.module';
import { LikesModule } from './likes/likes.module';
import { OrdersModule } from './orders/orders.module';
import { RatingsModule } from './ratings/ratings.module';
import { ProductsModule } from './products/products.module';
import { ShipmentsModule } from './shipments/shipments.module';
import { SettingsModule } from './settings/settings.module';
import { SoldoutsModule } from './soldouts/soldouts.module';
import { TestimonialsModule } from './testimonials/testimonials.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AddressesModule, BrandsModule, CampaignsModule, CartsModule, CategoriesModule, CommentsModule, ContactsModule, CouponsModule, FaqsModule, LikesModule, OrdersModule, RatingsModule, ProductsModule, ShipmentsModule, SettingsModule, SoldoutsModule, TestimonialsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
