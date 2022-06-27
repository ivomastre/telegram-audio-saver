import AudioModel, { IAudio } from '../../models/audio';

const getRandomAudioFromChat = (groupId: number): Promise<IAudio> => {
  return AudioModel.aggregate([
    { $match: { groupId } },
    { $sample: { size: 1 } },
  ]).then(audio => {
    return audio[0];
  });
};

export default getRandomAudioFromChat;
