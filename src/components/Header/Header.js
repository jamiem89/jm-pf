import React from 'react';
import './Header.css';

function Header(props) {
    console.log(props);
    return (
        <section className="home-hero">
            <div className="home-hero__content">
                {props.title && <h1 className="home-hero__title">{props.title}</h1>}
                {props.tagline && <p className="home-hero__text">{props.tagline}</p>}
            </div>
        </section>
    );
}
    
export default Header;