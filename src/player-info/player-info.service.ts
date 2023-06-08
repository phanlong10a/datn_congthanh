import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/share_modules/prisma.service';
import { CreatePlayerInfoDto } from './dto/create-player-info.dto';
import { UpdatePlayerInfoDto } from './dto/update-player-info.dto';

@Injectable()
export class PlayerInfoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: any) {
    const data = await this.prisma.player_info.create({
      data: {
        userId: input.userId,
        money: 0,
        currentLevel: 1,
      },
    });
    return data;
  }

  async findAll() {
    const data = await this.prisma.player_info.findMany({
      orderBy: {
        money: 'desc',
      },
    });
    return data;


  async findOne(id: string) {
    const data = await this.prisma.player_info.findUnique({
      where: {
        userId: id,
      },
    });
    return data;
  }

  async update(id: any, input: any) {
    console.log(input);
    console.log(id);
    const data = await this.prisma.player_info
      .findUnique({
        where: {
          userId: id,
        },
      })
      .then((res) => this.updateClone(id, input, res));
    return data;
  }

  async updateClone(id: any, input: any, res: any) {
    const data = this.prisma.player_info.update({
      where: {
        userId: id,
      },
      data: {
        money: input.money ? input.money : res?.money,
        currentLevel: input.currentLevel
          ? input.currentLevel
          : res?.currentLevel,
        currentChapter: input.currentChapter
          ? input.currentChapter
          : res?.currentChapter,
      },
    });
    return data;
  }

  remove(id: number) {
    return `This action removes a #${id} playerInfo`;
  }
}
