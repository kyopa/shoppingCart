import { useEffect, useState } from "react";
import {MinusButton, PlusButton} from "./Item"
import { Link } from "react-router-dom";


function Checkout(props) {

    const [total, setTotal] = useState(0);
    const array = [];
    
    
    useEffect(() => {
        console.log("HEY HO");
        console.log(array)
        setTotal(array.reduce((prev, curr) => prev + curr, 0))
    }, [array])

    let buttonEl;

    if (props.cryptos.cryptos.some(crypto => crypto.inCart > 0)) {
        buttonEl = <button>
            <Link to="/shop/checkout/pay">Pay</Link>
        </button>
    }

    function editCart(e, sym) {
        if (sym === "minus") {

            props.setCryptos(prevState => ({
                cryptos: prevState.cryptos.map(item => {
                    return item.title === e.target.id ? {...item, inCart: item.inCart - 1} : item
                }) 
            }))
            props.setNumOfItems(props.numOfItems - 1)
        } else if (sym === "plus") {
            props.setCryptos(prevState => ({
                cryptos: prevState.cryptos.map(item => {
                    return item.title === e.target.id ? {...item, inCart: item.inCart + 1} : item
                }) 
            }))
            props.setNumOfItems(props.numOfItems + 1)
        }
    }

    return(
        <div className="checkout">
            
            <h1 >Checkout out coming sooooooon!</h1>

            {props.cryptos.cryptos.map((item, index) => {
                
                let el;
                let price;
                
                if (typeof item.price === "string") {
                    price = item.price.replace(/,/g,'')
                } else {
                    price = item.price
                }
                if (item.inCart !== 0) {
                    
                    array.push(item.inCart * price)
                    el = <div className="buying-items" >
                            <h3 >{item.inCart}</h3>
                            <h3 >{item.title}</h3>
                            <h3>({item.inCart * price } USD)</h3>
                            
                            
                            <MinusButton id={item.title} onClick={(e) => editCart(e, "minus")}></MinusButton>
                            <PlusButton id={item.title} onClick={(e) => editCart(e, "plus")}></PlusButton>

                        </div>
                }
                return (
                    <div>
                        {el}

                        
                        
                    </div>
                )
            })}
            <h1>total: {total} USD</h1>
            
            {buttonEl}
            
            
        </div>
    )
}

export function Pay() {
    return(
        <div>
            <button id="go-back">
                <Link to="/shop/checkout">Go Back</Link>

            </button>
            
            <h2>This feature has not been implemented yet sorry</h2>
        </div>
    )
}

export default Checkout;