import { Document } from 'mongoose';

import AudioModel from './model';

export interface IAudio extends Document {
  audio: string;
  groupId: number;
}

export default AudioModel;
