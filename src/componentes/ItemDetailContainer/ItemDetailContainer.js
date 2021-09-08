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
        /*switch (parseInt(param.id)){
            case 1:
                const query = collection.doc("xjLTtGF2MjcvZMHRd4g1")
                const queryData = query.get();
                queryData.then((res)=>{
                setProducto(res.data())
                })
                break;
            case 2:
                const query2 = collection.doc("Mw3BqEDaKtobdxtLNyxN")
                const queryData2 = query2.get();
                queryData2.then((res)=>{
                setProducto(res.data());
                });
                break;
            case 3:
                const query3 = collection.doc("n32oi83m8yMNqZFs0YbU")
                const queryData3 = query3.get();
                queryData3.then((res)=>{
                setProducto(res.data());
                });
                break;
            case 4:
                const query4 = collection.doc("XpHcSL1LDFIp32McKs5T")
                const queryData4 = query4.get();
                queryData4.then((res)=>{
                setProducto(res.data());
                });
                break;
            case 5:
                const query5 = collection.doc("GJYm7ssBSOyjfbI5NMmk")
                const queryData5 = query5.get();
                queryData5.then((res)=>{
                setProducto(res.data());
                });
                break;
            case 6:
                const query6 = collection.doc("BrKlhcEuTYX68N1QgrAq")
                const queryData6 = query6.get();
                queryData6.then((res)=>{
                setProducto(res.data());
                });
                break;
            case 7:
                const query7 = collection.doc("5kRFhaySoICQEAr74UQ2")
                const queryData7 = query7.get();
                queryData7.then((res)=>{
                setProducto(res.data());
                });
                break;
            case 8:
                const query8 = collection.doc("HuTF63n3WVaObJVWNv90")
                const queryData8 = query8.get();
                queryData8.then((res)=>{
                setProducto(res.data());
                });
                break;
            case 9:
                const query9 = collection.doc("R7dNovxzJF1Dh9QwsNcW")
                const queryData9 = query9.get();
                queryData9.then((res)=>{
                setProducto(res.data());
                });
                break;
        }*/

    }, []);

    return (
        <div className="productos">
           {   
               <ItemDetail data={producto}/> } 
        </div>
    );
}

export default ItemDetailContainer