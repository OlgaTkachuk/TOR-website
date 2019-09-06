import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Questions extends Component {
    render() {
        return (
            <section className="questions-section">
                <h1 className="section-title">Have questions?</h1>
                <hr className="hr-same hr-quest"/>
                <div className="button-wrapper">
                    <Link to='/contacts' className="button-dark button-quest">Contact us</Link>
                </div>
                <div className="questions-background">
                </div>
            </section>
        );
    }
}

export default Questions;