import { useContext } from "react";
import { CartContext } from "./contex/CartContext";
import { Link } from "react-router-dom";
import eliminar from "../assets/eliminar.svg";

const Cart =()=>{
    const {cart,removeItem,clear,cantTotalProductos,sumaTotalProductos}= useContext (CartContext);

    if (cantTotalProductos() == 0) {
        return(
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <p className="alert alert-dark display-3">no hay productos en el carrito</p>
                        <Link to ={"/"} className="btn btn-dark"> Volver a la pagina principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>productos seleccionados</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td  colSpan={6}><a href="# "onClick={() => {clear()}} className="btn btn-dark ">vaciar carrito</a></td>
                                </tr>
                                {cart.map(product => 
                                    <tr key={product.id}>
                                        <td className="text-start"><img src={product.imagen} alt={product.nombre} width={80}/></td>
                                        <td className="text-start">{product.nombre}</td>
                                        <td className="text-start">${product.precio}</td>
                                        <td className="text-start">{product.quantity}</td>
                                        <td className="text-start">${product.quantity * product.precio}</td>
                                        <td className="text-start">
                                            <a href="# "onClick={() => {removeItem(product.id)}}><img src={eliminar} alt="basura" width={25}/></a>
                                        </td>
                                    </tr>    
                                )}
                                <tr>
                                    <td className="text-start"></td>
                                    <td className="text-start" colSpan={3}>suma total</td>
                                    <td className="text-start">${sumaTotalProductos()}</td>
                                    <td className="text-start"></td>
                                </tr>
                                <tr>
                                    <td  colSpan={6}><Link to= {"/checkout"}className="btn btn-dark ">COMPRAR</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
    )
}

export default Cart;