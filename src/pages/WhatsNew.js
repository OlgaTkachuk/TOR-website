import React, {Component} from 'react';
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import './WhatsNew.css'
import NewArrivalsCarousel from "../Components/NewArrivalsCarousel";
import Trends from "../Components/Trends";
import {LanguageConsumer} from "../Components/LanguageContext";
import {content} from "../content/content";

class WhatsNew extends Component {
    render() {
        return (
            <LanguageConsumer>
                {({lang = ''}) => (
                    <div>
                        <Hero>
                            <Banner letter={content[lang].news_hero_letter} title={content[lang].news_hero}
                                    classname={"letter-about new-letter"}/>
                        </Hero>
                        <NewArrivalsCarousel/>
                        <Footer/>
                    </div>
                )}
            </LanguageConsumer>
        );
    }
}

export default WhatsNew;