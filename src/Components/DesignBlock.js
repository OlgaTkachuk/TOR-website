import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LanguageContext, {LanguageConsumer} from "./LanguageContext";
import Banner from "./Banner";
import {content} from "../content/content";

class DesignBlock extends Component {

    render() {
        return (
            <>
                <LanguageConsumer>
                {({lang = ''}) => (
                        <>
                            <section className="design-wrapper">
                                <div className="design-text">
                                    <p>{content[lang].title}</p>
                                    {/*<Link to="/custom" className="button-dark design-button">Explore</Link>*/}
                                </div>
                                <div className="design-title">
                                    {/*<h1>onClick={handler()}>{value}</h1>*/}
                                    <hr className="hr-same design-hr"/>
                                    <h3>D</h3>
                                </div>
                            </section>
                            <div className="design-mobile-wrapper">
                                <div className="design-text-mobile">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis
                                        iaculis
                                        leo at
                                        facilisis. Etiam dignissim nulla tincidunt tortor tincidunt luctus sed ut magna.
                                        Maecenas
                                        tempus ipsum eget sagittis pretium. Duis ut metus ut est laoreet lobortis. In
                                        egestas
                                        posuere neque, nec tincidunt dolor maximus eu. Donec ante mi, tincidunt eget
                                        nunc
                                        non,
                                        dignissim efficitur orci. Maecenas pretium pellentesque lacinia. Aenean aliquam
                                        consequat
                                        nunc, eget vehicula justo tincidunt in.
                                    </p>
                                </div>
                            </div>
                        </>)}
            </LanguageConsumer>
            </>)
    }
}


export default DesignBlock;