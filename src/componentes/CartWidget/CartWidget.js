import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStore} from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom";

const cartWidget = () => 
            <NavLink to="/cart">
                <div className="logo">
                    <FontAwesomeIcon icon={faStore}/>
                </div>
            </NavLink>


export default cartWidget
