import { faker } from '@faker-js/faker';
import { Comment } from '../../comments/entities/comment.entity';

export const createComment = (userId: number, productId: number): Partial<Comment> => ({
    user_id: userId,
    product_id: productId,
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
});