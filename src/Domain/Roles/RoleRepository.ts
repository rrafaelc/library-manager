import { PrismaClient } from '@prisma/client';

export class RoleRepository {
  private prisma = new PrismaClient();

  async findById(id: string) {
    return this.prisma.role.findFirst({
      where: {
        id,
      },
    });
  }

  async findByName(name: string) {
    return this.prisma.role.findFirst({
      where: {
        name,
      },
    });
  }
}
