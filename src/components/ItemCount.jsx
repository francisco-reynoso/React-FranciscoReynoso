import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";



const ItemCount= ({stock,onAdd}) => {
    const [counter,setCounter]= useState(1);
    const [itemStock,setItemStock]= useState(stock)
    const [itemAdded,setItemAdded]= useState(false);

    const increment = () => {
        if(counter < itemStock){
            setCounter(counter + 1);
        }
    }
    const decrement = () => {
        if(counter > 1){
            setCounter(counter - 1);
        }  
    }
    const addToCart = ()=>{
        if(counter <= itemStock){
            setItemStock(itemStock - counter);
            setCounter(1);
            onAdd(counter);
            setItemAdded(true);
            console.log("agregaste"+" "+ counter +" "+ "productos al carrito" );
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
                        <button type="button" className="btn btn-dark" onClick={decrement}> - </button>
                        <button type="button" className="btn btn-dark"> {counter} </button>
                        <button type="button" className="btn btn-dark" onClick={increment}> + </button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col-md-8">
                    {itemAdded ? 
                        <Link to={"/cart"} type="button" className="btn btn-danger ">terminar compra </Link> 
                            : 
                        <button type="button" className="btn btn-dark "onClick={addToCart}>Agregar al carrito</button>
                    }
                    
                </div>
            </div>
            
        </div>
    )
}

export default ItemCount;