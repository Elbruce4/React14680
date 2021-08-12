import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
    
   console.log(props.children);

 return (
          <nav >
            <cart id="navBar">
              <div id="barraInicio">
                          <NavLink to="/">   
                          <h1>Jarana</h1>                        
                          </NavLink>
              </div>
            
            <NavLink to="/category/1">
              <p  id="inicioTitulo" className = "navBarMenu">Ropa</p>
            </NavLink>
            <NavLink to="/category/2">
              <p className ="navBarMenu">Accesorios</p>
            </NavLink>
            <NavLink to="/category/3">
              <p className = "navBarMenu">Calzado</p>
            </NavLink>
            <CartWidget/>

            </cart>

          </nav>
        )

}

export default NavBar