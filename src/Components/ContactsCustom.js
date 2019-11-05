import React from 'react';
import {Link} from "react-router-dom";
import {LanguageConsumer} from "./LanguageContext";
import {content} from "../content/content";

const ContactsCustom = () => {
    return (
        <LanguageConsumer>
            {({lang = ''}) => (
                <section className="questions-section">
                    <h1 className="section-title">{content[lang].interested_title}</h1>
                    <hr className="hr-same hr-custom"/>
                    <div className="button-wrapper">
                        <Link to='/contacts' className="button-dark button-quest">{content[lang].order_now}</Link>
                    </div>
                </section>
            )}
        </LanguageConsumer>
    );
};

export default ContactsCustom;