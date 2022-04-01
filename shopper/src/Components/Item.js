import React, {useState, useEffect, prevState} from "react";
import {useMatch} from "react-router";

import icons from "../icons/icons";



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

    const minus = () => input > 0 ? setInput(input - 1) : null;
    const plus = () => setInput(input + 1);

    const crypto = props.cryptos.cryptos.find(el => el.title === match.params.id)
    console.log(crypto)
    return(
        <div className="item">
            <h1>{match.params.id}</h1>
            <h2>{crypto.price} USD</h2>
            
            <form >
                <div className="box">
                <input type="number" id="amount" onInput={(e) => setInput(e.target.value)} value={input}></input>
                    <div className="plus-min">
                        <MinusButton id={match.params.id} onClick={minus}></MinusButton>
                        <PlusButton id={match.params.id} onClick={plus}></PlusButton>    
                    </div>
                </div>
                
                <button id={match.params.id} onClick={(e) => addToCart(e)}>Add To Cart</button>
            </form>
            
        </div>
    )
}


export function PlusButton(props) {
    return(
        <img src={icons.plus} id={props.id} onClick={props.onClick} ></img>
    )
}

export function MinusButton(props) {
    return <img src={icons.minus} id={props.id} onClick={props.onClick}></img>
}




export default Item;