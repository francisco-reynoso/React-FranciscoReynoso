const ItemListContainer = ({titulo,mensaje}) => {
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <div className="alert alert-danger p-5 display-5" role="alert" >
                        <h1>{titulo}</h1>
                        <h3>{mensaje}</h3>
                    </div>
                    
                </div>
            </div>
        </div>
       
    )
}
export default ItemListContainer;