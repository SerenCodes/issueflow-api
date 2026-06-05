import { Request, Response } from "express";
import prisma from "../config/prisma";

export const createProject = async (req: Request, res: Response) => {
  const { name, organisationId } = req.body;
  const userId = (req as any).userId;

  const organisation = await prisma.organisation.findFirst({
    where: {
      id: organisationId,
      ownerId: userId,
    },
  });

  if (!organisation) {
    return res.status(403).json({
      success: false,
      message: "Not authorised to create project for this organisation",
    });
  }

  const project = await prisma.project.create({
    data: {
      name,
      organisationId,
    },
  });

  res.status(201).json({
    success: true,
    project,
  });
};

export const getProjects = async (req: Request, res: Response) => {
  const { organisationId } = req.params;
  const userId = (req as any).userId;

  const organisation = await prisma.organisation.findFirst({
    where: {
      id: organisationId,
      ownerId: userId,
    },
  });

  if (!organisation) {
    return res.status(403).json({
      success: false,
      message: "Not authorised",
    });
  }

  const projects = await prisma.project.findMany({
    where: {
      organisationId,
    },
  });

  res.status(200).json({
    success: true,
    projects,
  });
};