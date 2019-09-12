import React, {Component} from 'react';
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import './Catalog.css'
import BlockCatalog from "../Components/BlockCatalog";

class Catalog extends Component {
    render() {
        return (
            <div>
                <Hero>
                    <Banner letter={"E"} title={"Explore our collections"}
                            classname={"letter-catalog"}/>
                </Hero>
                <BlockCatalog/>
                <Footer/>
            </div>
        );
    }
}

export default Catalog;