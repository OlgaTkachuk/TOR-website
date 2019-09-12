import React from 'react';
import map from '../assets/images/map.png'

const Map = () => {
    return (
        <section>
        <div className="map-background">
            <h1 className="section-title map-title">Clients in 10 countries</h1>
            <p className="map-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
                labore et dolore magna aliqua. At urna condimentum mattis pellentesque id nibh tortor id.
                Nibh
                mauris cursus mattis molestie a iaculis at erat. Nam at lectus urna duis convallis convallis
                tellus id. Sagittis vitae et leo duis. Dolor purus non enim praesent elementum facilisis
                leo.</p>
            <img src={map} alt="" className="map-pic"/>
            <h1 className="section-title map-title">You can trust us!</h1>
        </div>
        </section>
    );
};

export default Map;