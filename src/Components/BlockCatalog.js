import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {FaChevronRight} from 'react-icons/fa'
import {IoIosArrowForward} from 'react-icons/io'
import vaza_kvadrat from '../assets/images/vaza_kvadrat.svg'
import bokal from '../assets/images/bokal.svg'
import dekanter from '../assets/images/dekanter.svg'
import tort from '../assets/images/tort.svg'
import vaza_pidl from '../assets/images/vaza_pidl.svg'
import pidsv from '../assets/images/pidsv.svg'


class BlockCatalog extends Component {
    render() {
        return (
            <div>
                <div className="block-menu-wrapper">
                    <Link to="/collection/a" style={{textDecoration: 'none'}} className="item-wrapper">
                        <div className="block-item">
                            <img src={vaza_kvadrat} className="img-catalog hide-img-mob"/>
                            <p className="catalog-block-text">Cylindrical<br/> and square <br/>vases</p>
                        </div>
                    </Link>
                    <Link to="/news" style={{textDecoration: 'none'}} className={"news-link-div"}>
                        <div className="block-item block-link">
                            <h2 className="letter-catalog-menu">N</h2>
                            <p className="catalog-new-title">New arrivals</p>
                            <FaChevronRight className="arrow-big-icon" size={190}/>
                            <FaChevronRight className="arrow-small-icon" size={50}/>
                        </div>
                    </Link>
                    <Link to="/collection/c" style={{textDecoration: 'none'}}>
                        <div className="block-item">
                            <img src={bokal} className="img-catalog hide-img-mob"/>
                            <p className="catalog-block-text text-2">Cognac <br/> glass<br/> and sphere</p>
                        </div>
                    </Link>
                    <Link to="/collection/b" style={{textDecoration: 'none'}}>
                        <div className="block-item">
                            <img src={dekanter} className="img-catalog hide-img-mob"/>
                            <p className="catalog-block-text text-2">Decanter, <br/>hookah</p>
                        </div>
                    </Link>
                    <Link to="/collection/d" style={{textDecoration: 'none'}}>
                        <div className="block-item">
                            <img src={tort} className="img-catalog img-tort hide-img-mob"/>
                            <p className="catalog-block-text text-2">Cake <br/>maker, <br/>candy bar</p>
                        </div>
                    </Link>
                    <Link to="/collection/a" style={{textDecoration: 'none'}}>
                        <div className="block-item">
                            <img src={vaza_pidl} className="img-catalog img-vaza hide-img-mob"/>
                            <p className="catalog-block-text text-2">Decorative<br/> floor<br/> vases</p>
                        </div>
                    </Link>
                    <Link to="/news" style={{textDecoration: 'none'}}>
                        <div className="block-item">
                            <img src={pidsv} className="img-catalog hide-img-mob"/>
                            <p className="catalog-block-text text-2">Candlestick</p>
                        </div>
                    </Link>
                    <Link to="/collection/b" style={{textDecoration: 'none'}}>
                        <div className="block-item"></div>
                    </Link>
                    <Link to="/news" style={{textDecoration: 'none'}}>
                        <div className="block-item"></div>
                    </Link>
                    <Link to="/news">
                        <div className="block-item"></div>
                    </Link>
                    <Link to="/news">
                        <div className="block-item"></div>
                    </Link>
                    <Link to="/news">
                        <div className="block-item"></div>
                    </Link>
                    <Link to="/news">
                        <div className="block-item"></div>
                    </Link>
                    <Link to="/news">
                        <div className="block-item"></div>
                    </Link>
                    <Link to="/news">
                        <div className="block-item"></div>
                    </Link>
                    <Link to="/news">
                        <div className="block-item"></div>
                    </Link>
                    <Link to="/news">
                        <div className="block-item"></div>
                    </Link>
                    <Link to="/news">
                        <div className="block-item"></div>
                    </Link>

                </div>
            </div>
        );
    }
}

export default BlockCatalog;