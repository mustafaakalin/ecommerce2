import { faker } from '@faker-js/faker';
import { Rating } from '../../ratings/entities/rating.entity';

export const createRating = (userId: number, productId: number): Partial<Rating> => ({
    user_id: userId,
    product_id: productId,
    rating: faker.number.float({ 
        min: 0, 
        max: 5, 
        fractionDigits: 1 
    })
});