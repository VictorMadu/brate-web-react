import { FromSchema } from "json-schema-to-ts";
import { headerSchema } from "./schema/header.schema";
import { resxxxSchema } from "./schema/response.schema";

export type Headers = FromSchema<typeof headerSchema>;
export type Res = FromSchema<typeof resxxxSchema>;
