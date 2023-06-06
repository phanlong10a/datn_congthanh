import { PartialType } from '@nestjs/mapped-types';
import { CreatePlayerInfoDto } from './create-player-info.dto';

export class UpdatePlayerInfoDto extends PartialType(CreatePlayerInfoDto) {}
