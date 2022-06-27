import axios from 'axios';

const downloadFromTelegram = async (url: string) => {
  const dataStream = await axios.get(url, { responseType: 'arraybuffer' });
  const buffer = Buffer.from(dataStream.data, 'base64');

  return buffer;
};

export default downloadFromTelegram;
