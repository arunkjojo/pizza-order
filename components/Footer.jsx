import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            0123 A. Don Road #303.
            <br /> NewYork, 85022
            <br /> (123) 456-7890
          </p>
          <p className={styles.text}>
            5001 K. Laquie Rd #204.
            <br /> NewYork, 85022
            <br /> (123) 456-7890
          </p>
          <p className={styles.text}>
            1614 E. Erwin St #104.
            <br /> NewYork, 85022
            <br /> (123) 456-7890
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 11:00 – 22:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;