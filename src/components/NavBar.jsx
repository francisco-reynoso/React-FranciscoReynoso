import Buscador from "./Buscador";
import Categorias from "./Categorias";
const NavBar = () =>{
    return(
        <div className="container-fluid my-3">
            <div className="row">
                <Buscador/>
            </div>
            <div className="row linea">
               <Categorias categoria={"BEAUTY SALE"}/>
               <Categorias categoria={"FRAGANCIAS"}/>
               <Categorias categoria={"MAQUILLAJE"}/>
               <Categorias categoria={"TRATAMIENTO"}/>
               <Categorias categoria={"CAPILAR"}/>
               <Categorias categoria={"REGALOS"}/>
               <Categorias categoria={"MARCAS"}/>
               <Categorias categoria={"THE ROAD TO BEAUTY"}/>
            </div>
        </div>
    )
};
export default NavBar;