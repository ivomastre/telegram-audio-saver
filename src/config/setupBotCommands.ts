import { Context, Telegraf } from 'telegraf';

const setupBotCommandsInfo = async (bot: Telegraf<Context>): Promise<void> => {
  bot.telegram.setMyCommands([
    {
      command: 'getrandomaudio',
      description: 'Get a random audio',
    },
    {
      command: 'saveaudio',
      description: 'Save a audio',
    },
  ]);
};

export default setupBotCommandsInfo;
