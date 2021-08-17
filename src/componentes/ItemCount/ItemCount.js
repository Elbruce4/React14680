import { useContext, useEffect, useState  } from "react";
import { NavLink } from "react-router-dom";
import productos from "../CardContext/Context"


const ItemCount = ({stock, onAdd, initial, producto}) => {

    const [contador , setContador] = useState(initial);
    const [mensaje , setMensaje] = useState("Agregar al carrito");
    const [ carrito , setCarrito] = useState();
    const [ ver, setVer ] = useState(false)



    function sumarContador () {
        if (contador > stock) {
            setMensaje (` No hay más stock `)
        } else if (contador < stock) {
            setMensaje ("Agregar al carrito");
            setContador(contador + 1)
            onAdd(contador + 1)
        } else if (contador === stock) {
            setMensaje(`No hay más stock`)
        }
    }

    function restarContador () {
        
        if (contador > stock) {
            setMensaje (`No hay más stock `)
            setContador(contador - 1)
        } else if (contador <= stock && contador > 1) {
            setMensaje ("Agregar al carrito");            
            setContador(contador - 1);
        } else if (contador <= 1) {
            setMensaje("Mínimo tienes que comprar un elemento")
        }
    }

    function verCarrito () {

        setVer(true)

    }

    const resultado = useContext(productos)
    console.log(resultado)

        if (ver === false) {
            return (<div className="contador contador-botones">
                            <p>{contador}</p>
                            <button onClick={sumarContador} >+</button>
                            <button onClick={restarContador}>-</button>
                            <button onClick={verCarrito} className="botonesCompra">{mensaje}</button>
                    </div>)
        } else if (ver === true) {
            return( <div>

                        <NavLink to="/cart">

                            <button onClick={resultado(producto, contador)}>Terminar mi compra</button>

                        </NavLink>
                
                    </div>)
        }                

}

export default ItemCount