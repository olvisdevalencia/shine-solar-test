import express, { Router } from "express";
const router: Router = express();
import * as path from "path";
const { transformController } = require(path.resolve(__dirname, "../controllers"));

const { cache } = require(path.resolve(__dirname, "../modules/redis"));
router.post("/", cache.route(), transformController.postTransform);

export default router;
