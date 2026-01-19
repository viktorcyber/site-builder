import prisma from '@/libs/client.js';
import { User } from '@/types/validates.js';

export const getUsers = async () => await prisma.user.findMany();

export async function createUser(user: User) {
  return await prisma.user.create({
    data: user,
  });
}
