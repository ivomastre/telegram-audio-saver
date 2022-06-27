import { Context } from 'telegraf';
import { Message } from 'telegraf/typings/core/types/typegram';

import getRandomAudioFromChat from './getRandomAudioFromChat';

const getRandomAudio = async (
  ctx: Context,
  next: () => Promise<void>
): Promise<Message.VoiceMessage | Message.TextMessage | void> => {
  if (!ctx.message) return next();

  const groupId = ctx.message.chat.id;

  const data = await getRandomAudioFromChat(groupId);

  if (!data) return ctx.reply('Não foi possível encontrar nenhum áudio.');

  return ctx.replyWithVoice({ source: Buffer.from(data.audio, 'base64') });
};

export default getRandomAudio;
