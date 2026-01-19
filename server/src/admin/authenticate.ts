import argon2 from 'argon2';

import prisma from '@/libs/client.js';

/**
 * Make sure to modify "authenticate" to be a proper authentication method
 */
const provider = async (email: string, password: string) => {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (
    user &&
    user.password &&
    (await argon2.verify(user.password, password)) &&
    user.role === 'ADMIN'
  ) {
    return Promise.resolve(user);
  }
  return null;
};

export default provider;
