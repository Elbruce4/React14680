
const ItemDetail = ({data}) => {
    
    return (
        <div className="productos lista">
            <ul className="productos lista">
            <p className=" lista"> {data.nombre}</p>
            <p className="lista">${data.precio}</p>
            <p className="lista">{data.descripcion}</p>
            <img src={data.url}/>
            </ul>
        </div>
    );
}

export default ItemDetail