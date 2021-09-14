import { useContext ,useState } from "react"
import productos from "../CardContext/Context"
import ItemDetail from "../ItemDetailContainer/ItemDetail"


const ProductosDetail = ({data , carro}) => {

    const {removeItem , removeCantidadItem , carrito} = useContext(productos)

    carro = carrito;

    return (
        <div>
            <p>Producto: {data.item.nombre}</p>
            <p>Precio: {data.item.precio * data.cantidad}</p>
            <p>Unidades : {data.cantidad}</p>
            <p>¿Desea cambiar la cantidad de stock? Si no es así deje esta opción vacía</p>
            {data.cantidad > 1 ? <input type="number" placeholder="Nueva cantidad" id="nuevaCantidad" /> : null}
            <button onClick={()=> removeCantidadItem(data , document.getElementById("nuevaCantidad").value)}>Confirmar</button>
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