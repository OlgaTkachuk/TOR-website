import React, {Component} from 'react';
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import "./CustomMade.css"
import CustomMainDiv from '../Components/CustomMainDiv'
import CustomOurWorks from "../Components/CustomOurWorks";
import ContactsCustom from "../Components/ContactsCustom";

class CustomMade extends Component {
    render() {
        return (
            <div>
                <Hero classname={"hero-custom"}>
                    <Banner letter={"M"} title={"Made to order"}
                            classname={"letter-catalog"}/>
                </Hero>
                <CustomMainDiv/>
                <CustomOurWorks/>
                <ContactsCustom/>
                <Footer/>
            </div>
        );
    }
}

export default CustomMade;