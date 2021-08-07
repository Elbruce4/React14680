import { useState } from "react";


const ItemCount = ({stock, onAdd, initial}) => {
    
    const [contador , setContador] = useState(initial);

    const [mensaje , setMensaje] = useState(onAdd);

    console.log(contador);

    function sumarContador () {
        setContador(contador + 1);
        console.log(contador);
        
        if (contador + 1 > stock) {
            setMensaje (` no hay stock `)
        } else if (contador + 1 <= stock) {
            setMensaje (onAdd);
        }
        ;
    }

    function restarContador () {
        setContador(contador - 1)
        console.log(contador);
        
        if (contador - 1 > stock) {
            setMensaje (` no hay stock `)
        } else if (contador - 1 <= stock) {
            setMensaje (onAdd);
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