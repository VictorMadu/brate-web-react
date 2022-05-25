import { FromSchema } from "json-schema-to-ts";
import { bodySchema } from "./schema/body.schema";
import { resxxxSchema } from "./schema/response.schema";

export type Body = FromSchema<typeof bodySchema>;
export type Res = FromSchema<typeof resxxxSchema>;
