import { NextApiRequest, NextApiResponse } from 'next';
import { getScreenshot } from '../../utils/getThumbnail';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, type, description } = req.query;

  const file = await getScreenshot(title, type, description);

  res.setHeader('Content-Type', 'image/png');
  res.end(file);
};
