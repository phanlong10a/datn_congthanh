import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlayerInfoService } from './player-info.service';
import { CreatePlayerInfoDto } from './dto/create-player-info.dto';
import { UpdatePlayerInfoDto } from './dto/update-player-info.dto';

@Controller('player-info')
export class PlayerInfoController {
  constructor(private readonly playerInfoService: PlayerInfoService) {}

  @Post()
  create(@Body() input: any) {
    return this.playerInfoService.create(input);
  }

  @Get()
  findAll() {
    return this.playerInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerInfoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerInfoDto: any) {
    return this.playerInfoService.update(id, updatePlayerInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerInfoService.remove(+id);
  }
}
