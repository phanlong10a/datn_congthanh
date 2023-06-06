import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FileRecordUserService } from './file-record-user.service';
import { CreateFileRecordUserDto } from './dto/create-file-record-user.dto';
import { UpdateFileRecordUserDto } from './dto/update-file-record-user.dto';

@Controller('file-record-user')
export class FileRecordUserController {
  constructor(private readonly fileRecordUserService: FileRecordUserService) {}

  @Post()
  create(@Body() input: any) {
    return this.fileRecordUserService.create(input);
  }

  @Get()
  findAll() {
    return this.fileRecordUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fileRecordUserService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFileRecordUserDto: UpdateFileRecordUserDto,
  ) {
    return this.fileRecordUserService.update(+id, updateFileRecordUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fileRecordUserService.remove(+id);
  }
}
