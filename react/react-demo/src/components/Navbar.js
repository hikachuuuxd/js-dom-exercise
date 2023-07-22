import './Navbar.css'
import Dropdown  from './Dropdown';
import React, {useState} from "react";
import {list} from './List';



const Navbar = () => {

    const [dropdown,  setDropdown] = useState(false);
    const [id,  getId] = useState();
    const openDropdown = (id) => { 
            setDropdown(!dropdown)
            getId(id)
            console.log('d')
         
        };


    return(
        <div className="navbar">
            <div className="navbar-header">Navbar</div>
            <ul>
                {list.map((menu, index) => {
                   return (
                   
                   <li key={index} >{menu.sub ? (<> 
                   
                   <button onClick={() => openDropdown(menu.id)} >{menu.menu}</button> <Dropdown id={id} open={ dropdown} menu={ menu } /> 
                   </>) : <button >{menu.menu}</button>  }
                   
                   </li>)
                    
                }) }
            </ul>
             
        </div>
    )
}
export default Navbar;