import { Test, TestingModule } from '@nestjs/testing';
import { SoldoutsService } from './soldouts.service';

describe('SoldoutsService', () => {
  let service: SoldoutsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoldoutsService],
    }).compile();

    service = module.get<SoldoutsService>(SoldoutsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
