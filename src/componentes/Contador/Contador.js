import { useState } from "react";


const Contador = ({stock, onAdd, initial}) => {
    
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
                <p>{contador}</p>
                <button onClick={sumarContador}>+</button>
                <button onClick={restarContador}>-</button>
                <button onClick={verStock}>{mensaje}</button>
            </div>
    );
}

export default Contador