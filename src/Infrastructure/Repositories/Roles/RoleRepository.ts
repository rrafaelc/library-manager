import { prisma } from '@Infrastructure/Databases/prisma';

export class RoleRepository {
  async findById(id: string) {
    return prisma.role.findFirst({
      where: {
        id,
      },
    });
  }

  async findByName(name: string) {
    return prisma.role.findFirst({
      where: {
        name,
      },
    });
  }
}
