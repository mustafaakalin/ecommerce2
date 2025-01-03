import { Test, TestingModule } from '@nestjs/testing';
import { SoldoutsController } from './soldouts.controller';
import { SoldoutsService } from './soldouts.service';

describe('SoldoutsController', () => {
  let controller: SoldoutsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoldoutsController],
      providers: [SoldoutsService],
    }).compile();

    controller = module.get<SoldoutsController>(SoldoutsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
