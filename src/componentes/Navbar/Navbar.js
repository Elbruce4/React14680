import CartWidget from "../CartWidget/CartWidget";

const NavBar = (props) => {
    
   console.log(props.children);

 return (<nav id="navBar">
            <h2 className = "navBarMenu" onClick={props.lie}>Inicio</h2>
            <p  id="inicioTitulo" className = "navBarMenu">¿Quienes Somos?</p>
            <p className = "navBarMenu">Programas</p>
            <p className = "navBarMenu">Unite a la comunidad</p>
            <CartWidget/>
        </nav>
        )

}

export default NavBar