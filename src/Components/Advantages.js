import React from 'react';
import {FaPencilRuler} from "react-icons/fa";
import {FaHandPaper} from "react-icons/fa";
import {FaAward} from "react-icons/fa";
import {LanguageConsumer} from "./LanguageContext";
import {content} from "../content/content";

const Advantages = () => {
    return (
        <LanguageConsumer>
            {({lang = ''}) => (
                <section className="adv-section">
                    <h1 className="section-title">{content[lang].different_title}</h1>
                    <div className="adv-wrapper">
                        <div className="adv-card">
                            <FaHandPaper size={120}/>
                            <p className='adv-name'>{content[lang].adv_handmade}</p>
                        </div>
                        <div className="adv-card">
                            <FaPencilRuler size={110}/>
                            <p className='adv-name'>{content[lang].adv_order}</p>
                        </div>
                        <div className="adv-card">
                            <FaAward size={120}/>
                            <p className='adv-name'>{content[lang].adv_experience}</p>
                        </div>
                    </div>
                </section>
            )}
        </LanguageConsumer>
    );
};

export default Advantages;