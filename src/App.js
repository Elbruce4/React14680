import NavBar from "./componentes/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom"
import { Route , Switch } from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import "./diseño.css"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import CustomProvider from "./componentes/CardContext/CustomProvider";
import ProductosContainer from "./componentes/Carrito/ProductosContainer";
import ProductosContainerOrden from "./componentes/Carrito/ProductosContainerOrden"

const App = () => {
   
    return (<CustomProvider>
                <BrowserRouter>
                    <div className="app">
                        <NavBar />
                        <div className="container">
                            <h4 id="presentacion">Somos el store digital de Jarana TV. Todos nuestros 
                            productos son oficiales y fabricados por la misma compañia</h4>
                            <Switch>  
                                <Route path="/" exact component={ItemListContainer} />
                                <Route path="/category/:id" component={ItemListContainer} />
                                <Route path="/item/:id" component={ItemDetailContainer} /> 
                                <Route path="/cart" component={ProductosContainer} />
                                <Route path="/order" component={ProductosContainerOrden} />
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </CustomProvider>
    );
}


export default App