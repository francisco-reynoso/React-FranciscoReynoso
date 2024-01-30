import { Link } from "react-router-dom";
import LogoJule from "../assets/logoJuleria.png";
import CartWidget from "./CartWidget";
const Buscador = () => {
    return(
        <>
            <div className="col-md-4 p-8 ">
                <Link to={"/"}><img src={LogoJule} alt="logo juleriaque" width={180}/></Link> 
                
            </div>
            <div className="col-md-6">
                <form className="d-flex justify-content-center" role="search" >
                    <input className="form-control me-2 " type="search" placeholder="Buscar" aria-label="Search"/>
                </form>
            </div>
            <div className="col-md-2 d-flex justify-content-center p-2">
                <CartWidget/>
            </div>
        </>
    )
};

export default Buscador;