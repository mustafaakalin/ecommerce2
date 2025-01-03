import { Injectable } from '@nestjs/common';
import { CreateSoldoutDto } from './dto/create-soldout.dto';
import { UpdateSoldoutDto } from './dto/update-soldout.dto';

@Injectable()
export class SoldoutsService {
  create(createSoldoutDto: CreateSoldoutDto) {
    return 'This action adds a new soldout';
  }

  findAll() {
    return `This action returns all soldouts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} soldout`;
  }

  update(id: number, updateSoldoutDto: UpdateSoldoutDto) {
    return `This action updates a #${id} soldout`;
  }

  remove(id: number) {
    return `This action removes a #${id} soldout`;
  }
}
