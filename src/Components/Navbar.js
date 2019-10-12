import React, {Component} from 'react';
import {FaBars} from 'react-icons/fa'
import {Link, NavLink} from "react-router-dom";
import logo_final from '../assets/images/logo_final.svg'
import Collection from "../pages/Collection";

class Navbar extends Component {

    state = {
        isOpen: false,
        isHovering: false,
    };
    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
            activeOption: 0
        })
    };

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
            <nav className="navbar">
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
                            <NavLink exact to="/" activeClassName="active">Home</NavLink>
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
                                        <Link exact to="/collection/a" component={Collection}>Collection A</Link>
                                    </li>
                                    <li><Link exact to="/collection/b" component={Collection}>Collection B</Link></li>
                                    <li><Link exact to="/collection/c" component={Collection}>Collection C</Link></li>
                                    <li><Link exact to="/collection/d" component={Collection}>Collection D</Link></li>
                                    <li><Link exact to="/collection/c" component={Collection}>Collection C</Link></li>
                                    <li><Link exact to="/collection/e" component={Collection}>Collection E</Link></li>
                                    <li><Link exact to="/collection/f" component={Collection}>Collection F</Link></li>
                                    <li><Link exact to="/collection/a" component={Collection}>Collection A</Link></li>
                                </ul>
                                <ul className="dropdown-column-2">
                                    <li>
                                        <Link exact to="/collection/a" component={Collection}>Collection A</Link>
                                    </li>
                                    <li><Link exact to="/collection/b" component={Collection}>Collection B</Link></li>
                                    <li><Link exact to="/collection/c" component={Collection}>Collection C</Link></li>
                                    <li><Link exact to="/collection/d" component={Collection}>Collection D</Link></li>
                                    <li><Link exact to="/collection/c" component={Collection}>Collection C</Link></li>
                                    <li><Link exact to="/collection/e" component={Collection}>Collection E</Link></li>
                                    <li><Link exact to="/collection/f" component={Collection}>Collection F</Link></li>
                                    <li><Link exact to="/collection/a" component={Collection}>Collection A</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <NavLink exact to="/contacts" activeClassName="active">Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;