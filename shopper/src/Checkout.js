

let total;
function Checkout(props) {
    const sum = props.cryptos.cryptos.forEach(crypto => {

        const fresh = crypto.price.split(",").join("")
        const newLol = fresh.replace(/[^0-9]/g,'');
        
        
        console.log(crypto.inCart)
        
        total = <div>{parseInt(newLol) * crypto.inCart}</div>
        

   })
   
   
    return(
        <div>
            <h1 >Checkout out coming sooooooon!</h1>
            <h2>Your total: {total}</h2>
        </div>
    )
}

export default Checkout;