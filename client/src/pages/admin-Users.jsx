import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import {NavLink} from "react-router-dom"

const adminUsers = () => {
    const {authorizationToken} = useAuth();
    const [users, setUsers] = useState([]);

    const getAllUserData = async () => {
        try {
            const response = await fetch("http://localhost:5500/api/admin/users",{
                method: "GET",
                headers:{
                    Authorization : authorizationToken,
                }
            });
            const data = await response.json();
            console.log(`Users: ${data}`);
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    }

    //Delete User
    const deleteUser = async(id) =>{
        try {
            console.log(id);
            const response = await fetch(`http://localhost:5500/api/admin/users/delete/${id}`,{
                method: "DELETE",
                headers:{
                    Authorization : authorizationToken,
                }
            });
            const data = await response.json();
            console.log(`Users after delete: ${data}`);

            // Below function will call getAllUserData function once again if the deletion is successful, therefore we need not refresh the page after deletion
            if(response.ok){
                getAllUserData();
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllUserData();

    },[]);
    return (
        <>
            {users.length > 0 ? (
                <section className="admin-users-section">
                <div className="container">
                    <h1>(Admin) User Data</h1>
                </div>
                <div className="container admin-users">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {users.map((curUser, index) => {
                            return <tr key ={index}>
                                <td>{curUser.username}</td>
                                <td>{curUser.email}</td>
                                <td>{curUser.phone}</td>
                                <td><NavLink className="btn" to ={`/admin/users/${curUser._id}/edit`}>Edit</NavLink></td>
                                <td><button className="btn" onClick={()=>deleteUser(curUser._id)}>delete</button></td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
                </section>
            ) : (
                <p>No users found</p>
            )}
        </>
    );
} 

export default adminUsers;