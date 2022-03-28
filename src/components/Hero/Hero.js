import React from 'react';
import './Hero.css';

function Hero(props) {


    function addScrollHandle() {
        window.addEventListener('scroll', handleScroll);
    }

    function handleScroll() {
        const bottomCircle = document.querySelector(`.home-hero__circ-bottom`);
        const topCircle = document.querySelector(`.home-hero__circ-top`);
        const title = document.querySelector(`.home-hero__title`);
        const text = document.querySelector(`.home-hero__text`);
        let amountScrolled = window.pageYOffset;
        topCircle.style.animationFillMode = `unset`;
        topCircle.style.transform = `translateX(${amountScrolled / 4 }px)`;
        bottomCircle.style.animationFillMode = `unset`;
        bottomCircle.style.transform = `translateX(-${amountScrolled / 8 }px)`;
        title.style.opacity = '1';
        title.style.animationFillMode = `unset`;
        title.style.transform = `translateX(-${amountScrolled / 6 }px)`;
        text.style.animationFillMode = `unset`;
        text.style.opacity = '1';
        text.style.transform = `translateX(${amountScrolled / 6 }px)`;
    }

    return (
        <section className="home-hero">
            <div className="home-hero__content">
                {props.title && <h1 className="home-hero__title">{props.title}</h1>}
                {props.tagline && <h2 className="home-hero__text">{props.tagline}</h2>}
                <span className="home-hero__circ-top"></span>
                <span className="home-hero__circ-bottom" onAnimationEnd={addScrollHandle}></span>
            </div>
        </section>
    );
}

export default Hero;