import React, {Component} from 'react';
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import './WhatsNew.css'
import vases from "../assets/images/3vases.png";
import round from "../assets/images/round_vase.png";
import prod6 from "../assets/images/prod6.png";
import Carousel from "nuka-carousel";
import NewArrivalsCarousel from "../Components/NewArrivalsCarousel";
import Trends from "../Components/Trends";

class WhatsNew extends Component {
    render() {
        return (
            <div>
                <Hero>
                    <Banner letter={"W"} title={"What's new"}
                            classname={"letter-about new-letter"}/>
                </Hero>
                <NewArrivalsCarousel/>
                <Trends/>
                <Footer/>
            </div>
        );
    }
}

export default WhatsNew;