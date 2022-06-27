import { Context } from 'telegraf';
import { Message } from 'telegraf/typings/core/types/typegram';

import downloadFromTelegram from '../../helpers/downloadFromTelegram';
import saveFile from '../../helpers/saveFile';

const saveAudio = async (
  ctx: Context,
  next: () => Promise<void>
): Promise<Message.TextMessage | void> => {
  console.log(ctx.message);
  if (
    !ctx.message ||
    !('reply_to_message' in ctx.message) ||
    !ctx.message.reply_to_message ||
    !('voice' in ctx.message.reply_to_message)
  )
    return next();

  const { href } = await ctx.telegram.getFileLink(
    ctx.message.reply_to_message.voice.file_id
  );

  const fileBuffer = await downloadFromTelegram(href);

  await saveFile(fileBuffer.toString('base64'), ctx.message.chat.id);

  return ctx.replyWithMarkdown(`Audio salvado com sucesso!`);
};

export default saveAudio;
