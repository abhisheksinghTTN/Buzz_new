import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../App'

const NavBar=()=>{

    return(
      <nav>
        <div className="nav-wrapper white">
        <Link to="#" className="brand-logo left">BUZZ</Link>
        <ul id="nav-mobile" className="right">
            <li><Link to="/signin">Login</Link></li>
            <li><Link to="/signup">SignUp</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/create">Create Post</Link></li>
        </ul>
        </div>
     </nav>
    )
}

export default NavBar;