import ItemCount from "../ItemCount/ItemCount"; 

const ItemDetail = ({data}) => {

    function onAdd (prop) {
        console.log(`El cliente agrego ` + prop + " productos")
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
                <ItemCount stock={data.stock} initial={1} onAdd={onAdd} children producto={data.id}/>
            </div>
        </div>
    );
}

export default ItemDetail