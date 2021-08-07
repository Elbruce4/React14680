import { useState, useEffect } from "react"
import Item from "./Item"

const ItemList = () => {

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

    useEffect(()=>{const promesa = new Promise ((resolve , reject)=>{
        setTimeout(()=>{
            console.log(data)
            resolve(data)
        },2000)
    });
        promesa.then(()=>{setData(productos)});
    },[]); 

    console.log(data)


    return (
        <ul className="productos">
            { data.map(obj =>
                <Item data={obj}/>
            )}
            
        </ul>
    );
}

export default ItemList