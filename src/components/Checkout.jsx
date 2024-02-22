import { useContext, useState } from "react";
import { CartContext } from "./contex/CartContext";
import { Link } from "react-router-dom";
import {getFirestore,collection,addDoc} from "firebase/firestore";

const Checkout= ()=>{
    const [nombre,setNombre]= useState();
    const [email,setEmail]= useState();
    const [telefono,setTelefono]= useState();
    const [orderId,setOrderId] = useState();
    const {cart,clear,cantTotalProductos,sumaTotalProductos}= useContext (CartContext);

    if (cantTotalProductos() == 0) {
        return(
            <div className="row my-5">
                    <div className="col">
                        {orderId ?  
                            <div className="col text-center p-5">
                                <h1 className="alert alert-danger display-3 text-center"> ¡gracias por tu compra!</h1>
                                <h5>tu ID de compra es: <b>{orderId}</b></h5>
                            </div>
                            : ""}
                    </div>
            </div>
        )
    }

    const generarOrden= () =>{
        if(nombre.length === 0 || email.length === 0 || telefono.length === 0){
            return false;
        }

        const buyer = {name:nombre, email:email,phone:telefono};
        const items = cart.map(item => ({id:item.idx, title:item.nombre, price:item.precio}));
        const fecha = new Date();
        const date = `${fecha.getDay()}/${fecha.getMonth()+1}/${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = sumaTotalProductos();
        const order = {buyer:buyer,items:items,date:date,total:total};

        const db =getFirestore();
        const ordersCollection = collection(db,"orders");
        addDoc(ordersCollection,order).then(resultado =>{
            console.log(resultado);
            setOrderId(resultado.id);
            clear();
        })
    };

    return(
        <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>CHECKOUT</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 text-center">
                        <form>
                            <div className="mb-3">
                                <label className="form-label"></label>
                                <input type="text" 
                                        className="form-control" 
                                        placeholder="Nombre"
                                        onInput={(e) =>{setNombre(e.target.value)}}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label"></label>
                                <input type="email" 
                                        className="form-control" 
                                        placeholder="Email"
                                        onInput={(e) =>{setEmail(e.target.value)}}/>                               
                            </div>
                            <div className="mb-3">
                                <label className="form-label"></label>
                                <input type="text" 
                                        className="form-control" 
                                        placeholder="Telefono"
                                        onInput={(e) =>{setTelefono(e.target.value)}}/> 
                            </div>
                        </form>
                        <button type="submit" className="btn btn-dark " onClick={generarOrden}>Generar Orden</button>
                    </div>
                    <div className="col-md-6 text-center">
                        <table className="table">
                            <tbody>
                                
                                {cart.map(product => 
                                    <tr key={product.id}>
                                        <td className="text-start align-middle"><img src={product.imagen} alt={product.nombre} width={80}/></td>
                                        <td className="text-start align-middle">{product.nombre}</td>
                                        <td className="text-start align-middle">${product.precio}</td>
                                        <td className="text-start align-middle">{product.quantity}</td>
                                        <td className="text-start align-middle">${product.quantity * product.precio}</td>
                                    </tr>    
                                )}
                                <tr>
                                    <td className="text-start"></td>
                                    <td className="text-start" colSpan={3}>suma total</td>
                                    <td className="text-start">${sumaTotalProductos()}</td>
                                    <td className="text-start"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
       
    )
};

export default Checkout;