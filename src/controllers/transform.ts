import { Request, Response } from "express";

export const postTransform: any = (
  req: Request,
  res: Response
) => {
  res.json(req.body);
};

module.exports = {
  postTransform
};
