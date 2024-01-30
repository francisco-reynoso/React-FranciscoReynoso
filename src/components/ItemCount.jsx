import { useEffect, useState } from "react";


const ItemCount= ({stock}) => {
    const [cont,setCont]= useState(1);
    const [itemStock,setItemStock]= useState(stock)

    const increment = () => {
        if(cont < itemStock){
            setCont(cont + 1);
        }
    }
    const decrement = () => {
        if(cont > 1){
            setCont(cont - 1);
        }  
    }
    const onAdd = ( )=>{
        if(itemStock >= cont){
            setItemStock(itemStock - cont);
            console.log("agregaste"+" "+ cont +" "+ "productos al carrito" );
        }else{
            alert("No hay mas stock del producto!!")
        }
    } 

    useEffect(() =>{
        setItemStock(stock)
    },{stock})

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" arial-label = "basic example">
                        <button type="button" className="btn btn-warning" onClick={decrement}> - </button>
                        <button type="button" className="btn btn-warning"> {cont} </button>
                        <button type="button" className="btn btn-warning" onClick={increment}> + </button>
                    </div>
                </div>
            </div>
            <div className="row btn btn-danger" onClick={onAdd}>Agregar al carrito</div>
        </div>
    )
}

export default ItemCount;