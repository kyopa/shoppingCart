import { Link } from "react-router-dom";


function Home() {
  return(
    <div>
      <h1>Welcome to the <i><strong>Bitcoin</strong></i> shop</h1>
      <div className="ball">
        <Link to="/shop">Enter</Link>
      </div>
    </div>
  )
}

export default Home;
