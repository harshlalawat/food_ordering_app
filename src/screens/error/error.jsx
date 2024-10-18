import React from "react";
import styles from './error.module.css';
import { useRouteError } from "react-router-dom";

const Error = () => {
    const obj = useRouteError();
    console.log(obj);
    return (<>
        <h1>Error</h1>
        <h2>{obj.data}</h2>
        <h2>Status: {obj.status}</h2>
    </>)
}

export default Error;