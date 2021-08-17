import productos from "./Context"
import {useState} from "react"

const {Provider} = productos

const CustomProvider = ({children}) =>{

    let compraCliente  = []

    const [productos , setProductos ] = useState()
    const [stock , setStock] = useState()

    
    function compra (a , b) {
        setProductos(a)
        setStock(b)
    }

    console.log("El cliente eligio el producto con el id: " + productos)


    compraCliente.push({
        Producto : productos,
        Cantidad : stock,
    });

    console.log(compraCliente)


    return(
        <Provider value ={compra}>
            {children}
        </Provider>
    )
}

export default CustomProvider