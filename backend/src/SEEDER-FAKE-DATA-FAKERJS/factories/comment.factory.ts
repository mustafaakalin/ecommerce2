import { faker } from '@faker-js/faker';
import { DataSource } from 'typeorm';
import { Comment } from '../../comments/entities/comment.entity';
import { User } from '../../users/entities/user.entity';
import { Product } from '../../products/entities/product.entity';

class CommentFactory {
  constructor(private dataSource: DataSource) {}

  async create(user: User, product: Product): Promise<Partial<Comment>> {
    return {
      user_id: user.id,
      product_id: product.id,
      comment: faker.helpers.arrayElement([
        faker.lorem.paragraph(),
        faker.lorem.paragraphs(2),
        faker.lorem.sentences(3),
      ]),
      rating: faker.number.float({
        min: 1,
        max: 5,
        fractionDigits: 2,
      }),
    };
  }

  async createMany(
    count: number,
    users: User[],
    products: Product[],
  ): Promise<Partial<Comment>[]> {
    const comments: Partial<Comment>[] = [];
    const usedCombinations = new Set<string>();

    for (let i = 0; i < count; i++) {
      let user, product;
      let combination;

      do {
        user = users[i % users.length];
        product = products[i % products.length];
        combination = `${user.id}-${product.id}`;
      } while (usedCombinations.has(combination));

      usedCombinations.add(combination);
      comments.push(await this.create(user, product));
    }
    return comments;
  }
}

export { CommentFactory };
