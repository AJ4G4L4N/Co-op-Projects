import { Link } from "react-router-dom";
import "../styling/navbar.css";

export default function Navbar(){

    return(
    <>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
        </ul>
    </nav>
    </>
    );
}