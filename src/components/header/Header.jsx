import React, { useEffect, useState } from "react";
import styles from './header.module.css';

const Header = ()=>{
    const [toggleBtn, setToggleBtn] = useState("Login");
    function toggleLoginLogout(){
        setToggleBtn((prev) => (prev === "Login" ? "Logout" : "Login"));
        console.log("object");
    };
    return (
        <div className={styles.header_container}>
            <img className={styles.logo} src="https://cdn-icons-png.flaticon.com/128/5126/5126437.png" />
            <ul className={styles.header_list}>
                <li className={styles.header_item}>Home</li>
                <li className={styles.header_item}>Contact</li>
                <li className={styles.header_item}>About</li>
                <li className={styles.header_item}>Order</li>
                <li className={styles.header_item}>
                    <button onClick={toggleLoginLogout}>{toggleBtn}</button>
                </li>
            </ul>
        </div>
    )
}

export  {Header};