import { Request, Response } from "express";
import prisma from "../config/prisma";

export const createIssue = async (req: Request, res: Response) => {
  const { title, description, priority, projectId } = req.body;

  const project = await prisma.project.findFirst({
    where: {
      id: projectId,
    },
  });

  if (!project) {
    return res.status(404).json({
      success: false,
      message: "Project not found",
    });
  }

  const issue = await prisma.issue.create({
    data: {
      title,
      description,
      priority,
      projectId,
    },
  });

  res.status(201).json({
    success: true,
    issue,
  });
};

export const getIssues = async (req: Request, res: Response) => {
  const { projectId } = req.params;

  const issues = await prisma.issue.findMany({
    where: {
      projectId,
    },
  });

  res.status(200).json({
    success: true,
    issues,
  });
};


export const updateIssueStatus = async (
  req: Request,
  res: Response
) => {
  const { issueId } = req.params;
  const { status } = req.body;

  const issue = await prisma.issue.update({
    where: {
      id: issueId,
    },
    data: {
      status,
    },
  });

  res.status(200).json({
    success: true,
    issue,
  });
};