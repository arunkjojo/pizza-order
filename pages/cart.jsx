import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import styles from "../styles/Cart.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from '../redux/cartSlice'

const Cart = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };

  const createOrder = async data => {
    let domain = 'http://localhost:3000/';
    if(process.env.SITE_DOMIAN_URL !==''){
      domain = process.env.SITE_DOMIAN_URL;
    }
    try {
      const res = await axios.post(`${domain}api/orders`, data);
      dispatch(reset());
      res.status === 201 && (
        router.push("/orders/" + res.data._id)
      );
    } catch (err) {
      console.log("error",err);
    }
  }

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
          {cart.products.map((cartItem) => (
            <tr className={styles.tr} key={cartItem._id}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src={cartItem.img}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>{cartItem.title}</span>
              </td>
              <td>
                <span className={styles.extras}>
                  {cartItem.extras.map((extra) => (
                    <span key={extra._id}>{extra.text}, </span>
                  ))}
                </span>
              </td>
              <td>
                <span className={styles.price}>$ {cartItem.price}</span>
              </td>
              <td>
                <span className={styles.quantity}>{cartItem.quantity}</span>
              </td>
              <td>
                <span className={styles.total}>
                $ {cartItem.price * cartItem.quantity}
                </span>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$ 
            {Number(cart.total).toFixed(2)}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$ 0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$ 
            {Number(cart.total).toFixed(2)}
          </div>
          {open ? (
            <div className={styles.paymentMethods}>
              <button className={styles.payButton}>CASH On DELIVERY!</button>
              <PayPalScriptProvider
                options={{
                  "client-id": "ARZzEIvxw---71BKK7YGbCSQhwXQyN6YSmFsjxGdofI_RjL_UeiGQovCICjSi8sHeRpPFMQD7szNP6Q5",
                  components: "buttons",
                  currency: "USD",
                  "disable-funding": "credit,card,p24",
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={true} />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button onClick={()=>setOpen(true)} className={styles.button}>CHECKOUT NOW!</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
