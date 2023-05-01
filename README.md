# Rate Limiter and Data Transformation Service

Minimal boilerplate to start a Express.js project using TypeScript, and swagger docs.
This is a Node.js service that applies rate limiting and data transformation rules to incoming requests. The service accepts incoming requests from a client and applies the following rules:

1. Rate limits incoming requests to a maximum of 10 requests per minute per client IP address. Requests beyond this limit are rejected with an HTTP 429 (Too Many Requests) status code.

2. Transforms the data payload of incoming POST requests to remove any fields with a value of null or undefined.

3. Returns the transformed payload to the client as a JSON response.


The service uses Node.js and the following libraries:

- Express for the web server
- express-rate-limit for the rate limiter middleware
- redis for persistent storage of rate limit information


## Prerequisites
Before you can use this service, you will need to have the following software 

installed on your system:
```
Node.js (version 14 or later)
Redis
```

## Quick Start

create a .env file
```
cp -R .env.example .env
```

To install this dependency use:
```
yarn install
```

To build only the server:
```
yarn build
```

To run the server in development mode:
```
yarn dev
```

Postman example:
```
curl -X POST -H "Content-Type: application/json" -d '{"foo": null, "bar": 123}' 
http://localhost:3000/api/transform
```

The server wil run by default on (watch console):

```
🌍 Server listening on port http://localhost:3000/api/health

Test directly in swagger already has an example of use: 

🚀 Swagger UI available http://localhost:3000/api/swagger/api-docs
```

## Credits
This service was created by Olvis Quintana.
