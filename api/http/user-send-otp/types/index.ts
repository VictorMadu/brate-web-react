import { FromSchema } from "json-schema-to-ts";
import { paramsSchema } from "./schema/param.schema";
import { resxxxSchema } from "./schema/response.schema";

export type Params = FromSchema<typeof paramsSchema>;
export type Res = FromSchema<typeof resxxxSchema>;
