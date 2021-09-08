
import productos from "../CardContext/Context"
import { useState , useContext, useEffect } from "react";
import { firestore } from "../firebase";

const ProductosContainerOrden = () => {

    console.log(`tamos`)

    const [ precioTotal , setPrecioTotal ] = useState(0)
    const [ id , setId ] = useState()
    const { carrito } = useContext(productos)

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

        const nuevaOrden = {
            buyer : buyer,
            items : carrito,
            date : new Date(),
            total: precioTotal
        }
        const db = firestore
        const collection = db.collection("Ordenes")
        const query = collection.add(nuevaOrden)
        query.then(obj=>setId(obj.id))

    },[])

    return (
        <div>
            <p>Su compra finalizo</p>
            <p>El número es: {id}</p>
        </div>
    )
}

export default ProductosContainerOrden