import React from 'react';
import {FaViber} from 'react-icons/fa';
import {FaPhoneVolume} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import {FaMapMarkerAlt} from 'react-icons/fa';


const ContactsData = () => {
    return (
        <div className="contacts">
            <h1 className="section-title title-left-contacts elem-hide-mob">Get in</h1>
            <h1 className="section-title title-left-contacts elem-hide-desktop">Get in touch</h1>
            <hr className="hr-same "/>
            <div className="contacts-data-container">
                <div className="contacts-wrapper-1">
                    <FaPhoneVolume size={60} className="icon-contacts"/>
                    <FaEnvelope size={60} className="icon-contacts"/>
                    <FaViber size={60} className="icon-contacts"/>
                    <FaMapMarkerAlt size={60} className="icon-contacts"/>
                </div>
                <div className="contacts-wrapper-2">
                    <h3 id="one">+38 (098) 000 00 00</h3>
                    <h3 id="two">+38 (098) 111 22 33</h3>
                    <h3 id="three">email@gmail.com</h3>
                    <h3 id="four">emails23@torglass.com</h3>
                    <h3 id="five">+38 (089) 675 86 34</h3>
                    <h3 id="six">Lviv,Ukraine</h3>
                </div>
            </div>
        </div>

    );
};

export default ContactsData;