import { faker } from '@faker-js/faker';
import { Rating } from '../../ratings/entities/rating.entity';

class RatingFactory {
    constructor(private userId: number, private productId: number) {}
  
    create(): Partial<Rating> {
      return {
        user_id: this.userId,
        product_id: this.productId,
        rating: faker.number.float({ 
          min: 0, 
          max: 5, 
          fractionDigits: 1 
        })
      };
    }
  
    async createMany(count: number): Promise<Partial<Rating>[]> {
      const ratings: Partial<Rating>[] = [];
      for (let i = 0; i < count; i++) {
        ratings.push(this.create());
      }
      return ratings;
    }
  }
  
  export { RatingFactory };