import Carousel from "nuka-carousel";
import prod5 from "../assets/images/prod5.png";
import prod3 from "../assets/images/prod3.png";
import round from "../assets/images/round_vase.png";
import vases from "../assets/images/3vases.png";
import prod6 from "../assets/images/prod6.png";
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
                                                <img src={vases} className="custom-img"/>
                                            </div>
                                            <h2 className=""></h2>
                                        </div>
                                        <div className="custom-card">
                                            <div className="img-container-custom-car">
                                                <img src={round} className="custom-img"/>
                                            </div>
                                            <h2 className="">Classic Vase</h2>
                                        </div>
                                        <div className="custom-card">
                                            <div className="img-container-custom-car">
                                                <img src={prod6} className="custom-img"/>
                                            </div>
                                            <h2 className=""></h2>
                                        </div>
                                    </Carousel>
                                ) : (
                                    <Carousel slideWidth="400" className="carousel-container" cellAlign="left">
                                        <div className="custom-card">
                                            <div className="img-container-custom-car">
                                                <img src={vases} className="custom-img"/>
                                            </div>
                                            <h2 className=""></h2>
                                        </div>
                                        <div className="custom-card">
                                            <div className="img-container-custom-car">
                                                <img src={round} className="custom-img"/>
                                            </div>
                                            <h2 className=""></h2>
                                        </div>
                                        <div className="custom-card">
                                            <div className="img-container-custom-car">
                                                <img src={prod6} className="custom-img"/>
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