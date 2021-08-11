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
                <div id="barraInicio">
                    <div id="logoBajada">
                        <NavLink to="/">   
                        <h1>Jarana</h1>                        
                        </NavLink>
                        <h4>Periodismo poco serio</h4>
                    </div>
                    <NavBar />
                </div>
                <div className="productos">
                    <h3>Somos el store digital de Jarana TV. Todos nuestros productos son oficiales y fabricados por la misma compañia</h3>
                    
                    <NavLink to="/listaProductos">
                        <p className="linksRouter">Ropa de vestir</p>
                    </NavLink>
                    
                    <NavLink to="/item/4">
                        <p className="linksRouter">Calzado</p>
                    </NavLink>
                    <Switch>
                        <Route path="/category/:id" component={ItemListContainer} />
                        <Route path="/listaProductos" component={ItemListContainer}/>
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