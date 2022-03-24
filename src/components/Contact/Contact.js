import React from 'react'
import './Contact.css';
import Socials from './Socials'
import TwitterIcon from './icons/Twitter';
import LinkedinIcon from './icons/Linkedin';
import GithubIcon from './icons/Github';

function Contact(){

    const socialElements = Socials.map(social => {
        let iconEl;
        if(social.service === 'twitter') {
            iconEl = <TwitterIcon />;
        } else if(social.service === 'linkedin') {
            iconEl = <LinkedinIcon />;
        } else if(social.service === 'github') {
            iconEl = <GithubIcon />;
        }
        return <li className={`contact__social-list-item contact__social-list-item--${social.service}`} key={social.id}>
            <a href={social.url}>
                {iconEl}
            </a>
        </li>
    })

    return (<>
        <section className="contact">
            {socialElements && <ul className="contact__social-list">
                {socialElements}
            </ul>}
        </section>
    </>)
}

export default Contact;