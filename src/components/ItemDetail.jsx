import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./contex/CartContext";

const ItemDetail = ({item}) =>{
    const {addItem} =useContext(CartContext);

    const onAdd= (quantity) => {
        addItem(item,quantity)
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src={item.imagen} alt={item.nombre} className="img-fluid"/>
                </div>
                <div className="col-md-4 py-5">
                    <h1>{item.nombre}</h1>
                    <p>{item.marca}</p>
                    <h5>{item.precio}</h5>
                    <p>{item.descripcion}</p>
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )

};

export default ItemDetail;