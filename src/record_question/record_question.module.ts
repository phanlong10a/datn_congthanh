import { Module } from '@nestjs/common';
import { RecordQuestionService } from './record_question.service';
import { RecordQuestionController } from './record_question.controller';

@Module({
  controllers: [RecordQuestionController],
  providers: [RecordQuestionService],
})
export class RecordQuestionModule {}
