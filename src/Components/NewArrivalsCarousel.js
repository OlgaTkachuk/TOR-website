import React from 'react';
import Carousel from "nuka-carousel";
import vases from "../assets/images/3vases.png";
import round from "../assets/images/round_vase.png";
import prod6 from "../assets/images/prod6.png";
import Media from "react-media";
import {LanguageConsumer} from "./LanguageContext";
import {content} from "../content/content";

const NewArrivalsCarousel = () => {
    return (
        <LanguageConsumer>
            {({lang = ''}) => (
                <div>
                    <p className="par-custom">{content[lang].news_text} </p>
                    <h3 className="section-title arrivals-title">{content[lang].our_new_arrivals}</h3>
                    <hr className="hr-same hr-news"/>
                    <Media query="(max-width: 599px)">
                        {matches =>
                            matches ? (
                                <Carousel slideWidth="300" className="carousel-container-news" cellAlign="left">
                                    <div className="news-card">
                                        <div className="img-container-custom-car">
                                            <img src={vases} className="custom-img trends-img"/>
                                        </div>
                                        <h2 className="cards-new-text">Classic Vase</h2>
                                    </div>
                                    <div className="news-card">
                                        <div className="img-container-custom-car">
                                            <img src={round} className="custom-img trends-img"/>
                                        </div>
                                        <h2 className="cards-new-text">Classic Vase</h2>
                                    </div>
                                    <div className="news-card">
                                        <div className="img-container-custom-car">
                                            <img src={prod6} className="custom-img trends-img"/>
                                        </div>
                                        <h2 className="cards-new-text">Classic Vase</h2>
                                    </div>
                                    <div className="news-card">
                                        <div className="img-container-custom-car">
                                            <img src={prod6} className="custom-img trends-img"/>
                                        </div>
                                        <h2 className="cards-new-text">Classic Vase</h2>
                                    </div>
                                </Carousel>
                            ) : (
                                <Carousel slideWidth="200" className="carousel-container-news" cellAlign="left">
                                    <div className="news-card">
                                        <div className="img-container-custom-car">
                                            <img src={vases} className="custom-img trends-img"/>
                                        </div>
                                        <h2 className="cards-new-text">Classic Vase</h2>
                                    </div>
                                    <div className="news-card">
                                        <div className="img-container-custom-car">
                                            <img src={round} className="custom-img trends-img"/>
                                        </div>
                                        <h2 className="cards-new-text">Classic Vase</h2>
                                    </div>
                                    <div className="news-card">
                                        <div className="img-container-custom-car">
                                            <img src={prod6} className="custom-img trends-img"/>
                                        </div>
                                        <h2 className="cards-new-text">Classic Vase</h2>
                                    </div>
                                    <div className="news-card">
                                        <div className="img-container-custom-car">
                                            <img src={prod6} className="custom-img trends-img"/>
                                        </div>
                                        <h2 className="cards-new-text">Classic Vase</h2>
                                    </div>
                                </Carousel>
                            )
                        }
                    </Media>
                </div>
            )}
        </LanguageConsumer>
    );
};

export default NewArrivalsCarousel;