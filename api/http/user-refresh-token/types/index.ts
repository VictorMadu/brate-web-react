import { FromSchema } from "json-schema-to-ts";
import { headerSchema } from "./schema/header.schema";
import { res2xxSchema } from "./schema/response.schema";

export type Headers = FromSchema<typeof headerSchema>;
export type Res = FromSchema<typeof res2xxSchema>;
