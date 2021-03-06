export const querystringSchema = {
  type: "object",
  properties: {
    base: { type: ["string", "array"], items: { type: "string" }, maxItems: 10 },
    quota: { type: ["string", "array"], items: { type: "string" }, maxItems: 10 },
    page_offset: { type: "number" },
    page_count: { type: "number" },
  },
  additionalProperties: false,
} as const;
