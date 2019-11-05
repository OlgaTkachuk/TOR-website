import React from 'react';
import {FaViber} from 'react-icons/fa';
import {FaPhoneVolume} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {LanguageConsumer} from "./LanguageContext";
import {content} from "../content/content";


const ContactsData = () => {
    return (
        <LanguageConsumer>
            {({lang = ''}) => (
                <div className="contacts">
                    <h1 className="section-title title-left-contacts elem-hide-mob">{content[lang].get_in}</h1>
                    <h1 className="section-title title-left-contacts elem-hide-desktop">{content[lang].get_in_touch}</h1>
                    <hr className="hr-same "/>
                    <div className="contacts-data-container">
                        <div className="contacts-wrapper-1">
                            <FaPhoneVolume size={60} className="icon-contacts"/>
                            <FaEnvelope size={60} className="icon-contacts"/>
                            <FaViber size={60} className="icon-contacts"/>
                            <FaMapMarkerAlt size={60} className="icon-contacts"/>
                        </div>
                        <div className="contacts-wrapper-2">
                            <h3 id="one">+38 (067) 340 69 33</h3>
                            {/*<h3 id="two">+38 (067) 340 69 33</h3>*/}
                            <h3 id="three">office@torglass.com.ua</h3>
                            {/*<h3 id="four">office</h3>*/}
                            <h3 id="five">+38 (067) 340 69 33</h3>
                            <h3 id="six">{content[lang].adress}</h3>
                        </div>
                    </div>
                </div>
            )}
        </LanguageConsumer>

    );
};

export default ContactsData;