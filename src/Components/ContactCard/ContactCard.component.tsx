import { useEffect } from 'react';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

import Vr from '../../Assets/Icons/Common/Vr.svg';

import './style.css';

export function ContactCardComponent(): JSX.Element {

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    })

    const listenToScroll = () => {
        let contactElement = document.getElementById('contact-card')!;
        let containerSingle = document.getElementById('single-property-container')!;
        let footerElement = document.getElementById('footer')!;
        var topPos = contactElement.offsetHeight + window.scrollY;
        if (topPos + contactElement.offsetHeight >= footerElement.offsetTop - 10) {
            contactElement.style.position = 'absolute';
            contactElement.style.bottom = '-6vh';
            contactElement.style.removeProperty('top');
        }
        if (contactElement.style.position === 'absolute') {
            if (window.scrollY < containerSingle.offsetHeight) {
                contactElement.style.position = 'fixed';
                contactElement.style.top = '6vh';
                contactElement.style.removeProperty('bottom');
            }
        }
        if (contactElement.style.position === 'fixed') {
            if (window.scrollY < containerSingle.offsetTop + 50) {
                contactElement.style.position = 'absolute';
                contactElement.style.top = '6vh';
                contactElement.style.removeProperty('bottom');
            }
        }
    }
    return (
        <div id='contact-card' className="contact-card font-lato" style={{ position: 'absolute' }}>
            <div className='flex'>
                <BsFillTelephoneFill className='phone-icon' size={25} color={'#1B2B42'} />
                <h1>Contacto</h1>
            </div>
            <div className='mt-4 ml-10'>
                <p>3145773390</p>
                <p>contacto@arrendamos.co</p>
            </div>
            <div className='card-btn-container'>
                <button style={{ backgroundColor: '#1B2B42' }}>
                    <img src={Vr} alt="" width={50} style={{ marginRight: '0.8rem' }} />
                    Agendar un recorrido virtual guiado
                </button>
                <button style={{ backgroundColor: '#009DDC' }}>
                    <AiTwotoneCalendar size={35} style={{ marginRight: '0.8rem' }} />
                    Agendar Visita
                </button>
                <button style={{ backgroundColor: '#ffff', border: '1px solid #009B72', color: '#009B72' }}>
                    <IoLogoWhatsapp size={35} style={{ marginRight: '0.8rem' }} />
                    Contactar por Whatsapp
                </button>
            </div>
        </div>
    )
}