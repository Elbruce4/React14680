import { Link , NavLink } from "react-router-dom";

const Item = ({data}) =>{

    return (
        <div className="card" className="productos lista">
            
                <li><p>{data.nombre}</p></li>
                <li><p>${data.precio}</p></li>
                <li className="lista"><p>{data.descripcion}</p></li>
                <li><img src={data.url}/></li>
                <NavLink to={"/item/" + data.id}><li><button>Ver Detalles</button></li></NavLink>

        </div>
    );
}

export default Item