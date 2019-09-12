import React, {Component} from 'react';
import Banner from "../Components/Banner";
import Hero from "../Components/Hero";

class InDevelopment extends Component {
    render() {
        return (
            <div>
                <Hero>
                    <Banner letter={"D"} title={"In Development"} subtitle={"Please come back later!"}
                            classname={"letter-home"}/>
                </Hero>
            </div>
        );
    }
}

export default InDevelopment;