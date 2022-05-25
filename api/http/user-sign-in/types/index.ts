import { FromSchema } from "json-schema-to-ts";
import { bodySchema } from "./schema/body.schema";
import { res2xxSchema, res4xxSchema } from "./schema/response.schema";

export type Body = FromSchema<typeof bodySchema>;
export type Res = FromSchema<typeof res2xxSchema>;
export type Err = FromSchema<typeof res4xxSchema>;
