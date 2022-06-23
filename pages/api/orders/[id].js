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
            try {
                const order = await Order.findByIdAndUpdate(id, req.body, {
                    new: true
                });
                res.status(200).json(order);
            } catch (error) {
                res.status(500).json(error.message);
            }
        break;

        case "DELETE":
            try {
                const order = await Order.findByIdAndDelete(id);
                res.status(200).json("The Order has been deleted!...");
            } catch (error) {
                res.status(500).json(error.message);
            }
        break;

        default:
        break;
    }
}
