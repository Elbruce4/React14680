import { Link , NavLink } from "react-router-dom";

const Item = ({data}) =>{

    return (
        <div className="lista">
            
                <li className="listaDetalle"><p className="listaDetalle">{data.nombre}</p></li>
                <li className="listaDetalle"><p className="listaDetalle">${data.precio}</p></li>
                <li className="listaDetalle"><p className="listaDetalle">{data.descripcion}</p></li>
                <li><img src={data.url}/></li>
                <NavLink to={"/item/" + data.idFirebase}><li><button className="botonDetalle">Ver Detalles</button></li></NavLink>

        </div>
    );
}

export default Item