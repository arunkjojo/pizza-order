import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const Product = ({ pizza }) => {
  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleChangePrice = number => {
    const updatedPrize = +(price + parseInt(number));
    setPrice(updatedPrize);
  }

  const handleChangeSize = sizeIndex => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    handleChangePrice(difference)
  }

  const handleChangeIngrediant = (event, ingrediant) => {
    const checked = event.target.checked;
    if(checked) {
      handleChangePrice(ingrediant.price);
      setExtras(prevState => [...prevState, ingrediant]);
    }else{
      handleChangePrice(-ingrediant.price);
      setExtras(extras.filter( extra => extra._id !== ingrediant._id));
    }
  }

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value > 1? event.target.value: 1)
  }

  const handleAddToCart = () => {
    dispatch(
      addProduct({...pizza, extras, price, quantity})
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleChangeSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleChangeSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleChangeSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {pizza.extraOptions.map(ingrediant => (
            <div className={styles.option} key={ingrediant._id}>
              <input
                className={styles.checkbox}
                type="checkbox"
                id={ingrediant.text}
                name={ingrediant.text}
                onChange={(event) => handleChangeIngrediant(event, ingrediant)}
              />
              <label htmlFor={ingrediant.text}>
                {ingrediant.text} 
                <span style={{color:'red'}}>(${ingrediant.price})</span>
              </label>
            </div>
          ))}
        </div>

        <div className={styles.add}>
          <input type="number" min={1} className={styles.quantity} value={quantity} onChange={(event)=>handleChangeQuantity(event)} />
          <button className={styles.button} onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {

  let domain = 'http://localhost:3000/';
  if(process.env.SITE_DOMIAN_URL !==''){
    domain = process.env.SITE_DOMIAN_URL;
  }

  const res = await axios.get(`${domain}api/products/${params.id}`);

  return {
    props: {
      pizza: res.data
    }
  }
}

export default Product;
