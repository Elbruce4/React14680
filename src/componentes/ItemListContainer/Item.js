import { Link , NavLink } from "react-router-dom";

const Item = ({data}) =>{

    return (
        <div className="productos lista">
            
                <li>{data.nombre}</li>
                <li>${data.precio}</li>
                <li className="lista">{data.descripcion}</li>
                <li><img src={data.url}/></li>
                <NavLink to="/item/{data.id}"><li><button>Ver Detalles</button></li></NavLink>

        </div>
    );
}

export default Item