import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LanguageContext, {LanguageConsumer} from "./LanguageContext";
import Banner from "./Banner";
import {content} from "../content/content";
import video from '../assets/video_new.m4v'

class DesignBlock extends Component {

    render() {
        return (
            <>
                <LanguageConsumer>
                    {({lang = ''}) => (
                        <>
                            <section className="design-wrapper">
                                <video autoPlay muted loop id="myVideo">
                                    <source src={video} type="video/mp4"/>
                                </video>
                                <div className="design-text">
                                    <p>{content[lang].design_text}</p>
                                    <Link to="/custom" className="button-dark design-button">{content[lang].explore_button}</Link>
                                </div>
                                <div className="design-title">
                                    <h1>{content[lang].design_your_item}</h1>
                                    <hr className="hr-same design-hr"/>
                                    <h3>{content[lang].design_your_item_letter}</h3>
                                </div>
                            </section>
                            <div className="design-mobile-wrapper">
                                <div className="design-text-mobile">
                                    <p>{content[lang].design_text}</p>
                                </div>
                            </div>
                        </>)}
            </LanguageConsumer>
            </>)
    }
}


export default DesignBlock;