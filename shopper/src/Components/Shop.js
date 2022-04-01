import React, {useState, useEffect, prevState} from "react";
import { Link, Route} from "react-router-dom";

const Shop = (props) => {


    
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        
        console.log(items)
        
    })

    const lol = "TET"
   
    return(

        <div className="shop">
            <div className="shopHeader">
                <h1>Crypto store</h1>
                
                
            </div>
            <div className="items">

                {props.cryptos.cryptos.map((item, index) => {
                    
                    return(
                    <div className="item" key={index}>
                        
                        
                        <Link to={`/shop/${item.title}`} >{item.title}</Link>
                        <div>{item.price} USD</div>
                    </div>
                )
                })}
                
            </div>
        </div>
    );
};

export default Shop;




