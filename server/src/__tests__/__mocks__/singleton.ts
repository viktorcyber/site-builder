import { jest } from '@jest/globals';
import { PrismaClient } from '@prisma/client';
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended'

jest.mock('@/libs/client.js', () => ({
  __esModule: true,
    default: prismaMock,
}))

export const prismaMock =  mockDeep<PrismaClient>() as unknown as DeepMockProxy<PrismaClient>

beforeEach(() => {
  mockReset(prismaMock)
})