import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;
  res.json({
    message: "controller login",
    email: email,
    password: password,
  });
};

export const register = (req: Request, res: Response) => {
  const { email, password } = req.body;
  res.json({
    message: "controller register",
    email: email,
    password: password,
  });
};
