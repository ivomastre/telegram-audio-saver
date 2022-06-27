import AudioModel from '../models/audio';

const saveFile = (data: string, groupId: number) => {
  return AudioModel.create({
    audio: data,
    groupId,
  });
};

export default saveFile;
