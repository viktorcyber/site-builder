export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: '<rootDir>/tsconfig.json',
      },
    ],
  },
  resolver: 'ts-jest-resolver',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  rootDir: '.',
  testMatch: ['<rootDir>/src/**/*.(spec|test).ts'],
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/jest.setup.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  verbose: true,
};
