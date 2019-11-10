import React, {Component} from 'react';

import vaza_kvadrat from '../assets/images/vaza_kvadrat.svg'
import bokal from '../assets/images/bokal.svg'
import dekanter from '../assets/images/dekanter.svg'
import tort from '../assets/images/tort.svg'
import vaza_pidl from '../assets/images/vaza_pidl.svg'
import pidsv from '../assets/images/pidsv.svg'
import {Link} from 'react-router-dom';
import {content} from "../content/content";
import {LanguageConsumer} from "./LanguageContext";


class BlockMenu extends Component {
    render() {
        return (
            <LanguageConsumer>
                {({lang = ''}) => (
                    <section className="menu-cont">
                        <div className="menu-wrapper">
                            <div className="cards-column column-2">
                                <div className="cards-row">
                                    <Link to="/collection/n">
                                        <div className="menu-card-2 menu-card-2-mob">
                                            <div className={(lang == "ua") ? "text-wrapper text-wrapper-1 menu-card-big-text" : "text-wrapper text-wrapper-1"}>
                                                <h2>{content[lang].coll_n_title}</h2>
                                            </div>
                                            <img src={vaza_kvadrat} className="menu-img-1 menu-img-same" alt={''}/>
                                        </div>
                                    </Link>
                                </div>
                                <div className="cards-row">
                                    <Link to="/collection/d">
                                        <div className="menu-card-1 menu-card-1-1">
                                            <div className={(lang == "ua") ? "text-wrapper menu-card-smaller" : "text-wrapper"}>
                                                <h2>{content[lang].coll_d_title}</h2>
                                            </div>
                                            <img src={bokal} className="menu-img-same menu-img-4" alt={''}/>
                                        </div>
                                    </Link>
                                    <Link to="/collection/s">
                                        <div className="menu-card-1 menu-card-1-1">
                                            <div className="text-wrapper">
                                                <h2>{content[lang].coll_s_title}</h2>
                                            </div>
                                            <img src={dekanter} className="menu-img-same menu-img-3" alt={''}/>
                                        </div>
                                    </Link>
                                </div>
                                <div className="cards-row">
                                    <Link to="/collection/k">
                                        <div className="menu-card-2">
                                            <div className={(lang == "ua") ? "text-wrapper menu-card-big-text" : "text-wrapper"}>
                                                <h2>{content[lang].coll_k_title}</h2>
                                            </div>
                                            <img src={tort} className={(lang == "ua") ? "menu-img-same menu-img-2 menu-img-2-ukr" : "menu-img-same menu-img-2" } alt={''}/>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="cards-column column-1">
                                <div className="cards-row">
                                    <div className="menu-title-div">
                                        <Link to="/catalog">
                                            <div className="title-wrapper">
                                                <h1>{content[lang].our_collections}</h1>
                                            </div>
                                        </Link>
                                        <hr className="hr-same menu-hr"/>
                                        <h3 className="menu-letter">C</h3>
                                    </div>
                                </div>
                                <div className="cards-row">
                                    <Link to="/collection/w">
                                        <div className="menu-card-1">
                                            <div className={(lang == "ua") ? "text-wrapper menu-card-big-text" : "text-wrapper"}>
                                                <h2>{content[lang].coll_w_title}</h2>
                                            </div>
                                            <img src={vaza_pidl} className={(lang == "ua") ? "menu-img-same menu-img-5 menu-img-5-ukr" : "menu-img-same menu-img-5" } alt={''}/>
                                        </div>
                                    </Link>
                                    <Link to="/dev">
                                        <div className="menu-card-1">
                                            <div className="text-wrapper">
                                                <h2>{content[lang].coll_f_title}</h2>
                                            </div>
                                            <img src={pidsv} className="menu-img-same menu-img-6" alt={''}/>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </LanguageConsumer>
        );
    }
}

export default BlockMenu;