import { Children, useEffect, useState  } from "react";
import { NavLink } from "react-router-dom";

const ItemCount = ({stock, onAdd, initial}) => {

    
    const [contador , setContador] = useState(initial);

    const [mensaje , setMensaje] = useState(onAdd);
    const [ carrito , setCarrito] = useState();
    const [ ver, setVer ] = useState(false)



    function sumarContador () {
        if (contador > stock) {
            setMensaje (` no hay stock `)
        } else if (contador < stock) {
            setMensaje (onAdd);
            setContador(contador + 1)
        } else if (contador === stock) {
            setMensaje(`No hay más stock`)
        }
    }

    function restarContador () {
        
        if (contador > stock) {
            setMensaje (`No hay más stock `)
            setContador(contador - 1)
        } else if (contador <= stock && contador > 1) {
            setMensaje (onAdd);            
            setContador(contador - 1)
        } else if (contador <= 1) {
            setMensaje("Mínimo tienes que comprar un elemento")
        }
    }

    function verCarrito () {

        setCarrito(contador);
        setVer(true)

    }

        if (ver === false) {
        return (<div className="contador contador-botones">
                        <p>{contador}</p>
                        <button onClick={sumarContador} >+</button>
                        <button onClick={restarContador}>-</button>
                        <button onClick={verCarrito} className="botonesCompra">{mensaje}</button></div>)
        } else if (ver === true) {
        return(
            <div>

        <NavLink to="/cart">

            <button>Terminar mi compra</button>

        </NavLink>
            
        </div>
    )
    }                

}

export default ItemCount