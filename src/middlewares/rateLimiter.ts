import { RequestHandler } from "express";
import rateLimit from "express-rate-limit";

const limiter: RequestHandler = rateLimit({
  windowMs: Number(process.env.RATE_LIMITER_TIME) * 1000 || 60 * 1000,
  max: Number(process.env.RATE_LIMITER_REQUEST) || 10,
  message: "Too many requests from this IP, please try again later"
});

export default limiter;