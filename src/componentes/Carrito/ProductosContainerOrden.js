
import productos from "../CardContext/Context"
import { useState , useContext, useEffect } from "react";
import Formulario from "./Formulario";

const ProductosContainerOrden = () => {

    console.log(`tamos`)
    const { carrito } = useContext(productos)
    const [ precioTotal , setPrecioTotal ] = useState(0)
   /* const [ id , setId ] = useState()
    const { carrito , clear } = useContext(productos) */

    let element = 0;
    for (let i = 0; i < carrito.length; i++) {
        element = carrito[i].item.precio * carrito[i].cantidad + element;
        console.log(element)
    }

    const buyer = {
        nombre : "Bruno Lococo",
        telefono : 1155556467,
        email : "brunotest@gmail.com"
    }


    useEffect(()=>{
        
        setPrecioTotal(element)

       /* const nuevaOrden = {
            buyer : buyer,
            items : carrito,
            date : new Date(),
            total: precioTotal
        }
            const db = firestore
            const collection = db.collection("Ordenes")
            const query = collection.add(nuevaOrden)
            query.then(obj=>setId(obj.id))

            clear() */
    },[])

    return (
        <div>
            <Formulario  precioTotal={precioTotal} />
        </div>
    )
}

export default ProductosContainerOrden