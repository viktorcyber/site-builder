import { Role } from '@prisma/client';
import { prismaMock } from '../__mocks__/singleton.js';
import { createUser } from '@/services/user.service.js';

describe('User Service', () => {
  it('should create new user', async () => {
    const user = {
      name: 'Rich',
      email: 'hello@prisma.io',
      password: 'hashed_password',
      avatar: 'https://example.com/avatar.jpg'
    };

    prismaMock.user.create.mockRejectedValueOnce(user);

    await expect(createUser(user)).resolves.toMatchObject({
      name: 'Rich',
      email: 'hello@prisma.io'
    });
  });
});
