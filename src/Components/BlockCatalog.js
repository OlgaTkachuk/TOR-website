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
import {LanguageConsumer} from "./LanguageContext";
import {content} from "../content/content";


class BlockCatalog extends Component {
    render() {
        return (
            <LanguageConsumer>
                {({lang = ''}) => (
                    <div>
                        <div className="block-menu-wrapper">
                            <Link to="/collection/n" style={{textDecoration: 'none'}} className="item-wrapper">
                                <div className="block-item">
                                    <img src={vaza_kvadrat} className="img-catalog hide-img-mob"/>
                                    <p className="catalog-block-text">{content[lang].coll_n_title}</p>
                                </div>
                            </Link>
                            <Link to="/news" style={{textDecoration: 'none'}} className={"news-link-div"}>
                                <div className="block-item block-link">
                                    <h2 className="letter-catalog-menu">{content[lang].new_arr_letter}</h2>
                                    <p className="catalog-new-title">{content[lang].new_arrivals}</p>
                                    <FaChevronRight className="arrow-big-icon" size={190}/>
                                    <FaChevronRight className="arrow-small-icon" size={50}/>
                                </div>
                            </Link>
                            <Link to="/collection/d" style={{textDecoration: 'none'}}>
                                <div className="block-item">
                                    <img src={bokal} className="img-catalog hide-img-mob"/>
                                    <p className="catalog-block-text text-2">{content[lang].coll_d_title}</p>
                                </div>
                            </Link>
                            <Link to="/collection/s" style={{textDecoration: 'none'}}>
                                <div className="block-item">
                                    <img src={dekanter} className="img-catalog hide-img-mob"/>
                                    <p className="catalog-block-text text-2">{content[lang].coll_s_title}</p>
                                </div>
                            </Link>
                            <Link to="/collection/k" style={{textDecoration: 'none'}}>
                                <div className="block-item">
                                    <img src={tort} className="img-catalog img-tort hide-img-mob"/>
                                    <p className="catalog-block-text text-2">{content[lang].coll_k_title}</p>
                                </div>
                            </Link>
                            <Link to="/collection/w" style={{textDecoration: 'none'}}>
                                <div className="block-item">
                                    <img src={vaza_pidl} className="img-catalog img-vaza hide-img-mob"/>
                                    <p className="catalog-block-text text-2">{content[lang].coll_w_title}</p>
                                </div>
                            </Link>
                            <Link to="/collection/f" style={{textDecoration: 'none'}}>
                                <div className="block-item">
                                    <img src={pidsv} className="img-catalog hide-img-mob"/>
                                    <p className="catalog-block-text text-2">{content[lang].coll_f_title}</p>
                                </div>
                            </Link>
                            <Link to="/collection/l" style={{textDecoration: 'none'}}>
                                <div className="block-item">
                                    <p className="catalog-block-text text-2">{content[lang].coll_l_title}</p>
                                </div>
                            </Link>
                            <Link to="/collection/b" style={{textDecoration: 'none'}}>
                                <div className="block-item">
                                    <p className="catalog-block-text text-2">{content[lang].coll_b_title}</p>
                                </div>
                            </Link>
                            <Link to="/collection/c" style={{textDecoration: 'none'}}>
                                <div className="block-item">
                                    <p className="catalog-block-text text-2 text-long ">{content[lang].coll_c_title}</p>
                                </div>
                            </Link>
                            <Link to="/collection/g" style={{textDecoration: 'none'}}>
                                <div className="block-item">
                                    <p className="catalog-block-text text-2 text-long ">{content[lang].coll_g_title}</p>
                                </div>
                            </Link>
                            <Link to="/collection/h" style={{textDecoration: 'none'}}>
                                <div className="block-item">
                                    <p className="catalog-block-text text-2">{content[lang].coll_h_title}</p></div>
                            </Link>
                            <Link to="/collection/r" style={{textDecoration: 'none'}}>
                                <div className="block-item">
                                    <div className="block-item">
                                        <p className="catalog-block-text text-2">{content[lang].coll_r_title}</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/collection/v" style={{textDecoration: 'none'}}>
                                <div className="block-item">
                                    <p className="catalog-block-text text-2 text-long ">{content[lang].coll_v_title}</p>
                                </div>
                            </Link>
                            <Link to="/collection/x" style={{textDecoration: 'none'}}>
                                <div className="block-item">
                                    <p className="catalog-block-text text-2 text-long ">{content[lang].coll_x_title}</p>
                                </div>
                            </Link>

                        </div>
                    </div>
                )}
            </LanguageConsumer>
        );
    }
}

export default BlockCatalog;