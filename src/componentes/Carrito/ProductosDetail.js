import { useContext } from "react"
import productos from "../CardContext/Context"


const ProductosDetail = ({data}) => {

    const {removeItem , removeCantidadItem } = useContext(productos)

    return (
        <div>
            <p>Producto: {data.item.nombre}</p>
            <p>Precio: {data.item.precio * data.cantidad}</p>
            <p>Unidades : {data.cantidad}</p>
            {data.cantidad > 1 ? 
            <div>
            <p>¿Desea cambiar la cantidad de stock?</p><p>Si no es así deje esta opción vacía</p> <input type="number" min="1" max={data.cantidad} placeholder="Nueva cantidad" id="nuevaCantidad" /> <button onClick={()=> removeCantidadItem(data , document.getElementById("nuevaCantidad").value) }>Confirmar</button>
            </div> : null}
            <br />
            <br />
            <img src={data.item.url} />
            <br />
            <br />
            <button onClick={()=> removeItem(data)}>Eliminar Item del Carrito</button>
        </div>
    )
}

export default ProductosDetail