import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/share_modules/prisma.service';

@Injectable()
export class RecordQuestionService {
  constructor(private readonly prisma: PrismaService) {}

  create(input: any) {
    return 'This action adds a new testTable';
  }
  async createQuestion(input: any): Promise<any> {
    const data = await this.prisma.record_question.create({
      data: {
        imageUrl: input.imageUrl,
        questionContent: input.questionContent,
        reward: input.reward,
        index: input.index,
        questionType: input.questionType,
        lengthRequire: input.lengthRequire,
      },
    });
    return data;
  }

  async getAllQuestion(): Promise<any> {
    const data = await this.prisma.record_question.findMany({
      include: {
        requireText: {
          select: {
            id: true,
            text: true,
          },
        },
      },
      orderBy: {
        index: 'asc',
      },
    });
    return data;
  }

  async getQuestionByIndex(input: any): Promise<any> {
    const a = parseInt(input.index);
    for (let i = a; i < a + 10; i++) {
      const data = await this.prisma.record_question.findUnique({
        where: {
          index: i,
        },
        include: {
          requireText: {
            select: {
              id: true,
              text: true,
            },
          },
        },
      });
      if (data != null) {
        return data;
      }
    }
    return null;
  }

  async update(id, input) {
    await this.prisma.record_question.update({
      where: {
        id,
      },
      data: Object.assign({}, input),
    });
    return 'Thành công';
  }

  async remove(id) {
    await this.prisma.record_question.delete({
      where: {
        id,
      },
    });
    return `This action removes a #${id} requireText`;
  }
}
