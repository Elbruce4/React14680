import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStore} from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import productos from "../CardContext/Context";

const CartWidget = () =>  {

    const {carrito} = useContext(productos)
    console.log(carrito)
    
    return (
            <NavLink to="/cart">
                <div className="navBarMenu">
                    <FontAwesomeIcon icon={faStore}/>
                    {carrito.length > 0 ? carrito.length : null}
                </div>
            </NavLink>
    )

}



export default CartWidget
