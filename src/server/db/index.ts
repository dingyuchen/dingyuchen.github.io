import { connect } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

import { env } from "~/env.mjs";
import * as schema from "./schema";

export const db = drizzle(
  connect({
    host: env.DATABASE_URL,
    username: env.DATABASE_USERNAME,
    password: env.DATABASE_PASSWORD,
  }),
  { schema }
);
