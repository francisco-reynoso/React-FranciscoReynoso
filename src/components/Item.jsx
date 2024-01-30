import { Link } from "react-router-dom";

const Item= ({item}) =>{
    return(
        <div className="contTarjeta text-center">
           
            <div className="card border-1 tarjeta">
                <Link className="nav-link text-dark " to={"/item/" + item.id}>
                    <img src={item.imagen} alt={item.nombre} className="card-img-top"/>
                    <div className="card-body">
                        <p className="card-text">{item.nombre}</p>
                        <p className="card-text">${item.precio}</p>
                    </div>
                </Link>
              
            </div>
        </div>
    )
}
export default Item;