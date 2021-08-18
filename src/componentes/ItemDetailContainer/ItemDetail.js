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
        console.log(item)
        isInCart(item)
    }
    
    return (
        <div className="productos lista">
            <ul className="productos lista">
            <p className=" lista"> {data.nombre}</p>
            <p className="lista">${data.precio}</p>
            <p className="lista">{data.descripcion}</p>
            <p className="lista">Cantidad de productos disponibles: {data.stock}</p>
            <img src={data.url}/>
            </ul>
            <div /*className="contador"*/>
                <ItemCount stock={data.stock} initial={1} onAdd={onAdd} producto={data}/>
            </div>
        </div>
    );
}

export default ItemDetail