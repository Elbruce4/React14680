import { useState } from "react";


const Contador = () => {
    
    let initial = 0
    const [contador , setContador] = useState(initial);

    console.log(contador);

    function sumarContador () {
        setContador(contador + 1);
    }

    function restarContador () {
        setContador(contador - 1);
    }

    
    return (<>
                <p>{contador}</p>
                <button onClick={sumarContador}>+</button>
                <button onClick={restarContador}>-</button>
            </>
    );
}

export default Contador