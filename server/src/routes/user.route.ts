import { Router } from 'express';

import { getUsers } from '@/controllers/user.controller.js';

const router = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: List a users
 *     tags: [users]
 *     responses:
 *       200:
 *         description: A list of users.
 */
router.get('/', getUsers);

export default router;
