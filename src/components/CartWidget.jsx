import { useContext } from "react";
import Carrito from "../assets/carrito.svg"
import { CartContext } from "./contex/CartContext";
import { Link } from "react-router-dom";
const CartWidget= () => {
    const {cantTotalProductos} = useContext(CartContext);
    return(
      
            cantTotalProductos() > 0 ?
            <Link to={"/cart"} type="button" className="btn  position-relative">
                <img src={Carrito} alt="carro" width={25}/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">{cantTotalProductos()}</span>
            </Link> : "" 
    )
};

export default CartWidget;