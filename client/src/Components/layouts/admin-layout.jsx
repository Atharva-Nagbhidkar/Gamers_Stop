import { NavLink, Outlet ,Navigate} from "react-router-dom";
import { FaUser ,FaHome,FaRegListAlt} from "react-icons/fa" //Icons for navbar
import { FaMessage} from "react-icons/fa6"
import { useAuth } from "../../store/auth";


const adminLayout = () => {

    const {user, isLoading} = useAuth();

    // if loading state is true, it will wait for the data to be fetched and then proceed further
    if(isLoading){
        return <h1>Loading....</h1>
    }

    if(!user.isAdmin){
        return <Navigate to="/accessdenied"/>
    }
    return <>
    <header>
        <div className="container">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/admin/users"><FaUser/> Users</NavLink>
                    </li>
                    <li>
                    <NavLink to="/admin/contacts"><FaMessage/> Contacts</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    {/* Outlet used when we create nested routes and want to display the contents of the inner route */}
    <Outlet/>
    </>;
};
export default adminLayout;