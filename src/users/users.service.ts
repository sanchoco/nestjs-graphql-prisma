import { Injectable } from '@nestjs/common';
import { UserCreateInput } from 'src/@prisma-dto/user/user-create.input';
import { UserUpdateInput } from 'src/@prisma-dto/user/user-update.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserInput: UserCreateInput) {
    return await this.prisma.user.create({
      data: createUserInput,
    });
  }

  async findAll() {
    return this.prisma.user.findMany({ orderBy: { createdAt: 'asc' } });
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: string, data: UserUpdateInput) {
    return this.prisma.user.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
