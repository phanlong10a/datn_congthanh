import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RecordQuestionService } from './record_question.service';

@Controller('record-question')
export class RecordQuestionController {
  constructor(private readonly recordQuestionService: RecordQuestionService) {}

  @Post()
  postCreateQuestion(@Body() recordQuestionService: any) {
    return this.recordQuestionService.createQuestion(recordQuestionService);
  }

  @Get()
  getAllQuestion() {
    return this.recordQuestionService.getAllQuestion();
  }

  @Post('/find-question')
  postFindIndexQuestion(@Body() recordQuestionService: any) {
    return this.recordQuestionService.getQuestionByIndex(recordQuestionService);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequireTextDto: any) {
    return this.recordQuestionService.update(id, updateRequireTextDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recordQuestionService.remove(id);
  }
}
