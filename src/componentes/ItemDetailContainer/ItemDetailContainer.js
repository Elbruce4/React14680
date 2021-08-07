import { useState , useEffect} from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [producto , setProducto] = useState([]);

    const productos = [
        {
            id : 4,
            nombre : "Zapatillas",
            descripcion : "Zapatos de plataforma",
            precio : 500
        }]

    useEffect (()=>{
        
    function getItems () {

        setTimeout(()=>{
            new Promise ((resolve) =>{
                resolve(productos)
            }).then(prod=>setProducto(prod))
        },2000)
    }

    getItems();

    }, [])


    console.log(producto)

    return (
        <div className="productos">
           {    producto.map(obj=>
               <ItemDetail data={obj}/> )} 
        </div>
    );
}

export default ItemDetailContainer