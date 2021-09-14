import ItemList from "./ItemList"
import { useState , useEffect } from "react"
import { firestore } from "../firebase";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    let param = useParams();

    const [data , setData] = useState([]);

    useEffect(()=>{

        const array = [];

        const db = firestore;
        const collection = db.collection("Productos");
        if(param.id){
            const query = collection.where("category","==", parseInt(param.id));
            const dataQuery = query.get()
            dataQuery.then((res)=>{
                res.forEach((doc)=>{
                    array.push(doc.data());
                });
                setData(array);
            });
        } else {
        const query = collection.get();
        query.then((res)=>{
            res.forEach((document)=>{
                array.push(document.data());
            })
            setData(array);
        })
    }   

},[param]); 

    return (
            <ItemList data={data} />
    )
}

export default ItemListContainer
