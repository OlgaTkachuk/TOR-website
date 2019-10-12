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

class About extends Component {
    render() {
        return (
            <div>
                <Hero classname={"hero-about"}>
                    <Banner letter={"O"} title={"OUR STORY & MISSION"}
                            classname={"letter-about"}/>
                </Hero>
                <WhoWeAre/>
                <AboutSection2 title={"Our story"} title_classname={"about-about-title"}/>
                <Map/>
                <Advantages/>
                <Questions/>
                <Footer/>
            </div>
        );
    }
}

export default About;