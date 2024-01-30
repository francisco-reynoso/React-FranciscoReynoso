import Buscador from "./Buscador";
import Categorias from "./Categorias";
const NavBar = () =>{
    return(
        <div className="container-fluid my-3">
            <div className="row">
                <Buscador/>
            </div>
            <Categorias></Categorias>
        </div>
    )
};
export default NavBar;