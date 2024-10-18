import React, { useEffect } from "react";
import { useState } from "react";
import styles from './home.module.css';
import {Card} from "../../components/card";
import { cardProducts } from "../../config";
import CardContainer from "../../components/CardContainer/CardContainer";
import Shimmer from "../../components/shimmer/Shimmer";

const Home = ()=>{
    const [productsArray, setProductsArray] = useState([]);
    const [searchProductArray, setSearchProductArray] = useState(productsArray);
    const [searchInput, setSearchInput] = useState("");
    function handleFilter(){
        setProductsArray(productsArray.filter((element) => {
            return element.rating>4.5;
        }));
    }
    const handleSearchRestro = async (value) => {
        await setSearchInput(value);
        console.log(searchInput, value);
        if(value!==''){
            const filteredRestro = productsArray.filter((element) => {
                return element.restaurantName.toLowerCase().includes(value.toLowerCase());
            })
            setSearchProductArray(filteredRestro);
        }else {
            setSearchProductArray(productsArray);
        }
    };
    console.log("object");
    useEffect(()=>{
        setTimeout(function(){
            setProductsArray(cardProducts);
            setSearchProductArray(cardProducts);
        }, 1000);
    }, []);
    return(<>
        <div className={styles.home_container}>
            <div className={styles.search_container}>
                <input type="text" value={searchInput} onChange={(event) => {handleSearchRestro(event.target.value)}}/>
                <button onClick={handleSearchRestro}>Search</button>
                <button onClick={handleFilter}>Filter</button>
            </div>
            {<CardContainer productsArray={searchProductArray} />}
        </div>
    </>
    )
}

export default Home;