import type { Config } from "jest";
import { createDefaultEsmPreset } from "ts-jest";

const presetConfig = createDefaultEsmPreset({});

export default {
  ...presetConfig,
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
  testMatch: ['**/src/__tests__/**/*.(spec|test).ts'],
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/__mocks__/singleton.ts'],
  preset: 'ts-jest',
  clearMocks: true,
  testPathIgnorePatterns: ['/node_modules/'],
  verbose: true,
} satisfies Config;
