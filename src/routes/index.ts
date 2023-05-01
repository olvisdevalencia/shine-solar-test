import express, { Router } from "express";
import limiter from "../middlewares/rateLimiter";
import dataTransformer from "../middlewares/dataTransformer";
import authVerifier from "../middlewares/auth";
import authRouter from "../routes/auth";
import transformRouter from "../routes/transform";
import healthRouter from "../routes/health";
import swaggerRouter from "../routes/swagger";

const router: Router = express();

router.use("/auth", authRouter);
router.use(limiter);
router.use(dataTransformer);
//router.use("/transform", authVerifier, transformRouter);
router.use("/transform", transformRouter);
router.use("/health", healthRouter);
router.use("/swagger", swaggerRouter);

module.exports = router;
