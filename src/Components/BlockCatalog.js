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
import lamp_l from '../assets/images/lamp_l.svg'
import cake_k from '../assets/images/cake_k.svg'
import glass_c from '../assets/images/glass_c.svg'
import vase_g from '../assets/images/vase_g.svg'
import glass_h from '../assets/images/glass_h.svg'
import press_r from '../assets/images/press_r.svg'
import lid_v from '../assets/images/lid_v.svg'
import sphere_x from '../assets/images/sphere_x.svg'

import {LanguageConsumer} from "./LanguageContext";
import {content} from "../content/content";


class BlockCatalog extends Component {
    render() {
        return (
            <LanguageConsumer>
                {({lang = ''}) => (
                    <>
                        <div className={"full-pdf-wrapper-2"}>
                            <p className={"pdf-par pdf-1"}>
                                {content[lang].pdf_text}
                            </p>
                            <Link to="/contacts" className={"button-dark button-full-pdf pdf-1"}>
                                {content[lang].pdf_catalog}
                            </Link>
                        </div>
                        <div>
                            <div className="block-menu-wrapper">
                                <Link to="/collection/n" style={{textDecoration: 'none'}} className="item-wrapper">
                                    <div className="block-item">
                                        <img src={vaza_kvadrat} alt="square vase" className="img-catalog hide-img-mob"/>
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
                                        <img src={bokal} alt="cognac glass" className="img-catalog hide-img-mob"/>
                                        <p className="catalog-block-text text-2">{content[lang].coll_d_title}</p>
                                    </div>
                                </Link>
                                <Link to="/collection/s" style={{textDecoration: 'none'}}>
                                    <div className="block-item">
                                        <img src={dekanter} alt={"decanter"} className="img-catalog hide-img-mob"/>
                                        <p className="catalog-block-text text-2">{content[lang].coll_s_title}</p>
                                    </div>
                                </Link>
                                <Link to="/collection/k" style={{textDecoration: 'none'}}>
                                    <div className="block-item">
                                        <p className="catalog-block-text text-long text-2 ">{content[lang].coll_k_title}</p>
                                        <img src={cake_k} alt="candy bar"
                                             className={(lang == "ua") ? "img-catalog img-cake img-cake-ukr hide-img-mob" : "img-catalog img-cake img-cake1 hide-img-mob"}/>
                                    </div>
                                </Link>
                                <Link to="/collection/w" style={{textDecoration: 'none'}}>
                                    <div className="block-item">
                                        <img src={vaza_pidl} alt="floor vase"
                                             className="img-catalog img-vaza hide-img-mob"/>
                                        <p className="catalog-block-text text-2">{content[lang].coll_w_title}</p>
                                    </div>
                                </Link>
                                <Link to="/collection/f" style={{textDecoration: 'none'}}>
                                    <div className="block-item">
                                        <img src={pidsv} alt="candlestick" className="img-catalog hide-img-mob"/>
                                        <p className="catalog-block-text text-2">{content[lang].coll_f_title}</p>
                                    </div>
                                </Link>
                                <Link to="/collection/l" style={{textDecoration: 'none'}}>
                                    <div className="block-item">
                                        <img src={lamp_l} alt="lamp" className="img-catalog hide-img-mob"/>
                                        <p className="catalog-block-text text-2 text-long">{content[lang].coll_l_title}</p>
                                    </div>
                                </Link>
                                <Link to="/collection/b" style={{textDecoration: 'none'}}>
                                    <div className="block-item">
                                        <img src={tort} alt="candy bar" className="img-catalog img-tort hide-img-mob"/>
                                        <p className="catalog-block-text text-2">{content[lang].coll_b_title}</p>
                                    </div>
                                </Link>
                                <Link to="/collection/c" style={{textDecoration: 'none'}}>
                                    <div className="block-item">
                                        <img src={glass_c} alt="vase" className="img-catalog hide-img-mob"/>
                                        <p className="catalog-block-text text-2 text-long ">{content[lang].coll_c_title}</p>
                                    </div>
                                </Link>
                                <Link to="/collection/g" style={{textDecoration: 'none'}}>
                                    <div className="block-item">
                                        <img src={vase_g} alt="vase" className="img-catalog img-coarse hide-img-mob"/>
                                        <p className="catalog-block-text text-2 text-long ">{content[lang].coll_g_title}</p>
                                    </div>
                                </Link>
                                <Link to="/collection/h" style={{textDecoration: 'none'}}>
                                    <div className="block-item">
                                        <img src={glass_h} alt="glass"
                                             className="img-catalog img-varietal hide-img-mob"/>
                                        <p className="catalog-block-text text-2">{content[lang].coll_h_title}</p></div>
                                </Link>
                                <Link to="/collection/r" style={{textDecoration: 'none'}}>
                                    <div className="block-item">
                                        <div className="block-item">
                                            <img src={press_r} alt="pressed glass item"
                                                 className="img-catalog img-pressed hide-img-mob"/>
                                            <p className="catalog-block-text text-2 ">{content[lang].coll_r_title}</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/collection/v" style={{textDecoration: 'none'}}>
                                    <div className="block-item">
                                        <img src={lid_v} alt="candy bar" className="img-catalog  hide-img-mob"/>
                                        <p className="catalog-block-text text-2 text-long ">{content[lang].coll_v_title}</p>
                                    </div>
                                </Link>
                                <Link to="/collection/x" style={{textDecoration: 'none'}}>
                                    <div className="block-item">
                                        <img src={sphere_x} alt="sphere vase"
                                             className="img-catalog img-coarse hide-img-mob"/>
                                        <p className="catalog-block-text text-2 text-short">{content[lang].coll_x_title}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </LanguageConsumer>
        );
    }
}

export default BlockCatalog;