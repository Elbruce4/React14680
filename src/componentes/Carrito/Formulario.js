import { useState ,useContext } from "react"
import productos from "../CardContext/Context"
import { firestore } from "../firebase";

const Formulario = ({precioTotal}) => {
    
    const [ id , setId ] = useState()
    const { carrito , clear } = useContext(productos)
    const [nombre , setNombre ] = useState("")
    const [email , setEmail ] = useState("")
    const [numero , setNumero ] = useState("")
    const [mostrar , setMostrar ] = useState()

    function confirmarNombre (e) {
        setNombre(e.target.value)
    }
    function confirmarEmail (e) {
        setEmail(e.target.value)
    }
    function confirmarTelefono (e) {
        setNumero(e.target.value)
    }

    function validarCampos () {
        if (nombre.trim().length && email.trim().length && numero.trim().length ) {
            return true
        } else {
            return false
        }
    }

    function confirmarCompra (e) {
        e.preventDefault();
        if(validarCampos()) {
            setMostrar(true)
            const nuevaOrden = {
                buyer : buyer,
                items : carrito,
                date : new Date(),
                total: precioTotal
            }
                const db = firestore
                const collection = db.collection("Ordenes")
                const query = collection.add(nuevaOrden)
                query.then(obj=>setId(obj.id))
                clear()
        } else {
            console.log(`llenar los campos correctamente`)
            setMostrar(false)
        }
    }

    const buyer = {
        Nombre : nombre,
        Email : email,
        Telefono : numero
    }

    return (
        <form className="formulario">

            <input className="nombreForm" type="text" placeholder="Ingrese su nombre" onChange={confirmarNombre} />
            <br />
            <input className="emailForm" type="email" placeholder="Ingrese su email" onChange={confirmarEmail} />
            <br />
            <input className="telefonoForm" type="number" placeholder="Ingrese su número telefonico" onChange={confirmarTelefono} />
            <br />
            <button onClick={ confirmarCompra}>Confirmar Datos</button>
            {mostrar === true ? <p>Su compra finalizo , El número es: {id}</p> : <p>Por favor complete todos los campos</p>}

        </form>
    )
}

export default Formulario