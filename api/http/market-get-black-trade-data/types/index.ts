import { FromSchema } from "json-schema-to-ts";
import { querystringSchema } from "./schema/querystring.schema";
import { res2XXSchema } from "./schema/response.schema";

export type Query = FromSchema<typeof querystringSchema>;
export type Res = FromSchema<typeof res2XXSchema>;
