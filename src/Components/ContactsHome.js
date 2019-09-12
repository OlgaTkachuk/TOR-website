import React from 'react';

const ContactsHome = () => {
    return (
        <section className="contacts-home">
            <div className="contacts-header">
                <h1 className="section-title contacts-title ">Contact Us</h1>
                <hr className="hr-same contacts-hr"/>
            </div>
            <div className="contacts-info">
                <ul>
                    <li>+38 (098) 000 00 00</li>
                    <li>+38 (098) 111 22 33</li>
                    <li>email@gmail.com</li>
                </ul>
            </div>
        </section>
    );
};

export default ContactsHome;