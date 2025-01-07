import { faker } from '@faker-js/faker';
import { Setting } from '../../settings/entities/setting.entity';

class SettingFactory {
    create(): Partial<Setting> {
      return {
        name: faker.company.name(),
        description: faker.company.catchPhrase(),
        slogan: faker.company.buzzPhrase(),
        logo: faker.image.url(),
        phone: faker.phone.number(),
        mail: faker.internet.email(),
        instagram: faker.helpers.maybe(() => `https://instagram.com/${faker.internet.username()}`),
        facebook: faker.helpers.maybe(() => `https://facebook.com/${faker.internet.username()}`),
        youtube: faker.helpers.maybe(() => `https://youtube.com/c/${faker.internet.username()}`),
        tiktok: faker.helpers.maybe(() => `https://tiktok.com/@${faker.internet.username()}`),
        linkedin: faker.helpers.maybe(() => `https://linkedin.com/company/${faker.company.name()}`),
        x: faker.helpers.maybe(() => `https://x.com/${faker.internet.username()}`),
        address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.country()}`,
        google_embed_map_url: faker.helpers.maybe(() => `https://www.google.com/maps/embed?pb=${faker.string.alphanumeric(100)}`),
        whatsapp_group: faker.helpers.maybe(() => `https://chat.whatsapp.com/${faker.string.alphanumeric(22)}`),
        whatsapp_channel: faker.helpers.maybe(() => `https://whatsapp.com/channel/${faker.string.alphanumeric(24)}`),
        telegram_group: faker.helpers.maybe(() => `https://t.me/${faker.internet.username()}`),
        telegram_channel: faker.helpers.maybe(() => `https://t.me/s/${faker.internet.username()}`),
        facebook_group: faker.helpers.maybe(() => `https://facebook.com/groups/${faker.string.alphanumeric(16)}`),
        facebook_page: faker.helpers.maybe(() => `https://facebook.com/${faker.company.name()}`),
        reddit_community: faker.helpers.maybe(() => `https://reddit.com/r/${faker.internet.username()}`),
        instagram_broadcast_channnel: faker.helpers.maybe(() => `https://instagram.com/broadcast/${faker.string.alphanumeric(12)}`)
      };
    }
  
    async createMany(count: number): Promise<Partial<Setting>[]> {
      const settings: Partial<Setting>[] = [];
      for (let i = 0; i < count; i++) {
        settings.push(this.create());
      }
      return settings;
    }
  }
  
  export { SettingFactory };