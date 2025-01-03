import { faker } from '@faker-js/faker';
import { Faq } from '../../faqs/entities/faq.entity';

export const createFaq = (): Partial<Faq> => ({
    question: faker.helpers.arrayElement([
        'How do I track my order?',
        'What payment methods do you accept?',
        'How can I return an item?',
        'What is your shipping policy?',
        'How long does delivery take?',
        'Do you ship internationally?',
        'What is your refund policy?',
        'How can I contact customer service?',
        'Are the products authentic?',
        'Do you offer gift wrapping?'
    ]),
    answer: faker.lorem.paragraph({ min: 2, max: 4 })
});