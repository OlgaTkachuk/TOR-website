import Carousel from "nuka-carousel";
import round from "../assets/images/round_vase.png";
import vases from "../assets/images/3vases.png";
import prod_gallery_1 from "../assets/images/B-removebg-preview.png";
import prod_gallery_2 from "../assets/images/C-removebg-preview.png";
import prod_gallery_3 from "../assets/images/N-removebg-preview.png";
import prod_gallery_4 from "../assets/images/S-removebg-preview.png";
import React, {Component} from 'react';
import Media from "react-media";
import {LanguageConsumer} from "./LanguageContext";
import {content} from "../content/content";

class CustomOurWorks extends Component {
    render() {
        return (
            <LanguageConsumer>
                {({lang = ''}) => (
                    <div>
                        <h3 className="section-title">{content[lang].our_works_title}</h3>
                        <hr className="hr-same hr-custom-works"></hr>
                        <Media query="(min-width: 599px) and (max-width: 899px)">
                            {matches =>
                                matches ? (
                                    <Carousel slideWidth="300" className="carousel-container" cellAlign="left">
                                        <div className="custom-card">
                                            <div className="img-container-custom-car">
                                                <img src={vases} alt="glass vases" className="custom-img"/>
                                            </div>
                                            <h2 className=""></h2>
                                        </div>
                                        <div className="custom-card">
                                            <div className="img-container-custom-car">
                                                <img src={round} alt="round glass vase" className="custom-img"/>
                                            </div>
                                            <h2 className="">Classic Vase</h2>
                                        </div>
                                        <div className="custom-card">
                                            <div className="img-container-custom-car">
                                                <img src={prod_gallery_1} alt="exclusive blown glass vase" className="custom-img"/>
                                            </div>
                                            <h2 className=""></h2>
                                        </div>
                                        <div className="custom-card">
                                            <div className="img-container-custom-car">
                                                <img src={prod_gallery_2} alt="coloured cognac glass" className="custom-img"/>
                                            </div>
                                            <h2 className=""></h2>
                                        </div>
                                        <div className="custom-card">
                                            <div className="img-container-custom-car">
                                                <img src={prod_gallery_3} alt="coloured glass" className="custom-img"/>
                                            </div>
                                            <h2 className=""></h2>
                                        </div>
                                        <div className="custom-card">
                                            <div className="img-container-custom-car">
                                                <img src={prod_gallery_4} className="custom-img"/>
                                            </div>
                                            <h2 className=""></h2>
                                        </div>
                                    </Carousel>
                                ) : (
                                    <Carousel slideWidth="400" className="carousel-container" cellAlign="left">
                                        <div className="custom-card">
                                            <div className="img-container-custom-car">
                                                <img src={vases} alt="glass vases" className="custom-img"/>
                                            </div>
                                            <h2 className=""></h2>
                                        </div>
                                        <div className="custom-card">
                                            <div className="img-container-custom-car">
                                                <img src={round} alt="round glass vase" className="custom-img"/>
                                            </div>
                                            <h2 className=""></h2>
                                        </div>
                                        <div className="custom-card">
                                            <div className="img-container-custom-car">
                                                <img src={prod_gallery_1} alt="exclusive blown glass vase" className="custom-img"/>
                                            </div>
                                            <h2 className=""></h2>
                                        </div>
                                        <div className="custom-card">
                                            <div className="img-container-custom-car">
                                                <img src={prod_gallery_2} alt="coloured cognac glass" className="custom-img"/>
                                            </div>
                                            <h2 className=""></h2>
                                        </div>
                                        <div className="custom-card">
                                            <div className="img-container-custom-car">
                                                <img src={prod_gallery_3} alt="coloured glass" className="custom-img"/>
                                            </div>
                                            <h2 className=""></h2>
                                        </div>
                                        <div className="custom-card">
                                            <div className="img-container-custom-car">
                                                <img src={prod_gallery_4} className="custom-img"/>
                                            </div>
                                            <h2 className=""></h2>
                                        </div>
                                    </Carousel>
                                )
                            }
                        </Media>

                        <p className="par-custom">{content[lang].custom_text}</p>
                    </div>
                )}
            </LanguageConsumer>
        );
    }
}

export default CustomOurWorks;