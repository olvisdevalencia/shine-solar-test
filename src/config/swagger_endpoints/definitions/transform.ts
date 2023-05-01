const optionsDef: object = {
  type: "object",
  properties: {
    foo: {
      type: "string",
      example: null,
    },
    type: {
      type: "integer",
      example: 0,
    },
  },
}

module.exports = {
  ...optionsDef,
};
