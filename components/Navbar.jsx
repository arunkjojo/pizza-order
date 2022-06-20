import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity)
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <Link href={`tel:9400247717`} passHref><div className={styles.text} style={{cursor:"pointer"}}>9400247717</div></Link>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href={`/`} passHref>
            <li className={styles.listItem} style={{cursor:"pointer"}}>Homepage</li>
          </Link>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo_200x200.png" alt="" width="160px" height="160px" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <Link href={`/cart`} passHref>
          <div className={styles.cart} style={{cursor:"pointer"}}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;