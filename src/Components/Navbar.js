import React, {Component} from 'react';
import {FaBars} from 'react-icons/fa'
import {Link, NavLink} from "react-router-dom";
import logo from '../assets/images/logo.png'

class Navbar extends Component {
    state = {
        isOpen: false
    };
    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
            activeOption: 0
        })
    };

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="TOR logo" className="logo"/>
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaBars className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-mob-nav": "nav-links" }>
                        <li>
                            <NavLink exact to="/" activeClassName="active">Home</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/about" activeClassName="active">About us</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/custom" activeClassName="active">Custom Made</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/catalog" activeClassName="active">Catalog</NavLink>
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