import ItemCount from "../ItemCount/ItemCount"; 
import { useContext } from "react";
import productos from "../CardContext/Context"

const ItemDetail = ({data}) => {

    const { isInCart } = useContext(productos)

    function onAdd (cantidad) {
        const item = {
            item : data,
            cantidad: cantidad
        }
        console.log(item);
        isInCart(item);
    }

    return (
        <div className="listaDetalle">
            <ul className="listaDetalle">
            <p className="listaDetalle"> {data.nombre}</p>
            <p className="listaDetalle">${data.precio}</p>
            <p className="listaDetalle">{data.descripcion}</p>
            <p className="listaDetalle">Cantidad de productos disponibles: {data.stock}</p>
            <img src={data.url} className="listaDetalle"/>
            </ul>
            <div className="contador">
                <ItemCount stock={data.stock} initial={1} onAdd={onAdd}/>
            </div>
        </div>
    );
}

export default ItemDetail