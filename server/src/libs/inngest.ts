import { Inngest } from 'inngest';

import prisma from '@/libs/client.js';

export const inngest = new Inngest({ id: 'yobuilder' });

const syncNewUser = inngest.createFunction(
  { id: 'sync-data-user' },
  { event: 'clerk/user.created' },
  async ({ event, step }) => {
    const { id, first_name, last_name, email_addresses, image_url } =
      event.data;

    await step.run('create-user-in-db', async () => {
      return await prisma.user.create({
        data: {
          clerkId: id,
          email: email_addresses[0].email_address,
          name: `${first_name} ${last_name}`,
          avatar: image_url,
        },
      });
    });

    await step.run('gift-free-credits', async () => {
      return await prisma.transaction.create({
        data: {
          userId: id,
          amount: 0,
          credits: 10,
          status: true,
          planId: 'FREE_TRIAL',
        },
      });
    });
  }
);

const syncRemoveUser = inngest.createFunction(
  { id: 'sync-user-remove' },
  { event: 'clerk/user.deleted' },
  async ({ event, step }) => {
    const { id } = event.data;

    await step.run('remove-user-in-db', async () => {
      return await prisma.user.delete({
        where: {
          clerkId: id,
        },
      });
    });
  }
);

export const syncUpdateUser = inngest.createFunction(
  { id: 'sync-user-update' },
  { event: 'clerk/user.updated' },
  async ({ event, step }) => {
    const { id, first_name, last_name, email_addresses, image_url } =
      event.data;

    await step.run('update-user-in-db', async () => {
      return await prisma.user.update({
        where: { clerkId: id },
        data: {
          name: `${first_name} ${last_name}`,
          avatar: image_url,
          email: email_addresses[0].email_address,
        },
      });
    });
  }
);

export const functions = [syncNewUser, syncRemoveUser, syncUpdateUser];
