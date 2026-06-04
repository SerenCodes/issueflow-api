import { Request, Response } from "express";
import prisma from "../config/prisma";

export const getUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();

  res.status(200).json({
    success: true,
    data: users,
  });
};

export const getMe = async (req: Request, res: Response) => {
  const userId = (req as any).userId;

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  res.status(200).json({
    success: true,
    user: {
      id: user?.id,
      name: user?.name,
      email: user?.email,
      role: user?.role,
    },
  });
};