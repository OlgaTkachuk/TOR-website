import React from 'react';
import {Link} from "react-router-dom";
import img_par_1 from '../assets/images/img-par-1.jpg';
import img_par_2 from '../assets/images/img-par-2.jpg';

const AboutSection = ({title, title_classname}) => {
    return (
        <section>
            <h1 className={title_classname + ' ' + 'section-title'}>{title}</h1>
            <hr className="about-hr"/>
            <div className="section-wrap-about-us">
                <div className="about-text-wrapper-outer">
                    <div className="about-text-wrapper-inner">
                        <p className="text-paragraph-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. At urna condimentum mattis pellentesque id nibh tortor id.
                            Nibh
                            mauris cursus mattis molestie a iaculis at erat. Nam at lectus urna duis convallis convallis
                            tellus id. Sagittis vitae et leo duis. Dolor purus non enim praesent elementum facilisis
                            leo. Et
                            pharetra pharetra massa massa ultricies mi. Facilisis sed odio morbi quis commodo odio
                            aenean
                            sed.</p>
                    </div>
                </div>
                <div>
                    <img src={img_par_1} alt={''} className="img-par"/>
                    <div>
                        <Link to='/about' className="button-dark button-about-div-1">Learn more &#8250;</Link>
                    </div>
                </div>
                <div className="about-text-wrapper-outer">
                    <div className="about-text-wrapper-inner-2">
                        <p className="text-paragraph-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. At urna condimentum mattis pellentesque id nibh tortor id.
                            Nibh
                            mauris cursus mattis molestie a iaculis at erat. Nam at lectus urna duis convallis convallis
                            tellus id. Sagittis vitae et leo duis. Dolor purus non enim praesent elementum facilisis
                            leo. Et
                            pharetra pharetra massa massa ultricies mi. Facilisis sed odio morbi quis commodo odio
                            aenean
                            sed.
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