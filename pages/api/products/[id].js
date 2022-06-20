import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

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
                const product = await Product.findById(id);
                res.status(200).json(product);
            } catch (error) {
                res.status(500).json(error.message);
            }
        break;

        case "PUT":
            try {
                const product = await Product.create(req.body);
                res.status(201).json(product);
            } catch (error) {
                res.status(500).json(error.message);
            }
        break;

        case "DELETE":
            try {
                const product = await Product.create(req.body);
                res.status(201).json(product);
            } catch (error) {
                res.status(500).json(error.message);
            }
        break;

        default:
        break;
    }
}
