import React, {Component} from 'react';
import {FaBars} from 'react-icons/fa'
import {Link, NavLink} from "react-router-dom";
import logo_final from '../assets/images/logo_final.svg'
import Collection from "../pages/Collection";
import {content} from "../content/content";
import {LanguageConsumer} from "./LanguageContext";


class Navbar extends Component {

    state = {
        isOpen: false,
        isHovering: false,
        selectedLanguage: "en",
    };
    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
            activeOption: 0
        })
    };
    toggleLanguage = lang => {
        this.setState({selectedLanguage: lang});
    }
    navbar_coll_x;

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    render() {

        return (
            <>
                <nav className="navbar">
                    <LanguageConsumer>
                        {({lang = '', updateLanguage}) => (
                            <>
                            <div className="lang_toggle">
                                <button value="en" onClick={event => {
                                    updateLanguage(event.target.value);
                                    console.log(lang)
                                }}
                                        className={(lang == "en") ? "lang_button_act" : "lang_button"}>
                                    EN
                                </button>
                                <button value="ua" onClick={event => {
                                    updateLanguage(event.target.value);
                                    console.log(lang)
                                }}
                                        className={(lang == "ua") ? "lang_button_act" : "lang_button"}>
                                    UA
                                </button>
                            </div>
                    <div className="nav-center">
                        <div className="nav-header">
                            <Link to="/">
                                <img src={logo_final} alt="TOR logo" className="logo logo_svg"/>
                            </Link>
                            <button type="button" className="nav-btn" onClick={this.handleToggle}>
                                <FaBars className="nav-icon"/>
                            </button>
                        </div>
                        <ul className={this.state.isOpen ? "nav-links show-mob-nav" : "nav-links"}>
                            <li>
                                <NavLink exact to="/"
                                         activeClassName="active">{content[lang].navbar_home}</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/about" activeClassName="active">{content[lang].navbar_about}</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/custom" activeClassName="active">{content[lang].navbar_custom}</NavLink>
                            </li>
                            <li className="dropdown-wrapper">
                                <NavLink exact to="/catalog" activeClassName="active">{content[lang].navbar_catalog}</NavLink>
                                <div className="dropdown-container">
                                    <ul className="dropdown-column-1">
                                        <li>
                                            <Link exact to="/collection/b" component={Collection}>{content[lang].navbar_coll_b}</Link>
                                        </li>
                                        <li><Link exact to="/collection/c" component={Collection}>{content[lang].navbar_coll_c}</Link>
                                        </li>
                                        <li><Link exact to="/collection/d" component={Collection}>{content[lang].navbar_coll_d}</Link>
                                        </li>
                                        <li><Link exact to="/collection/f" component={Collection}>{content[lang].navbar_coll_f}</Link>
                                        </li>
                                        <li><Link exact to="/collection/g" component={Collection}>{content[lang].navbar_coll_g}</Link>
                                        </li>
                                        <li><Link exact to="/collection/h" component={Collection}>{content[lang].navbar_coll_h}</Link>
                                        </li>
                                        <li><Link exact to="/collection/k" component={Collection}>{content[lang].navbar_coll_k}</Link>
                                        </li>
                                    </ul>
                                    <ul className="dropdown-column-2">
                                        <li>
                                            <Link exact to="/collection/l" component={Collection}>{content[lang].navbar_coll_l}</Link>
                                        </li>
                                        <li><Link exact to="/collection/n" component={Collection}>{content[lang].navbar_coll_n}</Link>
                                        </li>
                                        <li><Link exact to="/collection/r" component={Collection}>{content[lang].navbar_coll_r}</Link>
                                        </li>
                                        <li><Link exact to="/collection/s" component={Collection}>{content[lang].navbar_coll_s}</Link>
                                        </li>
                                        <li><Link exact to="/collection/v" component={Collection}>{content[lang].navbar_coll_v}</Link>
                                        </li>
                                        <li><Link exact to="/collection/w" component={Collection}>{content[lang].navbar_coll_w}</Link>
                                        </li>
                                        <li><Link exact to="/collection/x" component={Collection}>{content[lang].navbar_coll_x}</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <NavLink exact to="/contacts" activeClassName="active">{content[lang].navbar_contact}</NavLink>
                            </li>
                        </ul>
                    </div>
                            </>)}
                    </LanguageConsumer>
                </nav>

            </>
        );
    }
}

export default Navbar;