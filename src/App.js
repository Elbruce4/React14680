import NavBar from "./componentes/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom"
import { Route , NavLink , Switch } from "react-router-dom";
import ItemCount from "./componentes/ItemCount/ItemCount";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

import "./diseño.css"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";

const App = () => {
   

    return (<BrowserRouter>
            <div className="app">
                <NavBar />
                <div className="productos">
                    <h3 id="presentacion">Somos el store digital de Jarana TV. Todos nuestros 
                    productos son oficiales y fabricados por la misma compañia</h3>
                    <Switch>  
                        <Route path="/" exact component={ItemListContainer} />
                        <Route path="/category/:id" component={ItemListContainer} />
                        <Route path="/item/:id" component={ItemDetailContainer} /> 
                    </Switch>
                </div>
                <div className="contador">
                    <ItemCount stock={5} initial={1} onAdd="Agregar al carrito"/>
                </div>
            </div>
            </BrowserRouter>
    );
}


export default App