import React, {Component} from 'react';

import vaza_kvadrat from '../assets/images/vaza_kvadrat.svg'
import bokal from '../assets/images/bokal.svg'
import dekanter from '../assets/images/dekanter.svg'
import tort from '../assets/images/tort.svg'
import vaza_pidl from '../assets/images/vaza_pidl.svg'
import pidsv from '../assets/images/pidsv.svg'
import {Link} from 'react-router-dom';


class BlockMenu extends Component {
    render() {
        return (
            <section>
                <div className="menu-wrapper">
                    <div className="cards-column column-2">
                        <div className="cards-row">
                            <Link to="/dev">
                                <div className="menu-card-2 menu-card-2-mob">
                                    <div className="text-wrapper text-wrapper-1">
                                        <h2>Cylindrical and square vases</h2>
                                    </div>
                                    <img src={vaza_kvadrat} className="menu-img-1 menu-img-same" alt={''}/>
                                </div>
                            </Link>
                        </div>
                        <div className="cards-row">
                            <Link to="/dev">
                                <div className="menu-card-1 menu-card-1-1">
                                    <div className="text-wrapper">
                                        <h2>Cognac glass<br/> and <br/> sphere</h2>
                                    </div>
                                    <img src={bokal} className="menu-img-same menu-img-4" alt={''}/>
                                </div>
                            </Link>
                            <Link to="/dev">
                                <div className="menu-card-1 menu-card-1-1">
                                    <div className="text-wrapper">
                                        <h2>Decanter, hookah</h2>
                                    </div>
                                    <img src={dekanter} className="menu-img-same menu-img-3" alt={''}/>
                                </div>
                            </Link>
                        </div>
                        <div className="cards-row">
                            <Link to="/dev">
                                <div className="menu-card-2">
                                    <div className="text-wrapper">
                                        <h2>Cake maker, candy bar</h2>
                                    </div>
                                    <img src={tort} className="menu-img-2 menu-img-same"  alt={''}/>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="cards-column column-1">
                        <div className="cards-row">
                            <div className="menu-title-div">
                                <Link to="/dev">
                                    <div className="title-wrapper">
                                        <h1>Our collections</h1>
                                    </div>
                                </Link>
                                <hr className="hr-same menu-hr"/>
                                <h3 className="menu-letter">C</h3>
                            </div>
                        </div>
                        <div className="cards-row">
                            <Link to="/dev">
                                <div className="menu-card-1">
                                    <div className="text-wrapper">
                                        <h2>Decorative <br/> floor<br/> vases</h2>
                                    </div>
                                    <img src={vaza_pidl} className="menu-img-same menu-img-5" alt={''}/>
                                </div>
                            </Link>
                            <Link to="/dev">
                                <div className="menu-card-1">
                                    <div className="text-wrapper">
                                        <h2>Candlestick</h2>
                                    </div>
                                    <img src={pidsv} className="menu-img-same menu-img-6" alt={''}/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlockMenu;