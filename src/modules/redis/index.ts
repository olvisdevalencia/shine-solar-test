import ExpressRedisCache from "express-redis-cache";

const cache = ExpressRedisCache({
  expire: Number(process.env.REDIS_EXPIRE) || 60,
  host: process.env.REDIS_HOST || "localhost",
  port: process.env.REDIS_PORT || "",
  auth_pass: process.env.REDIS_PASSWORD || "",
  prefix: process.env.NODE_ENV != "production" ? "dev" : "prod",
});

cache.on("message", function (message: any) {
  console.log("::REDIS::MESSAGE::", message);
});

cache.on("error", function (error: any) {
  console.log("::REDIS::ERROR::", error);
});

cache.on("connected", function () {
  console.log("::REDIS::CONNECTED::");
});

cache.on("disconnected", function () {
  console.log("::REDIS::DISCONNECTED::");
});

module.exports = {
  cache,
};
