import { FromSchema } from "json-schema-to-ts";
import { res2xxSchema } from "./schema/response.schema";

export type Res = FromSchema<typeof res2xxSchema>;
