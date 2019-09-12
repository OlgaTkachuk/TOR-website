import React, {Component} from 'react';
import prod5 from '../assets/images/prod5.png'
import prod6 from '../assets/images/prod6.png'
import prod3 from '../assets/images/prod3.png'
import {FaChevronRight} from "react-icons/fa"
import {FaChevronLeft} from "react-icons/fa"
import Carousel from 'nuka-carousel';
import Media from 'react-media';

class NewArrivalsHome extends Component {

    render() {

        return (
            <div>
                <Media query="(max-width: 599px)">
                    {matches =>
                        matches ? (
                            <section className="new-arr-section">
                                <h1 className="section-title new-arr-title">New Arrivals</h1>
                                <hr className="hr-same new-arr-hr"/>
                                    <Carousel slideWidth="300" cellAlign='center' withoutControls={true}>
                                        <div className="new-arr-card new-arr-card-mob">
                                            <div className="new-arr-img-container">
                                                <img src={prod5} className="new-arr-img"/>
                                            </div>
                                            <h2 className="new-arr-name">Classic Vase</h2>
                                            <p className="new-arr-code">A5679</p>
                                        </div>
                                        <div  className="new-arr-card">
                                            <div className="new-arr-img-container">
                                                <img src={prod3} className="new-arr-img"/>
                                            </div>
                                            <h2 className="new-arr-name">Classic Vase</h2>
                                            <p className="new-arr-code">A5679</p>
                                        </div>
                                        <div  className="new-arr-card">
                                            <div className="new-arr-img-container">
                                                <img src={prod6} className="new-arr-img"/>
                                            </div>
                                            <h2 className="new-arr-name">Classic Vase</h2>
                                            <p className="new-arr-code">A5679</p>
                                        </div>
                                    </Carousel>

                            </section>
                        ) : (
                            <section className="new-arr-section">
                                <h1 className="section-title new-arr-title">New Arrivals</h1>
                                <hr className="hr-same new-arr-hr"/>

                                <div className="new-arr-container">
                                    <div id={1} className={"new-arr-card card-1"}>
                                        <div className="new-arr-img-container">
                                            <img src={prod5} className="new-arr-img"/>
                                        </div>
                                        <h2 className="new-arr-name">Classic Vase</h2>
                                        <p className="new-arr-code">A5679</p>
                                    </div>
                                    {/*<div className="button-new-arr button-hide" ><FaChevronLeft size={40} color="#d4d4dc" onClick={this.state.handleClickLeft}/></div>*/}
                                    <div id={2} className="new-arr-card card-2">
                                        <div className="new-arr-img-container">
                                            <img src={prod3} className="new-arr-img"/>
                                        </div>
                                        <h2 className="new-arr-name">Classic Vase</h2>
                                        <p className="new-arr-code">A5679</p>
                                    </div>
                                    {/*<div className="button-new-arr button-hide"><FaChevronRight size={40} color="#d4d4dc"/></div>*/}
                                    <div id={3} className="new-arr-card card-3">
                                        <div className="new-arr-img-container">
                                            <img src={prod6} className="new-arr-img"/>
                                        </div>
                                        <h2 className="new-arr-name">Classic Vase</h2>
                                        <p className="new-arr-code">A5679</p>
                                    </div>
                                </div>

                            </section>
                        )
                    }
                </Media>
            </div>


        );
    }
}

export default NewArrivalsHome;