import { CreateUserRequest } from '@Adapter/Controller/Users/CreateUserRequest';
import { PrismaClient, User } from '@prisma/client';

export class UserRepository {
  private prisma = new PrismaClient();

  async find() {
    return this.prisma.user.findMany();
  }

  async findById(id: string) {
    return this.prisma.user.findFirst({
      where: {
        id,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findFirst({
      where: {
        email,
      },
    });
  }

  async findByCpfCnpj(cpf_cnpj: string) {
    return this.prisma.user.findFirst({
      where: {
        cpf_cnpj,
      },
    });
  }

  async create(user: CreateUserRequest) {
    return this.prisma.user.create({
      data: user,
    });
  }

  async update(user: User) {
    return this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: user,
    });
  }

  async delete(user: User) {
    return this.prisma.user.delete({
      where: {
        id: user.id,
      },
    });
  }
}
