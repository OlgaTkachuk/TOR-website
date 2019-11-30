import React, {Component} from 'react';

import prod1_home from '../assets/images/prod1_home.png'
import prod2_home from '../assets/images/prod2_home.png'
import prod3_home from '../assets/images/prod3_home.png'
import {FaChevronRight} from "react-icons/fa"
import {FaChevronLeft} from "react-icons/fa"
import Carousel from 'nuka-carousel';
import Media from 'react-media';
import {LanguageConsumer} from "./LanguageContext";
import {content} from "../content/content";

class NewArrivalsHome extends Component {

    render() {

        return (
            <LanguageConsumer>
                {({lang = ''}) => (
                    <div>
                        <Media query="(max-width: 599px)">
                            {matches =>
                                matches ? (
                                    <section className="new-arr-section">
                                        <h1 className="section-title new-arr-title">{content[lang].new_arrivals_title}</h1>
                                        <hr className="hr-same new-arr-hr"/>
                                        <Carousel slideWidth="300" cellAlign='center' withoutControls={true}>
                                            <div className="new-arr-card new-arr-card-mob">
                                                <div className="new-arr-img-container">
                                                    <img src={prod1_home} alt="Glass vase" className="new-arr-img"/>
                                                </div>
                                                <h2 className="new-arr-name">{content[lang].coarse_glass}</h2>
                                                <p className="new-arr-code">G271</p>
                                            </div>
                                            <div className="new-arr-card">
                                                <div className="new-arr-img-container">
                                                    <img src={prod2_home} alt="Glass vase" className="new-arr-img"/>
                                                </div>
                                                <h2 className="new-arr-name">{content[lang].coarse_glass}</h2>
                                                <p className="new-arr-code">G365</p>
                                            </div>
                                            <div className="new-arr-card">
                                                <div className="new-arr-img-container">
                                                    <img src={prod3_home} alt="Flower vase" className="new-arr-img"/>
                                                </div>
                                                <h2 className="new-arr-name">{content[lang].flower_vase}</h2>
                                                <p className="new-arr-code">G398</p>
                                            </div>
                                        </Carousel>
                                    </section>
                                ) : (
                                    <section className="new-arr-section">
                                        <h1 className="section-title new-arr-title">{content[lang].new_arrivals_title}</h1>
                                        <hr className="hr-same new-arr-hr"/>

                                        <div className="new-arr-container">
                                            <div id={1} className={"new-arr-card card-1"}>
                                                <div className="new-arr-img-container">
                                                    <img src={prod1_home} alt="Glass vase" className="new-arr-img"/>
                                                </div>
                                                <h2 className="new-arr-name">{content[lang].coarse_glass}</h2>
                                                <p className="new-arr-code">G271</p>
                                            </div>
                                            {/*<div className="button-new-arr button-hide" ><FaChevronLeft size={40} color="#d4d4dc" onClick={this.state.handleClickLeft}/></div>*/}
                                            <div id={2} className="new-arr-card card-2">
                                                <div className="new-arr-img-container">
                                                    <img src={prod2_home} alt="Glass vase" className="new-arr-img"/>
                                                </div>
                                                <h2 className="new-arr-name">{content[lang].coarse_glass}</h2>
                                                <p className="new-arr-code">G365</p>
                                            </div>
                                            {/*<div className="button-new-arr button-hide"><FaChevronRight size={40} color="#d4d4dc"/></div>*/}
                                            <div id={3} className="new-arr-card card-3">
                                                <div className="new-arr-img-container">
                                                    <img src={prod3_home} alt="Flower vase" className="new-arr-img"/>
                                                </div>
                                                <h2 className="new-arr-name">{content[lang].flower_vase}</h2>
                                                <p className="new-arr-code">G398</p>
                                            </div>
                                        </div>

                                    </section>
                                )
                            }
                        </Media>
                    </div>
                )}</LanguageConsumer>


        );
    }
}

export default NewArrivalsHome;