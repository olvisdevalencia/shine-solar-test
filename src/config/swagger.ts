import * as path from "path";
const {
  server: { SWAGGER, SWAGGER_FULL, SWAGGER_SCHEME },
} = require(path.resolve(__dirname, "./index"));

const {
  auth,
  transform
} = require(path.resolve(__dirname, "./swagger_endpoints/index"));

const {
  Authentication,
  Errors,
  Transform,
  Resource,
  Token
} = require(path.resolve(__dirname, "./swagger_endpoints/definitions/index"));

const swagger: object = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Shine Solar, library API",
    description: "Developers api docs - Shine rest api library.",
    termsOfService: SWAGGER_FULL,
    contact: {
      name: "API Support",
      url: SWAGGER_FULL,
      email: "quintanaolvis@gmail.com",
    },
  },
  host: SWAGGER,
  basePath: "/api",
  schemes: SWAGGER_SCHEME,
  securityDefinitions: {
    Bearer: {
      type: "apiKey",
      name: "Authorization",
      in: "header",
      description:
        "For accessing the API a valid JWT token must be passed in all the queries in\nthe 'Authorization' header.\n\n\nA valid JWT token is generated by the API and returned as answer of a call\nto the route /user/login giving a valid user & password.\n\n\nThe following syntax must be used in the 'Authorization' header :\n\n    Bearer xxxxxx.yyyyyyy.zzzzzz\n",
    },
  },
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    ...auth,
    ...transform
  },
  definitions: {
    Authentication,
    Errors,
    Transform,
    Resource,
    Token
  },
};

export = swagger;
