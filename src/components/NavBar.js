import {Link} from "react-router-dom";

function NavBar() {
    return (
       <nav className="nav nav-expand-lg bg-info justify-content-between">
           <div>LOGO</div>
             <ul className="nav nav">
                 <li className="nav-items"><Link to="/" className="nav-link text-white">Home</Link></li>
                 <li className="nav-items"><Link to="/countries"className="nav-link text-white">Countries</Link></li>
             </ul>
        </nav>
    )
}

export default NavBar
