import { config } from 'dotenv';
import '@testing-library/jest-dom';

if (process.env.NODE_ENV === 'test' || process.env.VITEST) {
  config({ path: '.env.test', override: true });
}
