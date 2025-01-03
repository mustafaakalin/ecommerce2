import { Module } from '@nestjs/common';
import { SoldoutsService } from './soldouts.service';
import { SoldoutsController } from './soldouts.controller';

@Module({
  controllers: [SoldoutsController],
  providers: [SoldoutsService],
})
export class SoldoutsModule {}
