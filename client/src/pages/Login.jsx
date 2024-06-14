import {useState} from "react"; 
import { NavLink } from "react-router-dom"; 
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import loginLottie from "../login.json"
import Lottie from "react-lottie"
const URL ="http://localhost:5500/api/auth/login";

const Login = () => {
    //User: State variable 
    //setUser: Updated Function
    //useState: Hook
        const [user, setUser] = useState({
            email: "",
            password: "",
        });

        const {storeToken} = useAuth();
        const navigate = useNavigate();
    
        const handleInput = (e) => {
            console.log(e);
            let name = e.target.name;
            let value = e.target.value;

            //In setUser function "...user" is used to keep all fields same and "[name]: value" is used to update the value of field in "name"; name is the attribute in input tag; in this form name can be username,password,email or phone number.
            //[name] is dynamic data 
            setUser({
                ...user,
                [name]: value,
            });
        };

        const handleSubmit= async (e)=>{
            e.preventDefault();

            try {
                //Sending data directly from site to the database. This method is similar to what we did in POSTMAN i.e. we nned to send URL, method, headers, and main JSON data
                const response = await fetch(URL,{
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body:JSON.stringify(user), // In this the user is the variable that we defined above.
                    //Body is an object and stringify converts it to JSON.
                });

                console.log(response);
                const res_data=await response.json();
                console.log(res_data.extraDetails);
                if(response.ok){
                     // gets the token from database
                    toast("Login Succesful");
                    storeToken(res_data.token);
                    setUser({email: "",password: ""});
                    navigate("/");

                }else{
                    toast(res_data.extraDetails ? res_data.extraDetails:res_data.message);
                }
                
                }
                catch(error){
                    console.log(error);
                }
        };

        //Lottie Animation Properties
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: loginLottie,
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
                        <Lottie options={defaultOptions} height={600} width={500} />
                        </div>
                        <div className="registration-form">
                            <h1 className="main-heading-rf">Log in to your Account</h1>

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input
                                    type="text"
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
                                <button type="submit" className="btn-submit">Login</button><br/><br/><br/>

                                <div className="btn-submit">
                                <h4>Don't have an Account?&nbsp;&nbsp;&nbsp;<NavLink to="/register">Sign Up</NavLink></h4>
                                </div> 

                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>
}

export default Login;