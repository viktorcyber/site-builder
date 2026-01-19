import { Request, Response } from 'express';

import { getUsers } from '@/services/user.service.js';

export const create = async (req: Request, res: Response) => {};

export const list = async (req: Request, res: Response) => {
  try {
    const data = await getUsers();
    return res.json(data);
  } catch (error) {
    throw error;
  }
};
