import { NavLink } from "react-router-dom";
const Access = () => {
    return<>
        <section id="error-page">
            <div className="content">
                <h1>Access Denied</h1>
                <p>You don't have privileges to access this page</p>
                <div className="btns">
                    <NavLink to="/">Return Home</NavLink>
                </div> 
            </div>       
        </section>
    </>
}

export default Access;