import Item from "./Item";

const ItemList = ({items}) =>{
    console.log(items);
    return(
        <div className="container">
                <div className="row">
                    <div className="col">
                        {items.map(item =>(
                            <Item key={item.id} item= {item}/>
                        ))}
                    </div>
                </div>
            </div>

    )
};

export default ItemList;