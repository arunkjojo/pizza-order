import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import styles from '../../styles/Login.module.css'

const Login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(false);
    const router = useRouter();
    const handleSignIn = async () => {
        let domain = 'http://localhost:3000/';
        if(process.env.SITE_DOMIAN_URL !==''){
            domain = process.env.SITE_DOMIAN_URL;
        }
        try {
            await axios.post(`${domain}api/login`,{
                username, 
                password
            });
            router.push("/admin");
        } catch (error) {
            setError(true)
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>Admin Dashboard</h1>
                <input
                    type="text"
                    placeholder='Username'
                    className={styles.input}
                    onChange = {(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Password'
                    className={styles.input}
                    onChange = {(e) => setPassword(e.target.value)}
                />
                <button
                    onClick={handleSignIn}
                    className={styles.button}
                >
                    Sign In
                </button>

                {error && <span className={styles.error}>Wrong Credentials!{error.message}</span>}
            </div>
        </div>
    )
}

export default Login
