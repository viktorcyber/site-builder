import { Request, Response } from 'express';
import { clerkClient, getAuth } from '@clerk/express';

import userService from '@/services/user.service.js';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async (req: Request, res: Response) => {
  const { isAuthenticated, userId } = getAuth(req);

  if (!isAuthenticated) {
    return res.status(401).json({ error: 'User not authenticated' });
  }

  const user = await clerkClient.users.getUser(userId);

  res.json(user);
};


export const getUserCredits = async (req: Request, res: Response) => {
  try {
    let x = 3
  } catch (error) {
    throw error
  }
}