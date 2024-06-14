import {useState} from "react"; 
import { useAuth } from "../store/auth"; 
import { toast } from "react-toastify";
import contactLottie from "../contact.json"
import Lottie from "react-lottie"

const URL="http://localhost:5500/api/form/contact"
const Contact = () => {
    //User: State variable 
    //setUser: Updated Function
    //useState: Hook
        const [contact, setContact] = useState({
            username: "",
            email: "",
            message: "",
        });
        
        const[userData, setUserData]=useState(true);
        const {user} =useAuth();

        if(userData && user){
            setContact({
                username:user.username,
                email:user.email,
                message: ""

            });
            setUserData(false)
        }

        const handleInput = (e) => {
            console.log(e);
            let name = e.target.name;
            let value = e.target.value;

            //In setUser function "...user" is used to keep all fields same and "[name]: value" is used to update the value of field in "name"; name is the attribute in input tag; in this form name can be username,password,email or phone number.
            setContact({
                ...contact,
                [name]: value,
            });
        };

        const handleSubmit=async (e)=>{
            e.preventDefault();
            try {
                const response = await fetch(URL,{
                    method:"POST",
                    headers:{
                        "Content-Type" : "application/json"
                    },
                    body:JSON.stringify(contact),
                })

                if (response.ok){
                    setContact({username:"",email:"",message: ""});
                }
            } catch (error) {
                console.log(error);
            }
            toast("Message Sent Successfully");
            
        };

        //Lottie Animation Properties
        const defaultOptions = {
            loop: false,
            autoplay: true,
            animationData: contactLottie,
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
                        <Lottie options={defaultOptions} height={300} width={500}/>
                        </div>
                        <div className="registration-form">
                            <h1 className="main-heading-rf">Contact Us</h1>
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
                                value={contact.username}
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
                                value={contact.email}
                                onChange={handleInput}
                                />
                            </div>

                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea
                                cols="41"
                                rows="7"
                                name="message"
                                placeholder="message"
                                id="message"
                                required
                                autoComplete="off"
                                value={contact.message}
                                onChange={handleInput}
                                />
                            </div>
                                <button type="submit" className="btn-submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>
}

export default Contact;