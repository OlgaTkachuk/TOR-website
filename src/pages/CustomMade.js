import React, {Component} from 'react';
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import "./CustomMade.css"
import CustomMainDiv from '../Components/CustomMainDiv'
import CustomOurWorks from "../Components/CustomOurWorks";
import ContactsCustom from "../Components/ContactsCustom";
import {LanguageConsumer} from "../Components/LanguageContext";
import {content} from "../content/content";

class CustomMade extends Component {
    render() {
        return (
            <LanguageConsumer>
                {({lang = ''}) => (
                    <div>
                        <Hero classname={"hero-custom"}>
                            <Banner letter={content[lang].custom_hero_letter} title={content[lang].custom_hero}
                                    classname={"letter-catalog"}/>
                        </Hero>
                        <CustomMainDiv/>
                        <CustomOurWorks/>
                        <ContactsCustom/>
                        <Footer/>
                    </div>
                )}
            </LanguageConsumer>
        );
    }
}

export default CustomMade;