import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
    
   console.log(props.children);

 return (
    <div>
      <nav className="navBar">
        <div id="barraInicio">
            <NavLink to="/">   
            <h1 className="title">Jarana</h1>                        
            </NavLink>
        </div>

        <div className="card">

          <NavLink to="/category/1">
            <p id="inicioTitulo" className = "navBarMenu">Ropa</p>
          </NavLink>
          
        </div>

        <div className="card">

          <NavLink to="/category/2">
            <p className ="navBarMenu">Accesorios</p>
          </NavLink>

        </div>

        <div className="card">

          <NavLink to="/category/3">
            <p className = "navBarMenu">Calzado</p>
          </NavLink>

        </div>

        <CartWidget/>


      </nav>
    </div>
          
        )

}

export default NavBar