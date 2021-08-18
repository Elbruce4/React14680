import { useContext } from "react"
import productos from "../CardContext/Context"
const ProductosDetail = ({data , borrarItem }) => {

    const {removeItem} = useContext(productos)

    return (
        <div>
            <p>Producto: {data.item.nombre}</p>
            <p>Precio: {data.item.precio * data.cantidad}</p>
            <img src={data.item.url} />
            <br />
            <br />
            <button onClick={()=> removeItem(data)}>Eliminar Item del Carrito</button>
        </div>
    )
}

export default ProductosDetail