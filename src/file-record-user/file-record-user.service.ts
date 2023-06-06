import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/share_modules/prisma.service';
import { CreateFileRecordUserDto } from './dto/create-file-record-user.dto';
import { UpdateFileRecordUserDto } from './dto/update-file-record-user.dto';

@Injectable()
export class FileRecordUserService {
  constructor(private readonly prisma: PrismaService) {}
  async create(input: any) {
    const data = await this.prisma.file_record_user.create({
      data: {
        userId: input.userId,
        fileUrl: input.fileUrl,
      },
    });
    return data;
  }

  findAll() {
    return `This action returns all fileRecordUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fileRecordUser`;
  }

  update(id: number, updateFileRecordUserDto: UpdateFileRecordUserDto) {
    return `This action updates a #${id} fileRecordUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} fileRecordUser`;
  }
}
