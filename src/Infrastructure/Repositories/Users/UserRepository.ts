import { CreateUserRequest } from '@Adapter/Controller/Users/CreateUserRequest';
import { User } from '@prisma/client';
import { prisma } from '@Infrastructure/Databases/prisma';

export class UserRepository {
  async find() {
    return prisma.user.findMany();
  }

  async findById(id: string) {
    return prisma.user.findFirst({
      where: {
        id,
      },
    });
  }

  async findByEmail(email: string) {
    return prisma.user.findFirst({
      where: {
        email,
      },
    });
  }

  async findByCpfCnpj(cpf_cnpj: string) {
    return prisma.user.findFirst({
      where: {
        cpf_cnpj,
      },
    });
  }

  async create(user: CreateUserRequest) {
    return prisma.user.create({
      data: user,
    });
  }

  async update(user: User) {
    return prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        full_name: user.full_name,
        email: user.email,
        password: user.password,
        cpf_cnpj: user.cpf_cnpj,
      },
    });
  }

  async delete(user: User) {
    return prisma.user.delete({
      where: {
        id: user.id,
      },
    });
  }
}
