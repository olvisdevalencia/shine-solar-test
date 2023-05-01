const transformSwagger: object = {
  "/transform": {
    "x-swagger-router-controller": "main-controller",
    post: {
      security: [
        {
          Bearer: [],
        },
      ],
      operationId: "createTransformPost",
      description:
        "Rate limits incoming requests to a maximum of 10 requests per minute per client IP address. Requests beyond this limit are rejected with an HTTP 429 (Too Many Requests) status code.",
      parameters: [
        {
          name: "body information required",
          in: "body",
          required: true,
          type: "object",
          schema: {
            $ref: "#/definitions/Transform",
          },
        },
      ],
      responses: {
        "200": {
          description: "Success",
          schema: {
            $ref: "#/definitions/Resource",
          },
        },
        "403": {
          description: "Access Denied",
          schema: {
            $ref: "#/definitions/Errors",
          },
        },
        "501": {
          description: "Access Denied",
          schema: {
            $ref: "#/definitions/Errors",
          },
        },
      },
    },
  },
};

module.exports = {
  ...transformSwagger,
};
