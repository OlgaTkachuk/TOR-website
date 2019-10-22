import React from 'react';
import {Link} from "react-router-dom";
import img_par_2 from '../assets/images/photo2.webp';
// import img_par_2 from '../assets/images/img-par-2.jpg';
import img_par_1 from '../assets/images/photo1.webp';

const AboutSection = ({title, title_classname}) => {
    return (
        <section>
            <h1 className={title_classname + ' ' + 'section-title'}>{title}</h1>
            <hr className="hr-same about-hr"/>
            <div className="about-background"/>
            <div className="section-wrap-about-us">
                <div className="about-text-wrapper-outer">
                    <div className="about-text-wrapper-inner about-text-wrapper-inner-1">
                        <p className="text-paragraph text-paragraph-1">We are always ready to incarnate projects in glass!<br/> Producer of glass artistic items, and also technical colored glass.

                            We specialize on art glassware in a wide range of shapes, designs, colours and sizes and make export to many countries. All items, clear or coloured, are mouth-blown and handmade. Moreover, our range of technological possibilities enable the individual production according to the client's requirements and orders.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={img_par_1} alt={''} className="img-par"/>
                    <div>
                        <Link to='/about' className="button-dark button-about-div-1">Learn more &#8250;</Link>
                    </div>
                </div>
                <div className="about-text-wrapper-outer">
                    <div className="about-text-wrapper-inner about-text-wrapper-inner-2">
                        <p className="text-paragraph text-paragraph-2">Our advantages:<br/>
                            - our company has technology of melting glass by electric oven;<br/>
                            - technologies for cooking and annealing of glass are environmentally friendly;<br/>
                            - we are in the process of building a solar station on the roofs of our factories;<br/>
                            - 25 years experience in supplying our products to all markets in many developed countries including China;<br/>
                            - very favorable placement – in the center of Europe we are close to our main customers.<br/>
                            - the factory is near the freeway what is good for logistics<br/>

                        </p>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img src={img_par_2} alt={''} className="img-par img-par-2"/>
                    <Link to='/about' className="button-dark button-about-div-2">Learn more &#8250;</Link>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;