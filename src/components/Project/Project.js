import React from 'react';
import './Project.css';

function Project(props) {
    return (
        <a className="project-card" href={props.link}>
            {props.img && <img src={props.img} className="project-card__img" alt="" />}
            <div className="project-card__content">
                {props.title && <h2 className="project-card__title">{props.title}</h2>}
                {props.excerpt && <p className="project-card__text">{props.excerpt}</p>}
                {props.link && <span className="project-card__link">View project</span>}
            </div>
        </a>

    );
}

export default Project;