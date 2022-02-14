import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import "./Header.css"
const Header = () => {
    //states
    const [search, setSearch] = useState('');
    const [placeholder, setPlaceholder] = useState('search');

    //functions

    const changeSearchHandler = (event) => {
            setSearch(event.target.value)
        }
        // const changeSearchHandler = (event) => {
        //     console.log(setSearch(event.target.value))
        // }
    return ( 
    <div className = "header">
        <div className = "levelOne">
                <div className = "logInput">
                    <p> UZAJI LOGO </p>  
                    <p> < input type = "text" 
                    name = "" 
                    id = "" 
                    placeholder = { placeholder } 
                    value = { search } 
                    onChange = {(e)=>changeSearchHandler(e)}/></p> 
                </div>
            <div className = "allMenu">
                <p><Link to="/AllProducts">PRODUITS </Link></p> 
                <p> SERVICE </p> 
                <p> MENU</p>
                <p> PANIER </p>
                <p> COMPTE </p>
            </div>
        </div>
        <div className = "levelTwo">
            <div className = "services" >
                <p> Distribution </p>
                <p> Livraison </p>
                <p> Branding </p>
                <p> Marketing Digital</p>
                <p> Disign </p>
            </div>
        <div className = "notifications" >
        <p> Notifications </p>
        <p> Love </p> <p> Sing up </p>
        </div>
      </div>
    </div>
    )
}

export default Header