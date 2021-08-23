import productos from "./Context"
import {useEffect, useState} from "react"

const {Provider} = productos

const CustomProvider = ({children}) =>{

    const [carrito, setCarrito] = useState([]);

    const addItem = (item) => {
        const nuevoCarrito = carrito.slice(0)
        nuevoCarrito.push(item)
        setCarrito(nuevoCarrito)
    }

    const removeItem = (item) => {
        const nuevoCarrito = carrito.filter(obj => obj.item.id !== item.item.id)
        setCarrito(nuevoCarrito)
        console.log(item)
    }

    const clear = () => {
        setCarrito([])
    }

    const isInCart = (id) => {
        const mismoProducto = carrito.find(obj =>
            obj.item.id === id.item.id)
             if (mismoProducto) {
                mismoProducto.cantidad = id.cantidad + mismoProducto.cantidad
            } else {
                addItem(id)
            }
    }

    useEffect (()=>{
        console.log(carrito)
    })
    
    return(
        <Provider value ={{carrito ,addItem, isInCart , clear , removeItem}}>
            {children}
        </Provider>
    )
}

export default CustomProvider