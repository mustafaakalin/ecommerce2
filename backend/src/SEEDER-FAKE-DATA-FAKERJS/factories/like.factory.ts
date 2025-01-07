import { faker } from '@faker-js/faker';
import { Like } from '../../likes/entities/like.entity';

class LikeFactory {
    constructor(private userId: number, private productId: number) {}
  
    create(): Partial<Like> {
      return {
        user_id: this.userId,
        product_id: this.productId
      };
    }
  
    async createMany(count: number): Promise<Partial<Like>[]> {
      const likes: Partial<Like>[] = [];
      for (let i = 0; i < count; i++) {
        likes.push(this.create());
      }
      return likes;
    }
  }
  
  export { LikeFactory };