import React from 'react';
import './Hero.css';

function Hero(props) {
    return (
        <section className="home-hero">
            <div className="home-hero__content">
                {props.title && <h1 className="home-hero__title">{props.title}</h1>}
                {props.tagline && <h2 className="home-hero__text">{props.tagline}</h2>}
            </div>
        </section>
    );
}

export default Hero;