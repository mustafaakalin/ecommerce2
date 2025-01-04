import { DataSource } from 'typeorm';
import { DatabaseSeeder } from './main.seeder';
import * as factoryuser from './factories/user.factory';
import * as factorycategory from './factories/category.factory';
import * as factorybrand from './factories/brand.factory';
import * as factoryproduct from './factories/product.factory';
import * as factorycomment from './factories/comment.factory';
import * as factoryrating from './factories/rating.factory';
import * as factorylike from './factories/like.factory';
import * as factorycart from './factories/cart.factory';
import * as factoryorder from './factories/order.factory';
import * as factorysetting from './factories/setting.factory';
import * as factoryfaq from './factories/faq.factory';
import * as factorytestimonial from './factories/testimonial.factory';
import * as factorycontact from './factories/contact.factory';
import * as factorycampaign from './factories/campaign.factory';

jest.mock('typeorm');
jest.mock('./factories/user.factory');
jest.mock('./factories/category.factory');
// ... mock other factory imports

describe('DatabaseSeeder', () => {
  let seeder: DatabaseSeeder;
  let mockDataSource: jest.Mocked<DataSource>;
  let mockCreateMany: jest.Mock;

  beforeEach(() => {
    mockCreateMany = jest.fn();
    mockDataSource = {
      // Add minimal required DataSource properties
    } as unknown as jest.Mocked<DataSource>;

    // Mock factory functions
    (factoryuser.UserFactory as jest.Mock).mockReturnValue({ createMany: mockCreateMany });
    (factorycategory.CategoryFactory as jest.Mock).mockReturnValue({ createMany: mockCreateMany });
    // ... mock other factories similarly

    seeder = new DatabaseSeeder(mockDataSource);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(seeder).toBeDefined();
  });

  describe('run', () => {
    it('should call all seed methods with correct counts', async () => {
      const spyUsers = jest.spyOn(seeder as any, 'seedUsers');
      const spyCategories = jest.spyOn(seeder as any, 'seedCategories');
      // ... spy on other seed methods

      await seeder.run();

      expect(spyUsers).toHaveBeenCalledWith(20);
      expect(spyCategories).toHaveBeenCalledWith(10);
      // ... verify other method calls
    });
  });

  describe('individual seed methods', () => {
    it('should seed users correctly', async () => {
      await (seeder as any).seedUsers(20);
      expect(factoryuser.UserFactory).toHaveBeenCalledWith(mockDataSource);
      expect(mockCreateMany).toHaveBeenCalledWith(20);
    });

    it('should seed categories correctly', async () => {
      await (seeder as any).seedCategories(10);
      expect(factorycategory.CategoryFactory).toHaveBeenCalledWith(mockDataSource);
      expect(mockCreateMany).toHaveBeenCalledWith(10);
    });

    // Add similar tests for other seed methods

    it('should handle errors gracefully', async () => {
      mockCreateMany.mockRejectedValueOnce(new Error('Database error'));
      
      await expect((seeder as any).seedUsers(20)).rejects.toThrow('Database error');
    });
  });
});