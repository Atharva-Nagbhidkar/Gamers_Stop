import { NavLink } from "react-router-dom";
import thankyouLottie from "../thankyou.json"
import Lottie from "react-lottie"
const Thankyou = () => {

    //Lottie Animation Properties
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: thankyouLottie,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
        },
      };

    return<>
        <section id="error-page">
            <div className="content">
            <Lottie options={defaultOptions} height={200} width={200} />
                <h4 className="header">Thanks for shopping!</h4>
                <p>Your purchase was successful. We hope you enjoy your new games!</p>
                <p>Please share your feedback to help us improve.</p>
                <div className="btns">
                    <NavLink to="/">Continue Shopping</NavLink>
                    <NavLink to="/contact">Share Feedback</NavLink>
                </div> 
            </div>       
        </section>
    </>
}

export default Thankyou;