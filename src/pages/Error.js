import React, {Component} from 'react';
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import ErrorMain from "../Components/ErrorMain";

class Error extends Component {
    render() {
        return (
            <div>
                <Hero>
                    <Banner letter={"404"} title={"OOPS Page not found"}
                            classname={"letter-error"}/>
                </Hero>
                <ErrorMain/>
                <Footer/>
            </div>
        );
    }
}

export default Error;