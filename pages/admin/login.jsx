import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState, useRef, useEffect } from 'react'
import styles from '../../styles/Login.module.css'

const Login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(false);
    const router = useRouter();
    const usernameInput = useRef(null);
    const passwordInput = useRef(null);
    useEffect(()=>{
        if(username === null)
            usernameInput.current.focus();
    },[username])
    useEffect(()=>{
        if(password === null)
            passwordInput.current.focus();
    },[password])
    useEffect(()=>{
        usernameInput.current.focus();
    },[])
    

    const handleSignIn = async () => {
        // let domain = 'http://localhost:3000/api/login';
        // if(process.env.SITE_DOMIAN_URL !== undefined){
        //     domain = process.env.SITE_DOMIAN_URL+'api/login';
        // }
        // if(process.env.SITE_DOMIAN_URL === undefined){
        //     domain = 'https://pizza-order-arunkjojo.vercel.app/api/login';
        // }
        try {
            await axios.post(`/api/login`,{
                username, 
                password
            });
            router.push("/admin");
        } catch (error) {
            setError(true)
        }
    }

    const handleKeypress = e => {
        if(password === null)
            passwordInput.current.focus();
        if(username === null)
            usernameInput.current.focus();
            
        if ((e.code === "Enter" || e.code === "NumpadEnter") && username !== null && password !== null ) {
            handleSignIn();
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>Admin Dashboard</h1>
                {/* <form className={styles.wrapper} onSubmit={handleKeypress}> */}
                <input
                    ref={usernameInput}
                    autoFocus={true}
                    tabIndex={0}
                    type="text"
                    placeholder='Username'
                    className={styles.input}
                    onChange = {(e) => setUsername(e.target.value)}
                    onKeyPress={handleKeypress}
                />
                <input
                    ref={passwordInput}
                    tabIndex={0}
                    type="password"
                    placeholder='Password'
                    className={styles.input}
                    onChange = {(e) => setPassword(e.target.value)}
                    onKeyPress={handleKeypress}
                />
                <button
                    onClick={handleSignIn}
                    className={styles.button}
                    type="submit"
                    onKeyPress={handleKeypress}
                    tabIndex={0}
                >
                    Sign In
                </button>
                {/* </form> */}

                {error && <span className={styles.error}>Wrong Credentials!{error.message}</span>}
            </div>
        </div>
    )
}

export default Login
