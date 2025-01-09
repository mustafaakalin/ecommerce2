import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
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
import { OrderItemsModule } from './order_items/order_items.module';
import { Address } from './addresses/entities/address.entity';
import { Brand } from './brands/entities/brand.entity';
import { Campaign } from './campaigns/entities/campaign.entity';
import { Cart } from './carts/entities/cart.entity';
import { Category } from './categories/entities/category.entity';
import { Comment } from './comments/entities/comment.entity';
import { Contact } from './contacts/entities/contact.entity';
import { Coupon } from './coupons/entities/coupon.entity';
import { Faq } from './faqs/entities/faq.entity';
import { Like } from './likes/entities/like.entity';
import { Order } from './orders/entities/order.entity';
import { OrderItem } from './order_items/entities/order_item.entity';
import { Product } from './products/entities/product.entity';
import { Rating } from './ratings/entities/rating.entity';
import { Shipment } from './shipments/entities/shipment.entity';
import { Setting } from './settings/entities/setting.entity';
import { Soldout } from './soldouts/entities/soldout.entity';
import { Testimonial } from './testimonials/entities/testimonial.entity';
import { User } from './users/entities/user.entity';


@Module({
  imports: [AddressesModule, BrandsModule, CampaignsModule, CartsModule, CategoriesModule, CommentsModule, ContactsModule, CouponsModule, FaqsModule, LikesModule, OrdersModule, RatingsModule, ProductsModule, ShipmentsModule, SettingsModule, SoldoutsModule, TestimonialsModule, UsersModule, OrderItemsModule, 
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      // postgresql
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        // entities: [__dirname + '/**/**/*.entity{.ts,.js}'],
        entities: [Address, Brand, Campaign, Cart, Category, Comment, Contact, Coupon, Faq, Like, Order, OrderItem, Product, Rating, Shipment, Setting, Soldout, Testimonial, User],
        synchronize: configService.get('NODE_ENV') === 'development',
      }),
      inject: [ConfigService],
    }),
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
