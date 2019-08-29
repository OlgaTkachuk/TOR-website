import React from 'react';

const Hero = ({children, classname}) => {
    return (
        <header className={classname}>
            {children}
        </header>

    );
};

Hero.defaultProps = {
    classname: "defaultHero"
};

export default Hero;