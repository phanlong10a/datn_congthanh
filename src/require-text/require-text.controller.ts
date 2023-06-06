import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RequireTextService } from './require-text.service';
import { CreateRequireTextDto } from './dto/create-require-text.dto';
import { UpdateRequireTextDto } from './dto/update-require-text.dto';

@Controller('require-text')
export class RequireTextController {
  constructor(private readonly requireTextService: RequireTextService) {}

  @Post()
  create(@Body() createRequireTextDto: CreateRequireTextDto) {
    return this.requireTextService.create(createRequireTextDto);
  }

  @Get()
  findAll() {
    return this.requireTextService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requireTextService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() input: any) {
    return this.requireTextService.update(id, input);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requireTextService.remove(id);
  }
}
