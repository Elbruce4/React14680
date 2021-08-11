import ItemList from "./ItemList"
import { useState , useEffect } from "react"

import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    let param = useParams();
    console.log(param)

    const [data , setData] = useState([])

    const productos = [
        {
            id : 1,
            nombre : "Remera",
            descripcion : "Remera corte en v, color violeta con el logo de Jarana",
            precio : 500
        },{
            id: 2,
            nombre: "Buzo" ,
            descripcion: "Buzo con bolsillo canguro",
            precio: 800,
        },{
            id: 3,
            nombre: "Mochila",
            descripcion: "Mochila mediada de color amarillo con tres bolsillo",
            precio: 1200,
        }
    ]

    useEffect(()=>{
        
        const promesa = new Promise ((resolve , reject)=>{
        
        setTimeout(()=>{

            if (param.id ) {
                resolve(productos.filter(obj=>obj.id == param.id))
            } else {
                resolve(productos)
            }
        },2000)
    });
        promesa.then((obj)=>{setData(obj)});
    },[param]); 

    return (
        <div className="productos">
            <ItemList data={data} />
        </div>
    )
}
export default ItemListContainer
