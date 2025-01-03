import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoldoutsService } from './soldouts.service';
import { CreateSoldoutDto } from './dto/create-soldout.dto';
import { UpdateSoldoutDto } from './dto/update-soldout.dto';

@Controller('soldouts')
export class SoldoutsController {
  constructor(private readonly soldoutsService: SoldoutsService) {}

  @Post()
  create(@Body() createSoldoutDto: CreateSoldoutDto) {
    return this.soldoutsService.create(createSoldoutDto);
  }

  @Get()
  findAll() {
    return this.soldoutsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soldoutsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoldoutDto: UpdateSoldoutDto) {
    return this.soldoutsService.update(+id, updateSoldoutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soldoutsService.remove(+id);
  }
}
