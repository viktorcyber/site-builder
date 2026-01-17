import { NextFunction, Request, Response } from 'express';

export default async (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack)
  res.status(401).send('Unauthenticated!')
}