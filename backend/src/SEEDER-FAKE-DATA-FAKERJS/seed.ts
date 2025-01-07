import { DataSource } from 'typeorm';
import { DatabaseSeeder } from './main.seeder';

async function seed() {
  const dataSource = new DataSource({
    type: 'postgres',
    host: 'localhost', // or 'db' if running inside Docker
    port: 5432,
    username: 'user',
    password: 'password',
    database: 'ecommerce2',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: true
  });

  try {
    await dataSource.initialize();
    console.log('Data Source initialized');

    const seeder = new DatabaseSeeder(dataSource);
    await seeder.run();
    console.log('Seeding completed');

    await dataSource.destroy();
    console.log('Data Source destroyed');
  } catch (error) {
    console.error('Error during seeding:', error);
    if (dataSource.isInitialized) {
      await dataSource.destroy();
    }
    process.exit(1);
  }
}

seed();