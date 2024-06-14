import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import {toast} from "react-toastify"

const adminContacts = () => {
    const [contactData, setContactData] = useState([]);
    const{ authorizationToken }= useAuth();
    const getContactData = async () => {
        try {
            const response = await fetch("http://localhost:5500/api/admin/contacts",{
                method: "GET",
                headers:{
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            console.log("User data: ",data)

            if(response.ok){
                console.log(response);
                setContactData(data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    //
    const deleteContactById =async  (id) =>{
        try {
            const response = await fetch(`http://localhost:5500/api/admin/contacts/delete/${id}`,{
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                }
            }
        );
        if (response.ok){
            getContactData();
            toast("Message deleted successfully")
        }
        else{
            toast.error("Message can't be deleted ")
        }
    }
        catch (error) {
            console.log(error);
        }
    }
    //using useEffect to call the function
    useEffect(() =>{
        getContactData();

    },[]); //by adding [] we make sure that the code runs inly once
    return  (
                 <>
                     {contactData.length > 0 ? (
                         <section className="admin-users-section">
                         <div className="container">
                             <h1>(Admin) Contact Data</h1>
                        </div>
                         <div className="container admin-users">
                             <table>
                                 <thead>
                                     <tr>
                                         <th>Name</th>
                                         <th>Email</th>
                                         <th>Message</th>
                                         <th>‎ </th>
                                         <th>Delete</th>
                                     </tr>
                                 </thead>
                                 <tbody>
                                    {contactData.map((curContact, index)=>{
                                     return <tr key ={index}>
                                         <td>{curContact.username}</td>
                                         <td>{curContact.email}</td>
                                         <td>{curContact.message}</td>
                                         <td></td>
                                         <td><button className="btn" onClick={()=>deleteContactById(curContact._id)}>Delete</button></td>
                                     </tr>
                                 })}
                                 </tbody>
                             </table>
                        </div>
                        </section>
                     ) : (
                        <p>No message found</p>
                     )}
                </>
             );
        
}

export default adminContacts;