import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/share_modules/prisma.service';
import { CreateRequireTextDto } from './dto/create-require-text.dto';
import { UpdateRequireTextDto } from './dto/update-require-text.dto';

@Injectable()
export class RequireTextService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createRequireTextDto: any) {
    const data = await this.prisma.requireText.create({
      data: {
        text: createRequireTextDto.text,
        record_questionId: createRequireTextDto.record_questionId,
      },
    });
    return data;
  }

  findAll() {
    return `This action returns all requireText`;
  }

  findOne(id: number) {
    return `This action returns a #${id} requireText`;
  }

  async update(id, input) {
    await this.prisma.requireText.update({
      where: {
        id,
      },
      data: Object.assign({}, input),
    });
    return 'Thành công';
  }

  async remove(id) {
    await this.prisma.requireText.delete({
      where: {
        id,
      },
    });
    return `This action removes a #${id} requireText`;
  }
}
