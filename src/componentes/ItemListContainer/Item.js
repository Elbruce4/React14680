
const Item = ({data}) =>{

    return (
        <div className="productos lista">
        <li>{data.nombre}</li>
        <li>${data.precio}</li>
        <li className="lista">{data.descripcion}</li>
        </div>
    );
}

export default Item