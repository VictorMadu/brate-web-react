import { FromSchema } from "json-schema-to-ts";
import { headerSchema } from "./schema/header.schema";
import { bodySchema } from "./schema/body.schema";
import { resxxxSchema } from "./schema/response.schema";

export type Headers = FromSchema<typeof headerSchema>;
export type Body = FromSchema<typeof bodySchema>;
export type Res = FromSchema<typeof resxxxSchema>;
