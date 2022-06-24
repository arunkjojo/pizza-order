import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Admin.module.css";

const Index = ({ products, orders }) => {
    const [pizzaList, setPizzaList] = useState(products);
    const [orderList, setOrderList] = useState(orders);
    const status = ["preparing", "On the way", "Delivered", "Completed"];
    const handleDeleteProduct = async id => {
        if(window.confirm('Are you sure, Delete this item?')){
            let domain = 'http://localhost:3000/';
            if(process.env.SITE_DOMIAN_URL !==''){
                domain = process.env.SITE_DOMIAN_URL;
            }
            try {
                const res = await axios.delete(`${domain}api/products/`+id);
                setPizzaList(
                    pizzaList.filter(pizza => pizza._id !== id)
                )
            } catch (error) {
                console.log(error)
            }
        }
    }
    const handleOrderNextStage = async (id) => {
        const orderItem = orderList.filter(order => order._id === id)[0];
        const currentStatus = orderItem.status;

        if(currentStatus < 3){
            let domain = 'http://localhost:3000/';
            if(process.env.SITE_DOMIAN_URL !==''){
                domain = process.env.SITE_DOMIAN_URL;
            }
            try {
                const res = await axios.put(`${domain}api/orders/`+ id, {
                    status: currentStatus + 1
                });
                console.log([
                    res.data,
                    ...orderList.filter(order => order._id !== id),
                ])
                setOrderList([
                    res.data,
                    ...orderList.filter(order => order._id !== id),
                ]);
            } catch (error) {
                console.log(error)
            }
        }
    }
    const handleOrderPrevStage = async (id) => {
        const orderItem = orderList.filter(order => order._id === id)[0];
        const currentStatus = orderItem.status;

        if(currentStatus > -1){
            let domain = 'http://localhost:3000/';
            if(process.env.SITE_DOMIAN_URL !==''){
                domain = process.env.SITE_DOMIAN_URL;
            }
            try {
                const res = await axios.put(`${domain}api/orders/`+ id, {
                    status: currentStatus - 1
                });
                console.log([
                    res.data,
                    ...orderList.filter(order => order._id !== id),
                ])
                setOrderList([
                    res.data,
                    ...orderList.filter(order => order._id !== id),
                ]);
            } catch (error) {
                console.log(error)
            }
        }
    }
    const handleDeleteOrder = async (id) => {
        if(window.confirm('Are you sure, Delete this order?')){
            let domain = 'http://localhost:3000/';
            if(process.env.SITE_DOMIAN_URL !==''){
                domain = process.env.SITE_DOMIAN_URL;
            }
            try {
                const res = await axios.delete(`${domain}api/orders/`+id);
                setOrderList(
                    orderList.filter(order => order._id !== id)
                )
            } catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>Products</h1>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.trTitle}>
                        <th>Image</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    {pizzaList.map((product) => (
                        <tbody key={product._id}>
                        <tr className={styles.tr}>
                            <td>
                            <Image
                                src={product.img}
                                width={50}
                                height={50}
                                objectFit="cover"
                                alt={product.title}
                            />
                            </td>
                            <td>{product._id.slice(0,5)}...</td>
                            <td>{product.title}</td>
                            <td>${product.prices[0]}</td>
                            <td>
                            <button className={styles.button}>Edit</button>
                            <button className={styles.button} onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                            </td>
                        </tr>
                        </tbody>
                    ))}
                </table>
            </div>
            <div className={styles.item}>
                <h1 className={styles.title}>Orders</h1>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.trTitle}>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Price</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    {orderList.map((order) => (
                        <tbody key={order._id}>
                            <tr className={styles.tr}>
                                <td>
                                <Link passHref href={"/orders/"+order._id}>
                                    <a className={styles.link}>
                                        {order._id.slice(0,5)}...
                                    </a>
                                </Link>
                                </td>
                                <td>{order.customer}</td>
                                <td>${order.total}</td>
                                <td>{order.method == 0 ? <span>Cash</span>:<span>Paid</span>}</td>
                                <td>{status[order.status]}</td>
                                <td>
                                    {order.status !== 3 && (
                                        <button onClick={()=> handleOrderNextStage(order._id)}>Next Stage</button>
                                    )}
                                    {order.status !== 0 && (
                                        <button onClick={()=> handleOrderPrevStage(order._id)}>Prev Stage</button>
                                    )}
                                    <button className={styles.button} onClick={() => handleDeleteOrder(order._id)}>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    );
};

export const getServerSideProps = async (ctx) => {
    const myCookie = ctx.req?.cookies || "";
    if(myCookie.token !== process.env.TOKEN){
        return{
            redirect: {
                destination: "/admin/login",
                parmanent: false
            }
        }
    }

    let domain = 'http://localhost:3000/';
    if(process.env.SITE_DOMIAN_URL !==''){
        domain = process.env.SITE_DOMIAN_URL;
    }

    const productRes = await axios.get(`${domain}api/products/`);
    const orderRes = await axios.get(`${domain}api/orders/`);

    return {
        props: {
        products: productRes.data,
        orders: orderRes.data,
        },
    };
};

export default Index;
