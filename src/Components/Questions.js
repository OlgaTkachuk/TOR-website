import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {LanguageConsumer} from "./LanguageContext";
import {content} from "../content/content";

class Questions extends Component {
    render() {
        return (

            <LanguageConsumer>
                {({lang = ''}) => (
                    <section className="questions-section">
                        <h1 className="section-title">{content[lang].questions}</h1>
                        <hr className="hr-same hr-quest"/>
                        <div className="button-wrapper">
                            <Link to='/contacts' className="button-dark button-quest">{content[lang].contact_us_title}</Link>
                        </div>
                        <div className="questions-background">
                        </div>
                    </section>
                )}
            </LanguageConsumer>
        );
    }
}

export default Questions;