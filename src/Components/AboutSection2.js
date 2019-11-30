import React from 'react';
import {Link} from "react-router-dom";
import img_par_1 from '../assets/images/photo_par6.jpg';
import img_par_2 from '../assets/images/photo_par8.jpg';
import {LanguageConsumer} from "./LanguageContext";
import {content} from "../content/content";

const AboutSection2 = ({title, title_classname}) => {
    return (
        <LanguageConsumer>
            {({lang = ''}) => (
                <section>
                    <h1 className={title_classname + ' ' + 'section-title'}>{title}</h1>
                    <hr className="hr-same about-hr-about"/>
                    <div className="about-background"/>
                    <div className="section-wrap-about-us">
                        <div className="about-text-wrapper-outer">
                            <div className="about-text-wrapper-inner about-text-wrapper-inner-1">
                                <p className="text-paragraph text-paragraph-1">{content[lang].about_text_1}</p>
                            </div>
                        </div>
                        <div>
                            <img src={img_par_1} alt={''} className="img-par"/>
                            <div>
                            </div>
                        </div>
                        <div className="about-text-wrapper-outer">
                            <div className="about-text-wrapper-inner about-text-wrapper-inner-2">
                                <p className="text-paragraph text-paragraph-2">{content[lang].about_text_2}</p>
                            </div>
                        </div>
                        <div className="image-wrapper">
                            <img src={img_par_2} alt={''} className="img-par img-par-2"/>
                        </div>
                    </div>
                </section>
            )}
        </LanguageConsumer>
    );
};

export default AboutSection2;