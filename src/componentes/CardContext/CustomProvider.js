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

/*    let compraCliente  = []

    const [carrito, setCarrito] = useState([ ]);

    function agregarAlCarrito (prod, stock) {
        const yaExiste = carrito.find( (item) => item.id === prod.id);
        if (!yaExiste) {
            setCarrito([...carrito, {...prod, cantidad: stock}]);
        } else {
            const newProductos = carrito.map ( (item) => {
                if (item.id === prod.id) {
                    return {...item,...stock, cantidad: stock } 
                } return item;
            });
            setCarrito(newProductos);
        }
    }

    function clear () {
        setCarrito([])
    }

    function removeItem (id) {
        const borrar = carrito.filter(obj => obj.id !== id);
        setCarrito(borrar)
    }

    console.log(compraCliente);
    console.log(carrito)*/

    return(
        <Provider value ={{carrito ,addItem, isInCart , clear , removeItem}}>
            {children}
        </Provider>
    )
}

export default CustomProvider