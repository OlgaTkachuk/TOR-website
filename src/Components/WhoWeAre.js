import React, {Component} from 'react';
import img10 from '../assets/images/img10.jpg'
import img11 from '../assets/images/img11.jpg'
import img12 from '../assets/images/img12.jpg'
import {LanguageConsumer} from "./LanguageContext";
import {content} from "../content/content";

class WhoWeAre extends Component {
    render() {
        return (
            <LanguageConsumer>
                {({lang = ''}) => (
                    <div className="polygon">
                        <h3 className="letters-whoweare">Lorem</h3>
                        <p className="whoweare-text">{content[lang].who_we_are_text}</p>
                        <div className="img-wrapper-mobile img-wrapper">
                            <div className="wrapper1">
                                <img src={img10} alt="" className="img1-whoweare"/>
                                <img src={img12} alt="" className="img2-whoweare"/>
                            </div>
                            <div>
                                <img src={img11} alt="" className="img3-whoweare"/>
                            </div>
                        </div>
                    </div>
                )}
            </LanguageConsumer>
        );
    };
}
export default WhoWeAre;