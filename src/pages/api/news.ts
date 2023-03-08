import type { NextApiRequest, NextApiResponse } from 'next'
import newsData from '@/data/news'
import { INew } from '../../types/news';




export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<INew[]>
) {
  res.status(200).json(newsData)
}
