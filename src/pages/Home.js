import React, {Component} from 'react';
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import BlockMenu from "../Components/BlockMenu";
import DesignBlock from "../Components/DesignBlock";
import AboutSection from "../Components/AboutSection"
import PlusesSection from "../Components/PlusesSection";
import ContactsHome from "../Components/ContactsHome";

class Home extends Component {
    render() {
        return (
            <div>
                <Hero>
                    <Banner letter={"T"} title={"Traditions & Innovation"} subtitle={"Doing our best since 1992"}
                            classname={"letter-home"}/>
                </Hero>
                <BlockMenu/>
                <DesignBlock/>
                <AboutSection title={"About us"} title_classname={"home-about-title"}/>
                <PlusesSection/>
                <ContactsHome/>
            </div>
        );
    }
}

export default Home;