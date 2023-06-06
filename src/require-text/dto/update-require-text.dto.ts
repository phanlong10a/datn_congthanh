import { PartialType } from '@nestjs/mapped-types';
import { CreateRequireTextDto } from './create-require-text.dto';

export class UpdateRequireTextDto extends PartialType(CreateRequireTextDto) {}
