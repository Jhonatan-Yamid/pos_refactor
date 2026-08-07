
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  // Prisma will read the DATABASE_URL_TEST from the environment when this
  // script is executed. Ensure $env:DATABASE_URL_TEST is set in PowerShell.
});

async function main() {
  console.log('Seeding test DB...');

  const provider = await prisma.provider.create({
    data: {
      name: 'Proveedor Test',
      accountNumber: '0001',
      phone: '000-0000'
    }
  });

  const ingredient = await prisma.ingredient.create({
    data: {
      name: 'Harina Test',
      price: 100,
      quantity: 10,
      typeUnity: 'kg',
      providerId: provider.id
    }
  });

  const product = await prisma.product.create({
    data: {
      name: 'Producto Test',
      price: 12.5,
      quantity: 5
    }
  });

  console.log('Seeded provider id=', provider.id, 'ingredient id=', ingredient.id, 'product id=', product.id);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
