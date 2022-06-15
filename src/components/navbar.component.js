import React from "react";

import { Link } from "react-router-dom";


const NavBar=()=>{

        return(
            
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                 <Link to="/" className="navbar-brand" style={{marginLeft:40}}>ExcerTracker</Link>
                    <div style={{flex:1,flexDirection:"row"}}>
                        <ul className="navbar-nav mr-auto" style={{flexDirection:'row',gap:30,marginLeft:30}}>
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">Exercise</Link>

                            </li>
                            <li className="navbar-item">
                                <Link to="/create" className="nav-link">Create Exercise Log</Link>
                            </li>
                            <li>
                                <Link to="/user" className="nav-link">Create User</Link>
                            </li>
                        </ul>
                    </div>   
            </nav>
        )

}


export default NavBar;