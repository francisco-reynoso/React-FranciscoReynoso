import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {getFirestore,collection,query,getDocs,where} from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items,setItems]=useState([]);
    const {id} = useParams();
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const db =getFirestore();
        const itemsCollection = collection(db,"items");
        const q = id ? query(itemsCollection,where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then(resultado =>{
            setLoading(false)
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
        });

    },[id]);

    return(
        <>  
            {loading ? <Loading/> : <ItemList items={items}></ItemList> }
           
        </>
       
    )
}
export default ItemListContainer;