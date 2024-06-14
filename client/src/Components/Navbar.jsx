import { NavLink } from "react-router-dom";  // Helps in navigating the navbar without refreshing the page
import "./Navbar.css"
import { useAuth } from "../store/auth";

const Navbar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo-brand"/>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/store">Store</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                            {isLoggedIn ? (
                            <li>
                                <NavLink to="/logout">Logout</NavLink>
                            </li>
                            ) : (
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                        )}
                              
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Navbar;
