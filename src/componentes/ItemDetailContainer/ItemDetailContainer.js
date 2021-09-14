import { useState , useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";

const ItemDetailContainer = () => {

    let param = useParams();

    const [producto , setProducto] = useState([]);

    useEffect (()=>{

        const db = firestore
        const collection = db.collection("Productos");
        const query = collection.doc(param.id);
        const queryData = query.get();
        console.log(queryData)
        queryData.then((res)=>{
            setProducto(res.data())})
    }, []);

    return (
        <div className="productos">
           {   
               <ItemDetail data={producto}/> } 
        </div>
    );
}

export default ItemDetailContainer