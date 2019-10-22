import React, {Component} from 'react';
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import './Catalog.css'
import BlockCatalog from "../Components/BlockCatalog";
import {content} from "../content/content";
import {LanguageConsumer} from "../Components/LanguageContext";

class Catalog extends Component {
    render() {
        return (
            <LanguageConsumer>
                {({lang = ''}) => (
                    <div>
                        <Hero classname={"hero-catalog"}>
                            <Banner letter={content[lang].catalog_hero_letter} title={content[lang].catalog_hero}
                                    classname={"letter-catalog"}/>
                        </Hero>
                        <BlockCatalog/>
                        <Footer/>
                    </div>
                )}
            </LanguageConsumer>
        );
    }
}

export default Catalog;