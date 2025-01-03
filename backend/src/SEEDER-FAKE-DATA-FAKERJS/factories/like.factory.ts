import { faker } from '@faker-js/faker';
import { Like } from '../../likes/entities/like.entity';

export const createLike = (userId: number, productId: number): Partial<Like> => ({
    user_id: userId,
    product_id: productId
});