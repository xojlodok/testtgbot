import { envObj } from "./../index";
import { Bot } from "grammy";

const bot = new Bot(envObj.botToken);

bot.use(async (ctx, next) => {
  if (ctx.message) {
    await ctx.reply("hello");
    console.log(ctx.message.text);
  }
});

bot.start();
