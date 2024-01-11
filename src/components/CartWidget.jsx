import Carrito from "../assets/carrito.svg"
const CartWidget= () => {
    return(
        <>  
            <button type="button" className="btn  position-relative">
                <img src={Carrito} alt="carro" width={25}/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">1</span>
            </button>
             
        </>
    )
};

export default CartWidget;