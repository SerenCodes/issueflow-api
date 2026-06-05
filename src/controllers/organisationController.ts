import { Request, Response } from "express";
import prisma from "../config/prisma";

export const createOrganisation = async (
  req: Request,
  res: Response
) => {
  const { name } = req.body;

  const ownerId = (req as any).userId;

  const organisation = await prisma.organisation.create({
    data: {
      name,
      ownerId,
    },
  });

  res.status(201).json({
    success: true,
    organisation,
  });
};

export const getOrganisations = async (req: Request, res: Response) => {
  const ownerId = (req as any).userId;

  const organisations = await prisma.organisation.findMany({
    where: { ownerId },
  });

  res.status(200).json({
    success: true,
    organisations,
  });
};