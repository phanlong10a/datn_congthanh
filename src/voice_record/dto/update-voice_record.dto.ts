import { PartialType } from '@nestjs/mapped-types';
import { CreateVoiceRecordDto } from './create-voice_record.dto';

export class UpdateVoiceRecordDto extends PartialType(CreateVoiceRecordDto) {}
