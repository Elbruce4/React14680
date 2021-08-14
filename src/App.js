import NavBar from "./componentes/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom"
import { Route , Switch } from "react-router-dom";
import ItemCount from "./componentes/ItemCount/ItemCount";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

import "./diseño.css"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";

const App = () => {
   

    return (<BrowserRouter>
            <div className="app">
                <NavBar />
                <div className="container">
                    <h4 id="presentacion">Somos el store digital de Jarana TV. Todos nuestros 
                    productos son oficiales y fabricados por la misma compañia</h4>
                    <Switch>  
                        <Route path="/" exact component={ItemListContainer} />
                        <Route path="/category/:id" component={ItemListContainer} />
                        <Route path="/item/:id" component={ItemDetailContainer} /> 
                    </Switch>
                </div>
            </div>
            </BrowserRouter>
    );
}


export default App