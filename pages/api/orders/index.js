import dbConnect from '../../../util/mongo';
import Order from '../../../models/Order';

export default async function handler(req, res) {

  await dbConnect();

  const { method } = req;


  if(method === 'GET') {
    try {
      const orders = await Order.find();
      res.status(200).json(orders)
    } 
    catch (error) {
      res.status(500).json(error.message)
    }
  }

  if(method === 'POST') {
    try {
      // console.log(req.body)
      const order = await Order.create(req.body);
      res.status(201).json(order);
    } 
    catch (error) {
      res.status(500).json(error.message)
    }
  }
}
