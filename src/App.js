import NavBar from "./componentes/Navbar/Navbar";

import Contador from "./componentes/Contador/Contador";
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
                    <ItemListContainer greeting = "Accede a todo nuestro contenido"/>
                </div>
                <div div id="contador">
                    <Contador/>
                </div>
            </div>
    );
}


export default App