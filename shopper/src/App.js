import { Link, BrowserRouter, Routes, Route} from "react-router-dom";
import React, {useState} from "react";
import Shop from "./Shop";
import Home from "./Home";
import "./styles.css"
import Item from "./Item";
import icons from "./icons";
import Checkout from "./Checkout";



const App = () => {


    const [numOfItems, setNumOfItems] = useState(0)

    const [cryptos, setCryptos] = useState({
        cryptos: [
            {
                title: "Bitcoin",
                id: crypto.randomUUID(),
                price: "40,000 USD",
                inCart: 0
            },
            {
                title: "Ethereum",
                id: crypto.randomUUID(),
                price: "3700 USD",
                inCart: 0,
            },
            {
                title: "Dogecoin",
                id: crypto.randomUUID(),
                price: "0.12 USD",
                inCart: 0
            }
        ]
    })

    return(
        <div className="App">
            <BrowserRouter>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="shop">Shop</Link>

                <div className="cart">
                    <img src={icons.cart}></img>
                    <div >{numOfItems}</div>

                    <Link to="/shop/checkout" id="checkout">Checkout</Link>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/shop" element={<Shop cryptos={cryptos} setCryptos={setCryptos}/>}></Route>
                <Route path="/shop/:id" element={<Item cryptos={cryptos} setCryptos={setCryptos} numOfItems={numOfItems} setNumOfItems={setNumOfItems}/>}></Route>
                <Route path="/shop/checkout" element={<Checkout cryptos={cryptos}/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;