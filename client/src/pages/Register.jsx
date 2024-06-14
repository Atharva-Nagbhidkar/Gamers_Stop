import {useState} from "react";   
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import Lottie from "react-lottie"
import registerLottie from "../register.json"
const URL ="http://localhost:5500/api/auth/register";

const Register = () => {
    //User: State variable 
    //setUser: Updated Function
    //useState: Hook
        const [user, setUser] = useState({
            username: "",
            email: "",
            phone: "",
            password: "",
        });

        const navigate = useNavigate();
        const {storeToken} = useAuth();
    
        const handleInput = (e) => {
            console.log(e);
            let name = e.target.name;
            let value = e.target.value;

            //In setUser function "...user" is used to keep all fields same and "[name]: value" is used to update the value of field in "name"; name is the attribute in input tag; in this form name can be username,password,email or phone number.
            setUser({
                ...user,
                [name]: value,
            });
        };

        const handleSubmit = async (e)=>{
            e.preventDefault();
            try {
            //Sending data directly from site to the database. This method is similar to what we did in POSTMAN i.e. we nned to send URL, method, headers, and main JSON data
            const response = await fetch(URL,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(user), // In this the user is the variable that we defined above.
            });

            console.log(response);
            const res_data = await response.json();
            console.log(res_data.extraDetails);

            if(response.ok){
                 // gets the token from database
                toast("Registration Succesful");
                storeToken(res_data.token);
                setUser({ username: "",email: "",phone: "",password: "",}),
                navigate("/login")
            }
            else{
                toast(res_data.extraDetails ? res_data.extraDetails:res_data.message);
            }
    
            }
            catch(error){
                console.log("Register Error: ",error);
            }
        };

        //Lottie Animation Properties
        const defaultOptions = {
            loop: false,
            autoplay: true,
            animationData: registerLottie,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          };

    return<>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                        <Lottie options={defaultOptions} height={450} width={450} />
                        </div>
                        <div className="registration-form">
                            <h1 className="main-heading-rf">Sign Up</h1>

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
                                    value={user.username}
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
                                    value={user.email}
                                    onChange={handleInput}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                    type="number"
                                    name="phone"
                                    placeholder="phone"
                                    id="phone"
                                    required
                                    autoComplete="off"
                                    value={user.number}
                                    onChange={handleInput}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    id="password"
                                    required
                                    autoComplete="off"
                                    value={user.password}
                                    onChange={handleInput}
                                    />
                                </div>
                                <br/>
                                <button type="submit" className="btn-submit">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>
}

export default Register;