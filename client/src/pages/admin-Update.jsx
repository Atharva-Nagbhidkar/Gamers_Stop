import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const AdminUpdate = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: ""
    });

    const params = useParams();
    const { authorizationToken } = useAuth();

    const getSingleUserData = async (id) => {
        try {
            console.log(id);
            const response = await fetch(`http://localhost:5500/api/admin/users/${id}`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                }
            });
            const data = await response.json();
            console.log(`User's single data: ${JSON.stringify(data)}`);
            setData(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSingleUserData(params.id);
    }, [params.id]);

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent page refresh
        try {
            const response = await fetch(`http://localhost:5500/api/admin/users/update/${params.id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: authorizationToken,
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                toast("Data Updated Successfully");
            } else {
                toast.error("Data Update Failed");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-form">
                            <h1 className="main-heading-rf">Update User Data</h1>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="username"
                                        id="username"
                                        required
                                        autoComplete="off"
                                        value={data.username}
                                        onChange={handleInput}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        id="email"
                                        required
                                        autoComplete="off"
                                        value={data.email}
                                        onChange={handleInput}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="phone"
                                        name="phone"
                                        placeholder="phone"
                                        id="phone"
                                        required
                                        autoComplete="off"
                                        value={data.phone}
                                        onChange={handleInput}
                                    />
                                </div>
                                <button type="submit" className="btn-submit">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default AdminUpdate;
