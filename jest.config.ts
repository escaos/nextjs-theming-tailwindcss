import nextJest from 'next/jest';
// Sync object
const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['@testing-library/jest-dom'], // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: ['cypress'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.types.{ts,tsx}',
    '!src/**/*.stories.{ts,tsx}',
    '!src/**/*.domain.{ts,tsx}',
    '!src/**/*.test.{ts,tsx}',
    '!src/**/*.spec.{ts,tsx}',
    '!src/shared/images/icons/*.{ts,tsx}',
    '!src/**/index.{ts,tsx}',
  ],
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
  coverageReporters: ['text', 'lcov', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  fakeTimers: {
    enableGlobally: true,
  },
};

module.exports = createJestConfig(customJestConfig);
