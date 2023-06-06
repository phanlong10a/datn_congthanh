import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TestTableService } from './test-table.service';
import { CreateTestTableDto } from './dto/create-test-table.dto';
import { UpdateTestTableDto } from './dto/update-test-table.dto';
import { PrismaService } from 'src/share_modules/prisma.service';

@Controller('/test-table')
export class TestTableController {
  constructor(
    private readonly testTableService: TestTableService,
    private readonly PrismaSer: PrismaService,
  ) {}

  @Post()
  crea2te(@Body() createTestTableDto: CreateTestTableDto) {
    return this.testTableService.create(createTestTableDto);
  }

  @Post(':id')
  uploadText(@Body() createTestTableDto: any) {
    return this.testTableService.create(createTestTableDto);
  }

  @Post('/post-test')
  async create(@Body() createTestTableDto: any) {
    const res = await this.PrismaSer.table_for_test.update({
      where: {
        id: 'd98d046d-36de-4add-9963-f5fbf89eadff',
      },
      data: {
        text: createTestTableDto.text,
      },
    });
    return res;
  }

  @Get()
  findAll() {
    return this.testTableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testTableService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTestTableDto: UpdateTestTableDto,
  ) {
    return this.testTableService.update(+id, updateTestTableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testTableService.remove(+id);
  }
}
