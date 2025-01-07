import { faker } from '@faker-js/faker';
import { Testimonial } from '../../testimonials/entities/testimonial.entity';

class TestimonialFactory {
    create(): Partial<Testimonial> {
      return {
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
      };
    }
  
    async createMany(count: number): Promise<Partial<Testimonial>[]> {
      const testimonials: Partial<Testimonial>[] = [];
      for (let i = 0; i < count; i++) {
        testimonials.push(this.create());
      }
      return testimonials;
    }
  }
  
  export { TestimonialFactory };