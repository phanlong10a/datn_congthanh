import { PartialType } from '@nestjs/mapped-types';
import { CreateFileRecordUserDto } from './create-file-record-user.dto';

export class UpdateFileRecordUserDto extends PartialType(CreateFileRecordUserDto) {}
