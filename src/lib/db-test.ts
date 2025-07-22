import { prisma } from './prisma';

/**
 * Tests the database connection by performing a simple query
 * @returns Promise that resolves when the connection test is complete
 */
export async function testDatabaseConnection(): Promise<boolean> {
  try {
    console.log('Testing database connection...');
    
    // Simple query to test connection - count users
    const userCount = await prisma.user.count();
    console.log(`Database connection successful! Found ${userCount} users.`);
    
    return true;
  } catch (error) {
    console.error('Database connection failed:', error);
    return false;
  }
}
