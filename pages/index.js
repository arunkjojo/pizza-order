import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true)
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/icon.png?v=00.00.00.01" />
      </Head>
      <Featured />

      {admin && <AddButton setClose={setClose} />}

      <PizzaList pizzaList={pizzaList} />

      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;
  if(myCookie.token === process.env.TOKEN){
    admin = true;
  }
  let domain = 'http://localhost:3000/';
  if(process.env.SITE_DOMIAN_URL !==undefined){
    domain = process.env.SITE_DOMIAN_URL;
  }

  const res = await axios.get(`${domain}api/products`);
  return {
    props: {
      pizzaList: res.data,
      admin
    }
  }
}