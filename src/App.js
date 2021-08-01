import NavBar from "./componentes/Navbar/Navbar";

import ItemCount from "./componentes/ItemCount/ItemCount";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

import "./diseño.css"

const App = () => {
   

    return (<div className="app">
                <div id="barraInicio">
                    <div id="logoBajada">
                        <h1>Jarana</h1>
                        <h4>Periodismo poco serio</h4>
                    </div>
                    <NavBar />
                </div>
                <div className="productos">
                    <ItemListContainer greeting = "Accede a todo nuestro contenido"/>
                </div>
                <div className="contador">
                    <ItemCount stock={5} initial={1} onAdd="Agregar al carrito"/>
                </div>
            </div>
    );
}


export default App