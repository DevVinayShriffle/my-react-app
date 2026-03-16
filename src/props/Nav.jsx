import {Link} from 'react-router-dom'

function Nav(){
  return(
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/help">Help</Link> |{" "}
      <Link to="/service">Service</Link> |{" "}
      <Link to="/products">Products</Link> |{" "}
      <Link to="/Emil">Emil</Link> | 
      <Link to="/Tobias">Tobias</Link> |
    </nav>
  )
}
export default Nav;