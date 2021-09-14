
import productos from "../CardContext/Context"
import { useState , useContext, useEffect } from "react";
import Formulario from "./Formulario";

const ProductosContainerOrden = () => {

    const { carrito } = useContext(productos)
    const [ precioTotal , setPrecioTotal ] = useState(0)

    let element = 0;
    for (let i = 0; i < carrito.length; i++) {
        element = carrito[i].item.precio * carrito[i].cantidad + element;
    }

    const buyer = {
        nombre : "Bruno Lococo",
        telefono : 1155556467,
        email : "brunotest@gmail.com"
    }


    useEffect(()=>{
        
        setPrecioTotal(element)
        
    },[])

    return (
        <div>
            <Formulario  precioTotal={precioTotal} />
        </div>
    )
}

export default ProductosContainerOrden