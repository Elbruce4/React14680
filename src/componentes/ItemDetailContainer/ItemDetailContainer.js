import { useState , useEffect} from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({match}) => {

    console.log(match)

    const [producto , setProducto] = useState([]);

    const productos = [
        {
            id : 4,
            nombre : "Zapatillas",
            descripcion : "Zapatillas con plataforma",
            precio : 2000
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