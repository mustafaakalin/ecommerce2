import { faker } from '@faker-js/faker';
import { Contact } from '../../contacts/entities/contact.entity';

class ContactFactory {
    create(): Partial<Contact> {
      return {
        name: faker.person.fullName(),
        mail: faker.internet.email(),
        phone: faker.phone.number(),
        message: faker.lorem.paragraph(),
        instagram_username: faker.helpers.maybe(() => faker.internet.userName(), { probability: 0.7 }),
        facebook_username: faker.helpers.maybe(() => faker.internet.userName(), { probability: 0.7 }),
        x_username: faker.helpers.maybe(() => faker.internet.userName(), { probability: 0.6 }),
        reddit_username: faker.helpers.maybe(() => faker.internet.userName(), { probability: 0.4 }),
        youtube_username: faker.helpers.maybe(() => faker.internet.userName(), { probability: 0.5 }),
        threads_username: faker.helpers.maybe(() => faker.internet.userName(), { probability: 0.3 }),
        tiktok_username: faker.helpers.maybe(() => faker.internet.userName(), { probability: 0.6 }),
        bereal_username: faker.helpers.maybe(() => faker.internet.userName(), { probability: 0.3 }),
        linkedin_username: faker.helpers.maybe(() => faker.internet.userName(), { probability: 0.5 })
      };
    }
  
    async createMany(count: number): Promise<Partial<Contact>[]> {
      const contacts: Partial<Contact>[] = [];
      for (let i = 0; i < count; i++) {
        contacts.push(this.create());
      }
      return contacts;
    }
  }
  
  export { ContactFactory };