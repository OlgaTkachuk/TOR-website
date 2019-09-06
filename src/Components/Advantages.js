import React from 'react';
import { FaPencilRuler } from "react-icons/fa";
import { FaHandPaper} from "react-icons/fa";
import { FaAward} from "react-icons/fa";

const Advantages = () => {
    return (
        <section className="adv-section">
            <h1 className="section-title">Why we are different</h1>
            <div className="adv-wrapper">
                <div className="adv-card">
                    <FaHandPaper size={120}/>
                    <p className='adv-name'>Hand-made products</p>
                </div>
                <div className="adv-card">
                    <FaPencilRuler size={110}/>
                    <p className='adv-name'>Make to order</p>
                </div>
                <div className="adv-card">
                    <FaAward size={120}/>
                    <p className='adv-name'>27 years of experience</p>
                </div>
            </div>
        </section>
    );
};

export default Advantages;