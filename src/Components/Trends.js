import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Trends extends Component {
    state = {
        articleIsOpen: false,
        articleId: ''
    };

    handleClick = (e) => {
        this.setState({
            articleIsOpen: !this.state.articleIsOpen,
            articleId: e.target.value
        });
    }

    render() {
        return (
            <>
                <div>
                    <div>
                        <h3 className="section-title arrivals-title">Industry trends</h3>
                        <hr className="hr-same hr-trends"/>
                    </div>
                    <div>
                        <div className="trend-wrapper">
                            <h1 className="section-title trend-card-title">Celtic Glass</h1>
                            <hr className="hr-same hr-trend-card"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. At urna condimentum mattis pellentesque id nibh tortor
                                id.
                                Nibh
                                mauris cursus mattis molestie a iaculis at erat</p>
                            <button className="button-dark button-article" onClick={this.handleClick} value='1'>Explore</button>
                        </div>
                        <div className={(this.state.articleIsOpen && this.state.articleId==='1') ? "trend-article-wrapper" : "article-hide"}>
                            <h2 className="trend-card-title trend-article-title">Celtic Glass</h2>
                            <hr className="hr-trends-article"/>
                            <p className="article-par">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. At urna condimentum mattis pellentesque id nibh tortor
                                id.
                                Nibh
                                mauris cursus mattis molestie a iaculis at erat</p>
                        </div>
                    </div>
                </div>
            </>

        );
    }
}

export default Trends;