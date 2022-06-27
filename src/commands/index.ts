import { Context, Telegraf } from 'telegraf';

import getRandomAudio from './getRandomAudio';
import saveAudio from './saveAudio';

interface ICommand {
  name: string;
  fn: (ctx: Context, next: () => Promise<void>) => Promise<void>;
}

const commands: ICommand[] = [
  {
    name: 'getrandomaudio',
    fn: async (ctx, next) => {
      getRandomAudio(ctx, next);
    },
  },
  {
    name: 'saveaudio',
    fn: async (ctx, next) => {
      saveAudio(ctx, next);
    },
  },
];

const setupCommands = (bot: Telegraf<Context>): void => {
  commands.forEach(({ name, fn }) => {
    bot.command(name, fn);
  });
};

export default setupCommands;
