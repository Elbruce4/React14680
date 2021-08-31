
import { firestore } from "../firebase";

const ProductosContainerOrden = () => {

    const db = firestore
    const collection = db.collection("ordenes")

    return (
        <div>
            Acá debería aparecer el ID de la operación
        </div>
    )
}

export default ProductosContainerOrden