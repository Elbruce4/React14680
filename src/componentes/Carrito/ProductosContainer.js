import { useContext , useEffect, useState } from "react"
import productos from "../CardContext/Context"
import ProductosDetail from "./ProductosDetail"
import { NavLink } from "react-router-dom"
import { firestore } from "../firebase";


const ProductosContainer = () => {

    const [ precioTotal , setPrecioTotal ] = useState(0)
    const { clear , carrito} = useContext(productos)

    let element = 0;
    for (let i = 0; i < carrito.length; i++) {
        element = carrito[i].item.precio * carrito[i].cantidad + element;
        console.log(element)
    }

    useEffect(()=>{
        setPrecioTotal(element)
        console.log(carrito)
    })

   /* const buyer = {
        nombre : "Bruno Lococo",
        telefono : 1155556467,
        email : "brunotest@gmail.com"
    }


    const nuevaOrden = {
        buyer : buyer,
        items : carrito,
        date : new Date(),
        total: precioTotal
    } */

    /*function newOrder () {
        console.log("entra")
        const db = firestore
        const collection = db.collection("ordenes")
        const query = collection.add(nuevaOrden)
        query.then(res => id = res.id)
    } */

    return (
        <div>
            {carrito.map(obj => 
                <ProductosDetail key={obj.id} data={obj} />
                )}
            {carrito.length > 0 ? <button onClick={clear}>Vaciar todo el carrito</button> :  <NavLink to="/"><button> No hay nada en el carrito... Por ahora </button></NavLink> }
            <br />
            {precioTotal > 0 ? <h4>El precio total es: ${precioTotal} <button > <NavLink to=""> Confirmar Compra </NavLink></button> </h4>  : null}
        </div>
    )
}

export default ProductosContainer