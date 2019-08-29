import React, {Component} from 'react';
import vase1 from '../assets/images/vase1.png';
import vase2 from '../assets/images/vase2.png';
import vase3 from '../assets/images/vase3.png';
import prod4 from '../assets/images/prod4.png';
import vase6 from '../assets/images/vase6.png';
import {Link} from 'react-router-dom';


class BlockMenu extends Component {
    render() {
        return (
            <div>
                <div className="menu-wrapper">
                    <div className="cards-column column-2">
                        <div className="cards-row">
                            <Link to="/catalog">
                                <div className="menu-card-2 menu-card-2-mob">
                                    <div className="text-wrapper text-wrapper-1">
                                        <h2>Two-pieces products</h2>
                                    </div>
                                    <img src={vase1} className="menu-img-1" alt={''}/>
                                </div>
                            </Link>
                        </div>
                        <div className="cards-row">
                            <Link to="/catalog">
                                <div className="menu-card-1-1">
                                    <div className="text-wrapper">
                                        <h2>Colored glass items</h2>
                                    </div>
                                    <img src={prod4} className="menu-img-4" alt={''}/>
                                </div>
                            </Link>
                            <Link to="/catalog">
                                <div className="menu-card-1-1">
                                    <div className="text-wrapper">
                                        <h2>Items for table setting</h2>
                                    </div>
                                    <img src={vase3} className="menu-img-3" alt={''}/>
                                </div>
                            </Link>
                        </div>
                        <div className="cards-row">
                            <Link to="/catalog">
                                <div className="menu-card-2">
                                    <div className="text-wrapper">
                                        <h2>Lampshades, lamps, components for lamps</h2>
                                    </div>
                                    <img src={vase2} className="menu-img-2" alt={''}/>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="cards-column column-1">
                        <div className="cards-row">
                            <div className="menu-title-div">
                                <Link to="/catalog">
                                    <div className="title-wrapper">
                                        <h1>Our collections</h1>
                                    </div>
                                </Link>
                                <hr/>
                                <h3 className="menu-letter">C</h3>
                            </div>
                        </div>
                        <div className="cards-row">
                            <Link to="/catalog">
                                <div className="menu-card-1">
                                    <div className="text-wrapper">
                                        <h2>Pressed glass items</h2>
                                    </div>
                                    <img src={vase1} className="menu-img-5" alt={''}/>
                                </div>
                            </Link>
                            <Link to="/catalog">
                                <div className="menu-card-1">
                                    <div className="text-wrapper">
                                        <h2>Mouth-blown glassware</h2>
                                    </div>
                                    <img src={vase6} className="menu-img-6" alt={''}/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlockMenu;