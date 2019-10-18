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
                        {({lang, updateLanguage}) => (
                            <>
                            <div className="lang_toggle">
                                <button value="en" onClick={event => {
                                    updateLanguage(event.target.value);
                                    console.log(lang)
                                }}
                                        className={(this.value === "en") ? "lang_button_act" : "lang_button"}>
                                    EN
                                </button>
                                <button value="ua" onClick={event => {
                                    updateLanguage(event.target.value);
                                    console.log(lang)
                                }}
                                        className={(this.value === "en") ? "lang_button" : "lang_button_act"}>
                                    UA
                                </button>
                                <h3>{lang}</h3>
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
                                         activeClassName="active">{"Home"}</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/about" activeClassName="active">About us</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/custom" activeClassName="active">Custom Made</NavLink>
                            </li>
                            <li className="dropdown-wrapper">
                                <NavLink exact to="/catalog" activeClassName="active">Catalog</NavLink>
                                <div className="dropdown-container">
                                    <ul className="dropdown-column-1">
                                        <li>
                                            <Link exact to="/collection/a" component={Collection}>Collection
                                                A</Link>
                                        </li>
                                        <li><Link exact to="/collection/b" component={Collection}>Collection
                                            B</Link>
                                        </li>
                                        <li><Link exact to="/collection/c" component={Collection}>Collection
                                            C</Link>
                                        </li>
                                        <li><Link exact to="/collection/d" component={Collection}>Collection
                                            D</Link>
                                        </li>
                                        <li><Link exact to="/collection/c" component={Collection}>Collection
                                            C</Link>
                                        </li>
                                        <li><Link exact to="/collection/e" component={Collection}>Collection
                                            E</Link>
                                        </li>
                                        <li><Link exact to="/collection/f" component={Collection}>Collection
                                            F</Link>
                                        </li>
                                        <li><Link exact to="/collection/a" component={Collection}>Collection
                                            A</Link>
                                        </li>
                                    </ul>
                                    <ul className="dropdown-column-2">
                                        <li>
                                            <Link exact to="/collection/a" component={Collection}>Collection
                                                A</Link>
                                        </li>
                                        <li><Link exact to="/collection/b" component={Collection}>Collection
                                            B</Link>
                                        </li>
                                        <li><Link exact to="/collection/c" component={Collection}>Collection
                                            C</Link>
                                        </li>
                                        <li><Link exact to="/collection/d" component={Collection}>Collection
                                            D</Link>
                                        </li>
                                        <li><Link exact to="/collection/c" component={Collection}>Collection
                                            C</Link>
                                        </li>
                                        <li><Link exact to="/collection/e" component={Collection}>Collection
                                            E</Link>
                                        </li>
                                        <li><Link exact to="/collection/f" component={Collection}>Collection
                                            F</Link>
                                        </li>
                                        <li><Link exact to="/collection/a" component={Collection}>Collection
                                            A</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <NavLink exact to="/contacts" activeClassName="active">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                            </>
                            )}
                    </LanguageConsumer>
                </nav>
                <LanguageConsumer>
                    {({lang, updateLanguage}) => (
                        <div>
                            <h2>Settings</h2>
                            <label htmlFor="username">Username: </label>
                            <input
                                id="username"
                                type="text"
                                onChange={event => {
                                    updateLanguage(event.target.value);
                                    console.log(1)
                                }}
                            />
                            <h1>new {lang}</h1>
                        </div>
                    )}
                </LanguageConsumer>
            </>
        );
    }
}

export default Navbar;