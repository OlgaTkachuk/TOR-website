import React from 'react';
import {Link} from "react-router-dom";

const ContactsCustom = () => {
    return (
        <section className="questions-section">
            <h1 className="section-title">Interested?</h1>
            <hr className="hr-same hr-custom"/>
            <div className="button-wrapper">
                <Link to='/contacts' className="button-dark button-quest">Order NOW</Link>
            </div>
        </section>
    );
};

export default ContactsCustom;