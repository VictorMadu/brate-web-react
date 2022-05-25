import { FromSchema } from "json-schema-to-ts";
import { headerSchema } from "./schema/header.schema";
import { querySchema } from "./schema/query.schema";
import { res2XXSchema, res4XXSchema } from "./schema/response.schema";

export type Headers = FromSchema<typeof headerSchema>;
export type Query = FromSchema<typeof querySchema>;
export type Res = FromSchema<typeof res2XXSchema>;
export type Err = FromSchema<typeof res4XXSchema>;
