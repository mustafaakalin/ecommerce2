import { faker } from '@faker-js/faker';
import { Comment } from '../../comments/entities/comment.entity';

class CommentFactory {
    constructor(private userId: number, private productId: number) {}
  
    create(): Partial<Comment> {
      return {
        user_id: this.userId,
        product_id: this.productId,
        comment: faker.helpers.arrayElement([
          faker.lorem.paragraph(),
          faker.lorem.paragraphs(2),
          faker.lorem.sentences(3)
        ]),
        rating: faker.number.float({ 
          min: 1, 
          max: 5, 
          fractionDigits: 2
        })
      };
    }
  
    async createMany(count: number): Promise<Partial<Comment>[]> {
      const comments: Partial<Comment>[] = [];
      for (let i = 0; i < count; i++) {
        comments.push(this.create());
      }
      return comments;
    }
  }
  
  export { CommentFactory };