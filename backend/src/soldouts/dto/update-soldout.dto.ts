import { PartialType } from '@nestjs/mapped-types';
import { CreateSoldoutDto } from './create-soldout.dto';

export class UpdateSoldoutDto extends PartialType(CreateSoldoutDto) {}
