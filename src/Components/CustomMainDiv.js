import React from 'react';
import ReactPlayer from 'react-player'
import {content} from "../content/content";
import {LanguageConsumer} from "./LanguageContext";

const CustomMainDiv = () => {
    return (
        <LanguageConsumer>
            {({lang = ''}) => (
                <section>
                    <div>
                        <h3 className="section-title">{content[lang].custom_made_title}</h3>
                        <hr className="hr-same hr-custom"/>
                        <p className="par-custom">
                            {content[lang].design_text}
                        </p>
                    </div>
                    <div className="custom-container-1">
                        <div className="div-custom-left">
                            <div className="background-div-custom">
                                <ul>
                                    <li className="li-heading">{content[lang].designing}</li>
                                    <li className="li-item">{content[lang].design_par}</li>
                                    <li className="li-heading">{content[lang].tech_assisting}</li>
                                    <li className="li-item">{content[lang].tech_assisting_par}</li>
                                    <li className="li-heading">{content[lang].implementing}</li>
                                    <li className="li-item">{content[lang].implementing_par}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="div-custom-right">
                            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width='100%'
                                         height='100%'/>
                        </div>
                    </div>
                </section>
            )}
        </LanguageConsumer>
    );
};

export default CustomMainDiv;