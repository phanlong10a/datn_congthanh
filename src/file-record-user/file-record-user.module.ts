import { Module } from '@nestjs/common';
import { FileRecordUserService } from './file-record-user.service';
import { FileRecordUserController } from './file-record-user.controller';

@Module({
  controllers: [FileRecordUserController],
  providers: [FileRecordUserService]
})
export class FileRecordUserModule {}
