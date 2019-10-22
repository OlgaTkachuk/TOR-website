import React, {Component} from 'react';
import ContactForm from "../Components/ContactForm";
import './Contacts.css'
import ContactsData from "../Components/ContactsData";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import {LanguageConsumer} from "../Components/LanguageContext";
import {content} from "../content/content";

class Contacts extends Component {
    render() {
        return (
            <LanguageConsumer>
                {({lang = ''}) => (
                    <div>
                        <Hero classname={"hero-contacts"}><Banner letter={content[lang].contacts_hero_letter} title={content[lang].contacts_hero}
                                                                  classname={"letter-about letter-contacts "}/>
                        </Hero>
                        <section className="contact-us-section">
                            <ContactsData/>
                            <ContactForm/>
                        </section>
                        <Footer/>
                    </div>
                )}
            </LanguageConsumer>
        );
    }
}

export default Contacts;