import { NavLink } from "react-router-dom";
const Error = () => {
    return<>
        <section id="error-page">
            <div className="content">
                <h2 className="header">404</h2>
                <h4 className="header">Page not found</h4>
                <p>It seems like the page you're trying to access doesn't exist</p>
                <div className="btns">
                    <NavLink to="/">Return Home</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                </div> 
            </div>       
        </section>
    </>
}

export default Error;