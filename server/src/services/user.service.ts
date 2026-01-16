import prisma from '@/config/prisma.js';

const getAllUsers = async () => await prisma.user.findMany();

export default { getAllUsers };
