import { useState , useEffect} from "react";


const ItemDetail = ({data}) => {

    return (
        <div className="productos lista">
            <ul className="productos lista">
            <p className=" lista"> {data.nombre}</p>
            <p className="lista">${data.precio}</p>
            <p className="lista">{data.descripcion}</p>
            </ul>
        </div>
    );
}

export default ItemDetail