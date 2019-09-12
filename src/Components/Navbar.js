import React, {Component} from 'react';
import {FaBars} from 'react-icons/fa'
import {Link, NavLink} from "react-router-dom";
import logo from '../assets/images/logo.png'

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
                            <img src={logo} alt="TOR logo" className="logo"/>
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
                                    <li>Decorative floor vases</li>
                                    <li>One</li>
                                    <li>One</li>
                                    <li>One</li>
                                    <li>One</li>
                                    <li>One</li>
                                    <li>One</li>
                                    <li>One</li>
                                </ul>
                                <ul className="dropdown-column-2">
                                    <li>One</li>
                                    <li>One</li>
                                    <li>One</li>
                                    <li>One</li>
                                    <li>One</li>
                                    <li>One</li>
                                    <li>One</li>
                                    <li>One</li>
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