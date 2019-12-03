import React from 'react';
import map from '../assets/images/map3.png'
import {LanguageConsumer} from "./LanguageContext";
import {content} from "../content/content";

const Map = () => {
    return (
        <LanguageConsumer>
            {({lang = ''}) => (
                <section>
                    <div className="map-background">
                        <h1 className="section-title map-title">{content[lang].clients_title}</h1>
                        <p className="map-text">{content[lang].map_text_1}</p>

                        <img src={map} alt="Map of customers" className="map-pic"/>
                    </div>
                </section>
            )}
        </LanguageConsumer>
    );
};

export default Map;