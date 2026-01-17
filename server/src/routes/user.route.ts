import { Router } from 'express';

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
router.get('/');

export default router;
