import ItemCount from "./ItemCount";

const ItemDetail = ({item}) =>{
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
                    <ItemCount stock={item.stock}/>
                </div>
            </div>
        </div>
    )

};

export default ItemDetail;