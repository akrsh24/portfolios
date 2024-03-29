import React from 'react';
import '../../assets/style/Home.scss';

const Home = () => {
    return (
        <div className="home-container">
            <div className="intro-container">
                <div className="img-container">
                    {/* <img className="img-item" src="/portfolio/images/personal_dp.jpeg" alt="akarsh.jpeg" loading="lazy" /> */}
                    {/* <img className="img-item" src="/images/personal_dp.jpeg" alt="akarsh.jpeg" loading="lazy" /> */}
                    <h4 className="intro-line-1">Hi!</h4>
                    <h4 className="intro-line-1">I am Akarsh</h4>
                    <p className="intro-line-1">I am a <span id="spin"></span>!</p>                </div>
            </div>
        </div>
    );
}

export default Home;