import React from 'react';
import './Project.css';

function Project(props) {
    return (
        <div className="project-card">
            {props.img && <img src={props.img} className="project-card__img" alt="" />}
            <div className="project-card__content">
                {props.title && <h2 class="project-card__title">{props.title}</h2>}
                {props.excerpt && <p className="project-card__text">{props.excerpt}</p>}
                {props.link && <a href={props.link} className="project-card__link">View project</a>}
            </div>
        </div>

    );
}

export default Project;