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

class Home extends Component {
    render() {
        return (
            <div>
                <Hero>
                    <Link to="/">
                        <img src={logo_final} alt="TOR logo" className="logo_white"/>
                    </Link>
                    <Banner letter={"T"} title={"Traditions & Innovation"} subtitle={"Doing our best since 1992"}
                            classname={"letter-home"}/>
                </Hero>
                <BlockMenu/>
                <DesignBlock/>
                <AboutSection title={"About us"} title_classname={"home-about-title"}/>
                <PlusesSection/>
                <NewArrivalsHome/>
                <ContactsHome/>
                <Footer/>
            </div>
        );
    }
}

export default Home;