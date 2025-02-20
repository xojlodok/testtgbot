import { Env } from "@humanwhocodes/env";

export const env = new Env();

export const envObj = {
  botToken: env.require("BOT_TOKEN"),
};
