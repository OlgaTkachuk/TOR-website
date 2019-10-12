import React, {Component} from 'react';
import ContactForm from "../Components/ContactForm";
import './Contacts.css'
import ContactsData from "../Components/ContactsData";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";

class Contacts extends Component {
    render() {
        return (
            <div>
                <Hero classname={"hero-contacts"}><Banner letter={"C"} title={"Contact us"}
                              classname={"letter-about letter-contacts "}/>
                </Hero>
                <section className="contact-us-section">
                    <ContactsData/>
                    <ContactForm/>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default Contacts;