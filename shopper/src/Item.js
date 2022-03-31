import React, {useState, useEffect, prevState} from "react";
import {useMatch} from "react-router";
import images from "./images";
import icons from "./icons";



function Item(props) {

    const match = useMatch("/shop/:id")

    useEffect(() => {
        console.log(props.cryptos)
        updateCart();
    })

    function updateCart() {
        const sum = props.cryptos.cryptos.reduce((partialSum, a) => partialSum + a.inCart, 0)

        props.setNumOfItems(sum)
    }

    
    const [input, setInput] = useState(1)

    function addToCart(e) {
        e.preventDefault();
        
        props.setCryptos(prevState => ({
            cryptos: prevState.cryptos.map(item => {
                return item.title === e.target.id ? {...item, inCart: item.inCart + parseInt(input)} : item
            }) 
        }))

        
    }

    const crypto = props.cryptos.cryptos.find(el => el.title === match.params.id)
    console.log(crypto)
    return(
        <div>
            <h1>{match.params.id}</h1>
            <h2>{crypto.price}</h2>
            <img src={images[match.params.id]} className="product-img"></img>

            <form >
                <div className="box">
                    <label>Amount</label>
                    <div className="plus-min">
                        <img src={icons.minus} id={match.params.id} onClick={() => input > 0 ? setInput(input - 1) : null}></img>
                        <img src={icons.plus} id={match.params.id} onClick={() => setInput(input + 1)}></img>
                    </div>
                    
                </div>

                <input type="number" id="amount" onInput={(e) => setInput(e.target.value)} value={input}></input>
                <button id={match.params.id} onClick={(e) => addToCart(e)}>Add To Cart</button>
            </form>
            
        </div>
    )
}

export default Item;