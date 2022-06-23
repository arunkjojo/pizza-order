import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
    await dbConnect();

    const { 
        method, 
        query: { 
            id 
        },
        cookies
    } = req;

    const token = cookies.token;

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
            if(!token || token !== process.env.TOKEN){
                return res.status(401).json("Not Authenticated!")
            }
            try {
                const product = await Product.findByIdAndUpdate(id, req.body, {
                    new: true
                });
                res.status(200).json(product);
            } catch (error) {
                res.status(500).json(error.message);
            }
        break;

        case "DELETE":
            if(!token || token !== process.env.TOKEN){
                return res.status(401).json("Not Authenticated!")
            }
            try {
                await Product.findByIdAndDelete(id);
                res.status(200).json("The product has been deleted!...");
            } catch (error) {
                res.status(500).json(error.message);
            }
        break;

        default:
        break;
    }
}
