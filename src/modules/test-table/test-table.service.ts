import { Injectable } from '@nestjs/common';
import { CreateTestTableDto } from './dto/create-test-table.dto';
import { UpdateTestTableDto } from './dto/update-test-table.dto';
import { PrismaService } from 'src/share_modules/prisma.service';

@Injectable()
export class TestTableService {
  constructor(private readonly prisma: PrismaService) {}
  create(createTestTableDto: CreateTestTableDto) {
    return 'This action adds a new testTable';
  }

  async upload(id: any, input: any): Promise<any> {
    const data = await this.prisma.table_for_test.create({
      data: {
        text: input.text,
        userId: id,
      },
    });
    return data;
  }

  findAll() {
    return `This action returns all testTable`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testTable`;
  }

  update(id: number, updateTestTableDto: UpdateTestTableDto) {
    return `This action updates a #${id} testTable`;
  }

  remove(id: number) {
    return `This action removes a #${id} testTable`;
  }
}
