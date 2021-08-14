import ItemCount from "../ItemCount/ItemCount"; 

const ItemDetail = ({data}) => {
    
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
                <ItemCount stock={data.stock} initial={1} onAdd="Agregar al carrito" children/>
            </div>
        </div>
    );
}

export default ItemDetail