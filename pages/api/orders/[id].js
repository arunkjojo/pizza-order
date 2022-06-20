import dbConnect from "../../../util/mongo";
import Order from "../../../models/Order";

export default async function handler(req, res) {
    await dbConnect();

    const { 
        method, 
        query: { 
            id 
        } 
    } = req;

    switch (method) {
        case "GET":
            try {
                const order = await Order.findById(id);
                res.status(200).json(order);
            } catch (error) {
                res.status(500).json(error.message);
            }
        break;

        case "PUT":
            // try {
            //     const order = await Order.create(req.body);
            //     res.status(201).json(order);
            // } catch (error) {
            //     res.status(500).json(error.message);
            // }
        break;

        case "DELETE":
            // try {
            //     const order = await Order.create(req.body);
            //     res.status(201).json(order);
            // } catch (error) {
            //     res.status(500).json(error.message);
            // }
        break;

        default:
        break;
    }
}
