import React, {Component} from 'react';
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import BlockMenu from "../Components/BlockMenu";
import DesignBlock from "../Components/DesignBlock";
import AboutSection from "../Components/AboutSection"
import PlusesSection from "../Components/PlusesSection";
import ContactsHome from "../Components/ContactsHome";
import NewArrivalsHome from "../Components/NewArrivalsHome";
import Footer from "../Components/Footer";
import {Link} from "react-router-dom";
import logo_final from "../assets/images/logo_white.svg";
import {LanguageConsumer} from "../Components/LanguageContext";
import {content} from "../content/content";
import video from "../assets/video.mp4";

class Home extends Component {
    render() {
        return (
            <div>
                <LanguageConsumer>
                    {({lang = ''}) => (
                        <>
                            <Hero>
                                <Link to="/">
                                    <img src={logo_final} alt="TOR logo" className="logo_white"/>
                                </Link>
                                <Banner letter={"T"} title={content[lang].home_hero_title}
                                        subtitle={content[lang].home_hero_subtitle}
                                        classname={"letter-home"}>
                                </Banner>
                            </Hero>
                            <BlockMenu/>
                            <DesignBlock/>
                            <AboutSection title={content[lang].about_us_title} title_classname={"home-about-title"}/>
                            <PlusesSection/>
                            <NewArrivalsHome/>
                            <ContactsHome/>
                            <Footer/>
                        </>)}
                </LanguageConsumer>
            </div>
        );
    }
}

export default Home;