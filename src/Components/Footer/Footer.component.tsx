import { ContactInfo } from '../../Utils/Data/ContactInfo';
import { socialMedia } from '../../Interfaces';

import logo from '../../Assets/Logo.png';

import './style.css';

export function FooterComponent(): JSX.Element {
    return (
        <footer id='footer' className="footer p-8">
            <div className='footer-container grid font-lato mb-8'>
                <div className='flex justify-around w-4/5 pr-24 items-center'>
                    <a href="#">Nuestros inmuebles</a>
                    <a href="#">Publicar inmuble</a>
                    <a href="#">Contáctanos</a>
                </div>
                <div className='social-icon-container pl-8'>
                    <h2>Siguenos</h2>
                    <SocialMediaIcon />
                </div>
            </div>
            <hr />
            <p className='reserved-footer font-lato'>© All rights reserved.</p>
            <div className='footer-img m-12'>
                <img className='mx-auto' src={logo} alt="Logo" />
            </div>
        </footer>
    );
}

function SocialMediaIcon(): JSX.Element {
    const socialMediaInfo: socialMedia[] = ContactInfo.socialMedia;
    return (
        <div className='flex justify-evenly'>
            {socialMediaInfo.map((item: socialMedia, index: number) => {
                const icons = require('react-icons/gr')
                const SocialIcon = icons[`${item.icon}`];
                return (
                    <div key={index} className='social-icon-box'>
                        <SocialIcon size={30} />
                    </div>
                )
            })}
        </div>
    )
}

