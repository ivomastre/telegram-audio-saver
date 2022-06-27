import { Telegraf, session } from 'telegraf';

import setupCommands from './commands';
import { BOT_TOKEN, PORT, URL } from './config/env';
import setupBotCommandsInfo from './config/setupBotCommands';
import setupDb from './config/setupDb';
import createSecretPath from './helpers/createSecretPath';
import commandsArgsHandler from './middlewares/commandsArgsHandler';

const bot = new Telegraf(BOT_TOKEN);
setupBotCommandsInfo(bot);

bot.use(session());
bot.use(commandsArgsHandler);

setupCommands(bot);

bot.catch((err, ctx) => {
  console.log('Error: ', err);
  ctx.reply('Message is not sent due to an error');
});
setupDb();

const secretPath = `/webhooks/${createSecretPath()}`;

bot.launch({
  webhook: {
    domain: URL,
    hookPath: secretPath,
    port: PORT,
  },
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
