import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VoiceRecordService } from './voice_record.service';
import { CreateVoiceRecordDto } from './dto/create-voice_record.dto';
import { UpdateVoiceRecordDto } from './dto/update-voice_record.dto';

@Controller('voice-record')
export class VoiceRecordController {
  constructor(private readonly voiceRecordService: VoiceRecordService) {}

  @Post()
  create(@Body() createVoiceRecordDto: any) {
    return this.voiceRecordService.create(createVoiceRecordDto);
  }
  @Post('/find-record')
  findByUserId(@Body() createVoiceRecordDto: any) {
    return this.voiceRecordService.findByUserId(createVoiceRecordDto);
  }

  @Get()
  findAll() {
    return this.voiceRecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.voiceRecordService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVoiceRecordDto: UpdateVoiceRecordDto,
  ) {
    return this.voiceRecordService.update(+id, updateVoiceRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.voiceRecordService.remove(+id);
  }
}
