import React from 'react';
import '../../assets/style/Home.scss';

const Home = () => {
    return (
        <div className="home-container">
            <div className="intro-container">
                <div className="img-container">
                    <img className="img-item" src="/images/personal_dp.jpeg" alt="akarsh.jpeg" loading="lazy" />
                </div>
            </div>
        </div>
    );
}

export default Home;