import { CreateUserDto } from '@Application/Users/dtos/createUserDto';
import { PrismaClient } from '@prisma/client';

export class UserRepository {
  private prisma = new PrismaClient();

  async create(user: CreateUserDto) {
    return this.prisma.user.create({
      data: user,
    });
  }
}
