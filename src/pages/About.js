import React, {Component} from 'react';
import './About.css';
import Banner from "../Components/Banner";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import AboutSection2 from "../Components/AboutSection2";
import WhoWeAre from "../Components/WhoWeAre";
import Map from "../Components/Map";
import Advantages from "../Components/Advantages";
import Questions from "../Components/Questions";
import {LanguageConsumer} from "../Components/LanguageContext";
import {content} from "../content/content";

class About extends Component {
    render() {
        return (
            <LanguageConsumer>
                {({lang = ''}) => (
                    <div>
                        <Hero classname={"hero-about"}>
                            <Banner letter={content[lang].about_hero_letter} title={content[lang].about_hero}
                                    classname={"letter-about"}/>
                        </Hero>
                        <WhoWeAre/>
                        <AboutSection2 title={content[lang].our_story_title} title_classname={"about-about-title"}/>
                        <Map/>
                        <Advantages/>
                        <Questions/>
                        <Footer/>
                    </div>
                )}
            </LanguageConsumer>
        );
    }
}

export default About;