import { faker } from '@faker-js/faker';
import { Testimonial } from '../../testimonials/entities/testimonial.entity';

export const createTestimonial = (): Partial<Testimonial> => ({
    author: faker.person.fullName(),
    position: faker.person.jobTitle(),
    content: faker.lorem.paragraph({ min: 2, max: 4 }),
    avatar: faker.image.avatar(),
    rating: faker.number.float({ 
        min: 0, 
        max: 5, 
        fractionDigits: 1 
    }),
    is_active: faker.datatype.boolean({ probability: 0.9 })
});