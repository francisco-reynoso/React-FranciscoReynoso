import { NavLink } from "react-router-dom";

const Categorias = ({categoria}) => {
    return(
            <div className="col d-flex justify-content-evenly linea">
                    <NavLink className="nav-link text-dark " to={"/"}> <h2 className="categorias">BEAUTY SALE</h2> </NavLink>
                    <NavLink className="nav-link text-dark "  to={"/category/fragancias"}> <h2 className="categorias">FRAGANCIAS</h2> </NavLink>
                    <NavLink className="nav-link text-dark "  to={"/category/maquillajes"}> <h2 className="categorias">MAQUILLAJE</h2> </NavLink>
                    <NavLink className="nav-link text-dark "  to={"/category/tratamiento"}> <h2 className="categorias">TRATAMIENTO</h2> </NavLink>
                    <NavLink className="nav-link text-dark "  to={"/category/capilar"}> <h2 className="categorias">CAPILAR</h2> </NavLink>
                    <NavLink className="nav-link text-dark "  to={"/category/regalos"}> <h2 className="categorias">REGALOS</h2> </NavLink>
                    <NavLink className="nav-link text-dark "  to={"/category/marcas"}> <h2 className="categorias">MARCAS</h2> </NavLink>
                    <NavLink className="nav-link text-dark "  to={"/category/ubicaciones"}> <h2 className="categorias">THE ROAD TO BEAUTY</h2> </NavLink>
              
            </div>
            
    )
};

export default Categorias;