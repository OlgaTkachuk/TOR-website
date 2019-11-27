import React from 'react';
import Carousel from "nuka-carousel";
import prod1 from '../assets/images/prod1_home.png'
import prod2 from '../assets/images/prod2_home.png'
import prod3 from '../assets/images/prod3_home.png'
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
                                            <img src={prod1} className="custom-img trends-img"/>
                                        </div>
                                        <h2 className="cards-new-text">{content[lang].coarse_glass}</h2>
                                    </div>
                                    <div className="news-card">
                                        <div className="img-container-custom-car">
                                            <img src={prod2} className="custom-img trends-img"/>
                                        </div>
                                        <h2 className="cards-new-text">{content[lang].coarse_glass}</h2>
                                    </div>
                                    <div className="news-card">
                                        <div className="img-container-custom-car">
                                            <img src={prod3} className="custom-img trends-img"/>
                                        </div>
                                        <h2 className="cards-new-text">{content[lang].flower_vase}</h2>
                                    </div>
                                    {/*<div className="news-card">*/}
                                        {/*<div className="img-container-custom-car">*/}
                                            {/*<img src={prod6} className="custom-img trends-img"/>*/}
                                        {/*</div>*/}
                                        {/*<h2 className="cards-new-text">Classic Vase</h2>*/}
                                    {/*</div>*/}
                                </Carousel>
                            ) : (
                                <Carousel slideWidth="200" className="carousel-container-news" cellAlign="left">
                                    <div className="news-card">
                                        <div className="img-container-custom-car">
                                            <img src={prod1} className="custom-img trends-img"/>
                                        </div>
                                        <h2 className="cards-new-text">{content[lang].coarse_glass}</h2>
                                    </div>
                                    <div className="news-card">
                                        <div className="img-container-custom-car">
                                            <img src={prod2} className="custom-img trends-img"/>
                                        </div>
                                        <h2 className="cards-new-text">{content[lang].coarse_glass}</h2>
                                </div>
                                    <div className="news-card">
                                        <div className="img-container-custom-car">
                                            <img src={prod3} className="custom-img trends-img"/>
                                        </div>
                                        <h2 className="cards-new-text">{content[lang].flower_vase}</h2>
                                    </div>
                                    {/*<div className="news-card">*/}
                                        {/*<div className="img-container-custom-car">*/}
                                            {/*<img src={prod6} className="custom-img trends-img"/>*/}
                                        {/*</div>*/}
                                        {/*<h2 className="cards-new-text">Classic Vase</h2>*/}
                                    {/*</div>*/}
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