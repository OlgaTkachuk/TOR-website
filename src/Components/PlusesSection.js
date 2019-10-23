import React from 'react';
import {LanguageConsumer} from "./LanguageContext";
import {content} from "../content/content";


const PlusesSection = () => {
    let newDate = new Date();
    let year = newDate.getFullYear();
    let date = year - 1992;
    return (
        <LanguageConsumer>
            {({lang = ''}) => (
                <section className="pluses-section">
                    <div className="pluses-section-wrapper">
                        <div className="pluses-container">
                            <h1 className="pluses-header">{date}</h1>
                            <p className="pluses-minor">{content[lang].pluses_experience}</p>
                        </div>
                        <div className="pluses-container">
                            <h1 className="pluses-header">38</h1>
                            <p className="pluses-minor">{content[lang].pluses_customers}</p>
                        </div>
                        <div className="pluses-container">
                            <h1 className="pluses-header">> 10</h1>
                            <p className="pluses-minor">{content[lang].pluses_countries}</p>
                        </div>
                    </div>
                </section>
            )}
        </LanguageConsumer>
    );
};

export default PlusesSection;