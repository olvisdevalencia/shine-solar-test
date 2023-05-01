import { RequestHandler, Request, Response, NextFunction } from "express";

const dataTransformer: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  if (req.method === "POST") {
    req.body = JSON.parse(
      JSON.stringify(req.body, (key, value) => {
        if (value === null || value === undefined) {
          return undefined;
        }
        return value;
      })
    );
  }
  next();
};

export default dataTransformer;
