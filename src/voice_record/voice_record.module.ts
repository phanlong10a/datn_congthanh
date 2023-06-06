import { Module } from '@nestjs/common';
import { VoiceRecordService } from './voice_record.service';
import { VoiceRecordController } from './voice_record.controller';

@Module({
  controllers: [VoiceRecordController],
  providers: [VoiceRecordService]
})
export class VoiceRecordModule {}
