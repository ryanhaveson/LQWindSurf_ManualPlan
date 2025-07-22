import { PrismaClient } from '../src/generated/prisma';

// Initialize Prisma Client
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

async function main() {
  try {
    console.log('Starting database connection test...');
    
    // Create a test user
    const testUser = await prisma.user.create({
      data: {
        email: 'test@example.com',
        name: 'Test User',
        password: 'password123',
        isAdmin: false,
      },
    });
    
    console.log('Created test user:', testUser);
    
    // Query for all users
    const allUsers = await prisma.user.findMany();
    console.log('All users in database:', allUsers);
    
    // Clean up - delete the test user
    await prisma.user.delete({
      where: {
        id: testUser.id,
      },
    });
    
    console.log('Test user deleted successfully');
    console.log('Database connection test completed successfully!');
  } catch (error) {
    console.error('Database connection test failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
