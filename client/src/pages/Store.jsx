import React from 'react';
import { useAuth } from '../store/auth';
import { Link } from "react-router-dom"; 

const Store = () => {
    const { services = [] } = useAuth(); // Default to an empty array if services is undefined

    return (
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading-rf">Store</h1>
            </div>

            <div className="container grid grid-three-cols">
                {services.length > 0 ? (
                    services.map((curElem, index) => {
                        const { game, genre, price, publisher,filename } = curElem;

                        return (
                            <div className="card" key={index}>
                                <div className="card-img">
                                    <img src={`/images/${filename}`} alt={game} width="100" height="100" />
                                </div>
                                <div className="card-details">
                                    <div>
                                        <center><h2>{game}</h2><br/>
                                        <p className='para'>Publisher: <strong>{publisher}</strong></p>
                                        <p className='para'>Genre: <strong>{genre}</strong></p>
                                        <p className='para'>Price: <strong>{price}</strong></p><br/><br/><br/>
                                        <Link to="/thankyou">
                                            <button className="btn">Buy Now</button>
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
        </section>
    );
};

export default Store;
