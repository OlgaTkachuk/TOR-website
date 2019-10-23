import React from 'react';
import {LanguageConsumer} from "./LanguageContext";
import {content} from "../content/content";

const ContactsHome = () => {
    return (
        <LanguageConsumer>
            {({lang = ''}) => (
                <section className="contacts-home">
                    <div className="contacts-header">
                        <h1 className="section-title contacts-title ">{content[lang].contact_us_title}</h1>
                        <hr className="hr-same contacts-hr"/>
                    </div>
                    <div className="contacts-info">
                        <ul>

                            <li>+38 (067) 340 69 33</li>
                            <li>office@torglass.com.ua</li>
                        </ul>
                    </div>
                </section>
            )}</LanguageConsumer>
    );
};

export default ContactsHome;