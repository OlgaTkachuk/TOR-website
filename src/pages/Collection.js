import React, {Component} from 'react';
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import products from "../data";
import './Collection.css'
import {Link} from 'react-router-dom'
import {LanguageConsumer} from "../Components/LanguageContext";
import {content} from "../content/content";

class Collection extends Component {
    render() {
        let path = this.props.location.pathname.split("");
        const coll = path[path.length - 1].toUpperCase();
        console.log(coll);
        const productsSort = (product) => {
            if (product.item_collection === coll) {
                let article = product.item_article;
                let title = product.item_title;
                let photo = product.item_photo;
                return (
                    <LanguageConsumer>
                        {({lang = ''}) => (
                            <div className="card-collection">
                                <img src={photo} className="card-collection-img"/>
                                <div className="text-coll-wrapper">
                                    <h3 className="card-collection-title">{title[lang]}</h3>
                                    <p className="card-collection-article">{article}</p>
                                    <Link to="/contacts" className="item-button">{content[lang].order}</Link>
                                </div>
                            </div>
                        )}
                    </LanguageConsumer>
                )
            }
        }
        return (
            <LanguageConsumer>
                {({lang = ''}) => (
                    <div>
                        <Hero classname={"hero-catalog"}>
                            <Banner letter={"C"} title={content[lang].collection + " " + coll}
                                    classname={"letter-catalog"}/>
                        </Hero>
                        <div className={"full-pdf-wrapper"}>
                            <Link to="/contacts" className={"button-dark button-full-pdf-2"}>
                                {content[lang].pdf_catalog}
                            </Link>
                        </div>
                        <div className="collection-wrapper">
                            {products.map(product => productsSort(product))}
                        </div>
                        <Footer/>
                    </div>
                )}
            </LanguageConsumer>
        );
    }
}


export default Collection;