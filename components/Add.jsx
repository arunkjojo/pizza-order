import React, { useState } from 'react';
import styles from '../styles/Add.module.css'
import axios from 'axios';
import { useRouter } from 'next/router';

const Add = ({ setClose }) => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [prices, setPrices] = useState([]);
    const [extra, setExtra] = useState(null);
    const [extraOptions, setExtraOptions] = useState([]);
    
    const changePizzaPrice =(value, index) =>{
        let currentPrice = prices;
        currentPrice[index]=value;
        setPrices(currentPrice);
    }
    const changeExtraOption = (e) =>{
        setExtra({
            ...extra,
            [e.target.name]: e.target.value
        })
    }
    const handleExtra = () => {
        setExtraOptions(prevExtra => [...prevExtra, extra]);
    }

    const handleCreate = async () => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "uploads");
        try {
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dlhpiunay/image/upload", data);
            const {url} = uploadRes.data;
            const newProduct = {
                title,
                desc,
                img: url,
                prices,
                extraOptions
            }
            await axios.post("http://localhost:3000/api/products", newProduct)
            setClose(true);
        } catch (error) {
            console.log(error)
        }
        // data.append("title", title);
        // data.append("desc", desc);
        // data.append("prices", prices);
        // data.append("extraOptions", extraOptions);
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span onClick = {() => setClose(true)} className={styles.close}>X</span>

                <h1>Add New Pizza</h1>
                <div className={styles.item}>
                    <label className={styles.label}>Choose an Image</label>
                    <input 
                        className={styles.input} 
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Name</label>
                    <input 
                        className={styles.input} 
                        type="text"
                        placeholder='Title'
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Description</label>
                    <textarea 
                        rows={4}
                        className={styles.input} 
                        type="text"
                        placeholder='Description'
                        onChange={(e)=>setDesc(e.target.value)}
                    ></textarea>
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Price</label>
                    <div className={styles.priceContainer}>
                        <input 
                            className={`${styles.input} ${styles.indexSm}`} 
                            type="number"
                            placeholder='Small'
                            step=".01"
                            onChange={(e)=>changePizzaPrice(e.target.value,0)}
                        />
                        <input 
                            className={`${styles.input} ${styles.indexSm}`} 
                            type="number"
                            placeholder='Medium'
                            step=".01"
                            onChange={(e)=>changePizzaPrice(e.target.value,1)}
                        />
                        <input 
                            className={`${styles.input} ${styles.indexSm}`} 
                            type="number"
                            placeholder='Large'
                            step=".01"
                            onChange={(e)=>changePizzaPrice(e.target.value,2)}
                        />
                    </div>
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Extra Options</label>
                    <div className={styles.extra}>
                        <input 
                            className={`${styles.input} ${styles.indexSm}`}
                            type="text"
                            placeholder="Item"
                            name="text"
                            onChange={(e)=>changeExtraOption(e)}
                        />
                        <input 
                            className={styles.input} 
                            type="number"
                            step="0.01"
                            name="price"
                            placeholder="Price"
                            onChange={(e)=>changeExtraOption(e)}
                        />
                        <button className={styles.extraButton} onClick=
                        {handleExtra}>Add</button>
                    </div>
                    <div className={styles.extraItems}>
                        {extraOptions.map(option => (
                            <span key={option.text} className={styles.extraItem}>
                                {option.text} : ${option.price}
                            </span>
                        ))}
                    </div>
                </div>
                <button className={styles.addButton} onClick={handleCreate}>Create</button>
            </div>
        </div>
    )
}

export default Add