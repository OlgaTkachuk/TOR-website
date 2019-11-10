import React from 'react';
import video from "../assets/video.mp4";


const Banner = ({children, letter, title, subtitle, classname}) => {
    return (
        <section className="banner-container">
            <div className={classname}>{letter}</div>
            <div className="wrapper-banner">
                <div className="banner">
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                    {children}
                </div>
            </div>
        </section>

    );
};
Banner.defaultProps = {
    classname: "letter-default"
};

export default Banner;