import { Module } from '@nestjs/common';
import { RequireTextService } from './require-text.service';
import { RequireTextController } from './require-text.controller';

@Module({
  controllers: [RequireTextController],
  providers: [RequireTextService]
})
export class RequireTextModule {}
