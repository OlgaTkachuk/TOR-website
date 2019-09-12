import React from 'react';

const Hero = ({children, classname}) => {
    return (
        <section className={classname}>
            {children}
        </section>

    );
};

Hero.defaultProps = {
    classname: "defaultHero"
};

export default Hero;