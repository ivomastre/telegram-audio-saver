import { Schema, model } from 'mongoose';

import { IAudio } from './index';

const schema = new Schema<IAudio>(
  {
    audio: {
      type: String,
      required: true,
    },
    groupId: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const AudioModel = model<IAudio>('Audio', schema);
export default AudioModel;
