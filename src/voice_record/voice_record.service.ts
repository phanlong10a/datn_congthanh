import { Injectable } from '@nestjs/common';
import { CreateVoiceRecordDto } from './dto/create-voice_record.dto';
import { UpdateVoiceRecordDto } from './dto/update-voice_record.dto';
import { PrismaService } from 'src/share_modules/prisma.service';

@Injectable()
export class VoiceRecordService {
  constructor(private readonly prisma: PrismaService) {}
  // create(createVoiceRecordDto: CreateVoiceRecordDto) {
  //   return 'This action adds a new voiceRecord';
  // }
  async create(createRequireTextDto: any) {
    const data = await this.prisma.voice_record.create({
      data: {
        record: createRequireTextDto.record,
        nameRecord: createRequireTextDto.nameRecord,
        indexRecord: createRequireTextDto.indexRecord,
        userId: createRequireTextDto.userId,
      },
    });

    const user = await this.prisma.player_info.findFirstOrThrow({
      where: {
        userId: createRequireTextDto.userId,
      },
    });

    this.prisma.player_info.update({
      where: {
        id: user.id,
      },
      data: {
        money: user.money + 10,
      },
    });
    return data;
  }

  async findByUserId(createRequireTextDto: any) {
    const data = await this.prisma.voice_record.findMany({
      where: {
        userId: createRequireTextDto.userId,
      },
    });
    return data;
  }

  findAll() {
    return `This action returns all voiceRecord`;
  }

  findOne(id: number) {
    return `This action returns a #${id} voiceRecord`;
  }

  update(id: number, updateVoiceRecordDto: UpdateVoiceRecordDto) {
    return `This action updates a #${id} voiceRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} voiceRecord`;
  }
}
