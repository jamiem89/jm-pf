import React from 'react';
import './Project.css';

function Project(props) {
    return (
        <div className="project-card">
            {props.img && <img src={props.img} className="project-card__img" />}
            {props.title && <h2 class="project-card__title">{props.title}</h2>}
            {props.excerpt && <p className="project-card__text">{props.excerpt}</p>}
        </div>
            
    );
}
    
export default Project;