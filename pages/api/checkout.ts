import { NextApiRequest, NextApiResponse } from 'next';

const checkout = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' });
};

export default checkout;
