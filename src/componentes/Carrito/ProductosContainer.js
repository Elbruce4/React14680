import { useContext } from "react"
import productos from "../CardContext/Context"
import ProductosDetail from "./ProductosDetail"

const ProductosContainer = () => {

    const {removeItem , clear , carrito} = useContext(productos)

    console.log(carrito)

    return (
        <div>
            {carrito.map(obj => 
                <ProductosDetail key={obj.id} data={obj} borrarItem= {removeItem} />
                )}
            {carrito.length > 0 ? <button onClick={clear}>Vaciar todo el carrito</button> : null}
        </div>
    )
}

export default ProductosContainer