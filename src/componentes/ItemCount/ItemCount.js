import { useState , useEffect } from "react";

const ItemCount = ({stock, onAdd, initial}) => {
    
    const [contador , setContador] = useState(initial);

    const [mensaje , setMensaje] = useState(onAdd);

    console.log(contador);


    function sumarContador () {
        if (contador > stock) {
            setMensaje (` no hay stock `)
        } else if (contador < stock) {
            setMensaje (onAdd);
            setContador(contador + 1)
        } else if (contador === stock) {
            setMensaje(`no hay más stock`)
        }
    }

    function restarContador () {
        
        if (contador > stock) {
            setMensaje (` no hay stock `)
            setContador(contador - 1)
        } else if (contador <= stock && contador > 1) {
            setMensaje (onAdd);            
            setContador(contador - 1)
        } else if (contador <= 1) {
            setMensaje("Mínimo tienes que comprar un elemento")
        }
    }

    function verStock () {
    }
    
    return (<div className="contador contador-botones">
                <select name="Productos" id="nombreProductos">
                    <option value="1">Remera</option>
                    <option value="2">Buzo</option>
                    <option value="3">Mochila</option>
                    <option value="4">Zapatillas</option>
                </select>
                <p>{contador}</p>
                <button onClick={sumarContador} >+</button>
                <button onClick={restarContador}>-</button>
                <button onClick={verStock} className="botonesCompra">{mensaje}</button>


            </div>
    );
}

export default ItemCount