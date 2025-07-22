import { testDatabaseConnection } from '@/lib/db-test';

export async function DbConnectionTest() {
  try {
    const isConnected = await testDatabaseConnection();
    
    if (!isConnected) {
      console.error('Database connection test failed during app initialization');
      // You could also add some UI feedback here if desired
    }
    
    // This component doesn't render anything visible
    return null;
  } catch (error) {
    console.error('Error testing database connection:', error);
    return null;
  }
}
