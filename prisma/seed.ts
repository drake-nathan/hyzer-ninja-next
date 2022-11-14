import { PrismaClient } from '@prisma/client';
import { discs } from './data/discs';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: `nathandrakedrums@gmail.com`,
      role: 'ADMIN',
      displayName: 'Nathan Drake',
      Disc: {
        create: discs,
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
