import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];

  const decoded = jwt.verify(
  token,
  process.env.JWT_SECRET as string
);

(req as any).userId = (decoded as any).id;

return next();

  }

  return res.status(401).json({
    success: false,
    message: "Not authorized",
  });
};