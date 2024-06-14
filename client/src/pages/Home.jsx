import { useAuth } from "../store/auth";
import { Link, NavLink } from "react-router-dom";
import homeLottie from "../home.json";
import Lottie from "react-lottie";
import { useEffect, useState } from "react";

const Home = () => {
  const { user, services  } = useAuth();
  // const [services, setServices] = useState([]);

  //Lottie Animation Config
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: homeLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };


  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* Display User Name on home page */}
              <h1>Welcome to Gamers Stop, {user ? user.username : "Guest"}!</h1>
              <p>"Your Ultimate Gaming Destination"</p>
              <p>
                Gamers Stop is your ultimate destination for everything gaming. Whether you’re a casual player or a hardcore enthusiast, we have something for everyone. Our extensive collection features the latest releases, classic favorites, and exclusive titles across all major platforms.
              </p>
              <div className="btn btn-group">
                <Link to="/about">
                  <button className="btn">About Us</button>
                </Link>
                <Link to="/store">
                  <button className="btn secondary-btn">Browse Games</button>
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <Lottie options={defaultOptions} height={400} width={600} />
            </div>
          </div>
        </section>

        {/* Featured Games Section */}
        <section className="section-history">
          <h2>Featured Games</h2>
          <div className="container">
            <div className="horizontal-scroll">
              {services.length > 0 ? (
                services.map((curElem, index) => {
                  const { game, genre, price, publisher, filename } = curElem;

                  return (
                    <div className="card" key={index}>
                      <div className="card-img">
                        <img src={`/images/${filename}`} alt={game} width="100" height="100" />
                      </div>
                      <div className="card-details">
                        <div>
                          <center>
                            <br/><br/>
                            <h3>{game}</h3><br/><br/>
                            <Link to="/store">
                              <button className="btn">Learn More</button>
                            </Link><br/><br/>
                          </center>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>No services available</p>
              )}
            </div>
          </div>
        </section>

      {/* Testimonials Section */}
      <section className="section-testimonials">
        <h2>What Our Customers Say</h2>
        <div className="container">
          <div className="testimonials-wrapper">
            {/* Testimonial cards */}
            <div className="testimonial">
              <p>"A wonderful experience, highly recommend!"</p>
              <p>- Alice Johnson</p>
            </div>
            <div className="testimonial">
              <p>"Exceptional service and quality."</p>
              <p>- Bob Brown</p>
            </div>
            <div className="testimonial">
              <p>"Will definitely return for future purchases."</p>
              <p>- Mary Davis</p>
            </div>
            <div className="testimonial">
              <p>"Five stars, couldn't be happier!"</p>
              <p>- Steve Wilson</p>
            </div>
            <div className="testimonial">
              <p>"Amazing products, great customer service!"</p>
              <p>- Emma Clark</p>
            </div>
            <div className="testimonial">
              <p>"Highly professional and friendly staff."</p>
              <p>- Liam Martinez</p>
            </div>
            <div className="testimonial">
              <p>"Absolutely love it, would buy again."</p>
              <p>- Olivia Garcia</p>
            </div>
            <div className="testimonial">
              <p>"Top-notch quality and fast delivery."</p>
              <p>- Noah Rodriguez</p>
            </div>
            <div className="testimonial">
              <p>"Exceeded my expectations in every way."</p>
              <p>- Sophia Hernandez</p>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
};

export default Home;
