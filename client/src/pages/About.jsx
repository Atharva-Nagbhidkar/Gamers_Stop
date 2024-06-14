import React from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import aboutLottie from "../about.json"
import Lottie from "react-lottie"

const About = () => {
  const { user } = useAuth();

  //Lottie Animation Properties
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: aboutLottie,
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
              <h1>About Gamers Stop</h1>
              <p>"Your Ultimate Gaming Destination"</p>
              <p>
                Welcome to Gamers Stop, where we strive to provide gamers of all levels with the ultimate gaming experience. Our platform offers a wide range of games, from classic favorites to the latest releases, across all major platforms.
              </p>
              <p>
                Our mission is to create a vibrant and inclusive gaming community where players can connect, explore, and enjoy their favorite games together. Whether you're a casual player looking for some fun or a hardcore enthusiast seeking new challenges, Gamer's Stop has something for everyone.
              </p>
              <p>
                Join us today and embark on an exciting gaming adventure!
              </p>
              {user ? (
                <p>Welcome, {user.username}!<br/><br/>
                <Link to="/store">
                  <button className="btn">Browse Games</button>
                </Link></p>
              ) : (
                <p>Sign up or log in to unlock exclusive features and rewards!<br/><br/>
                <Link to="/register">
                  <button className="btn">Sign Up</button>
                </Link></p>
              )}
            </div>
            <div className="hero-image">
            <Lottie options={defaultOptions} height={550} width={550} />
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="section-history">
        <h2>Our History</h2>
          <div className="container">
            <p>
              Gamer's Stop was founded in 2023 by a team of passionate gamers who wanted to create a dedicated platform for gamers around the world. Since then, we have grown into one of the leading gaming communities, serving millions of players worldwide.
              Over the years, we have expanded our collection to include thousands of games across various genres, ensuring that there is something for every type of gamer. We are committed to staying at the forefront of the gaming industry, constantly updating our platform with the latest releases and innovations.
              Our journey has been marked by milestones and achievements, but our core values remain unchanged - to provide gamers with a safe, inclusive, and enjoyable gaming experience.
            </p>
          </div>

        {/* Mission Section */}
        {/* <section className="section-history"> */}
        <h2>Our Mission</h2>
          <div className="container">
            <p>
              At Gamer's Stop, our mission is simple - to be the ultimate destination for gamers worldwide. We are dedicated to providing a diverse and inclusive gaming community where players of all backgrounds can come together to connect, compete, and have fun.
              We are committed to offering a wide range of games, from classic titles to the latest releases, ensuring that there is something for everyone. Our goal is to create a welcoming environment where players can explore new worlds, embark on epic adventures, and forge lasting friendships.
              Whether you're a casual player or a hardcore enthusiast, Gamer's Stop is here to support your gaming journey every step of the way.
            </p>
          </div>

        {/* Team Section */}
        <h2>Meet the Team</h2>
          <div className="container">
            <div className="team-grid">
              <div className="team-member">
                <img src="/images/team1.webp" alt="Team Member 1" height="100" width="100" />
                <h3>John Doe</h3>
                <p>Founder & CEO</p>
              </div>
              <div className="team-member">
                <img src="/images/team2.png" alt="Team Member 2" />
                <h3>Jane Smith</h3>
                <p>Head of Operations</p>
              </div>
              <div className="team-member">
                <img src="/images/team3.png" alt="Team Member 3" />
                <h3>Mike Johnson</h3>
                <p>Lead Developer</p>
              </div>
              <div className="team-member">
                <img src="/images/team4.png" alt="Team Member 4" />
                <h3>Sarah Williams</h3>
                <p>Marketing Manager</p>
              </div>
            </div>
          </div>

        {/* Contact Section */}
        <h2>Get in Touch</h2>
            <div className="btn btn-group">
            <p>Have questions or feedback? Contact us today!
              <Link to="/contact">
                <button className="btn secondary-btn">Contact Us</button>
              </Link></p>
            </div>
        </section>
      </main>
    </>
  );
};

export default About;
