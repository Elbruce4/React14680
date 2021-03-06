import { useContext , useEffect, useState } from "react"
import productos from "../CardContext/Context"
import ProductosDetail from "./ProductosDetail"
import { NavLink } from "react-router-dom"


const ProductosContainer = () => {

    const [ precioTotal , setPrecioTotal ] = useState(0)
    const { clear , carrito} = useContext(productos)

    let element = 0;
    for (let i = 0; i < carrito.length; i++) {
        element = carrito[i].item.precio * carrito[i].cantidad + element;
    }

    useEffect(()=>{
        setPrecioTotal(element)
    },[carrito])

    return (
        <div>
            {carrito.map(obj => 
                <ProductosDetail key={obj.id} data={obj} />
                )}
            {carrito.length > 0 ? <button onClick={clear}>Vaciar todo el carrito</button> :  <NavLink to="/"><button> No hay nada en el carrito... Por ahora </button></NavLink> }
            <br />
            {precioTotal > 0 ? <h4>El precio total es: ${precioTotal} <button > <NavLink to="/order"> Confirmar Compra </NavLink></button> </h4>  : null}
        </div>
    )
}

export default ProductosContainer