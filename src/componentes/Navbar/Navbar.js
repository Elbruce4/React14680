import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
    
   console.log(props.children);

 return (
          <nav >
            <cart id="navBar">

            <h2 className = "navBarMenu" onClick={props.lie}>Inicio</h2>
            
            <NavLink to="/category/2">
            <p  id="inicioTitulo" className = "navBarMenu">Oferta del día</p>
            </NavLink>

            <p className = "navBarMenu">Programas</p>
            <p className = "navBarMenu">Unite a la comunidad</p>
            <CartWidget/>

            </cart>

          </nav>
        )

}

export default NavBar