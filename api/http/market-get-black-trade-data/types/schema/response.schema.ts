export const res2XXSchema = {
  type: "object",
  properties: {
    status: { type: "boolean" },
    msg: { type: "string" },
    data: {
      type: "object",
      properties: {
        traders: {
          type: "array",
          items: {
            type: "object",
            properties: {
              seller_id: { type: "string" },
              seller_name: { type: "string" },
              base_give: { type: "string" },
              quota_receive: { type: "string" },
              rate: { type: "number" },
              available_sell: { type: "number" },
            },
            additionalProperties: false,
            required: [
              "seller_id",
              "seller_name",
              "base_give",
              "quota_receive",
              "rate",
              "available_sell",
            ],
          },
        },
        pagination: {
          type: "object",
          properties: {
            skipped: { type: "number" },
            page_count: { type: "number" },
          },
          required: ["skipped", "page_count"],
          additionalProperties: false,
        },
      },
      required: ["traders", "pagination"],
      additionalProperties: false,
    },
  },
  required: ["status", "msg", "data"],
  additionalProperties: false,
} as const;

export const res4XXSchema = {
  type: "object",
  properties: {
    status: { type: "boolean" },
    msg: { type: "string" },
  },
  required: ["status", "msg"],
  additionalProperties: false,
} as const;
