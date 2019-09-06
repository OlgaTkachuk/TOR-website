import React from 'react';
import img10 from '../assets/images/img10.jpg'
import img11 from '../assets/images/img11.jpg'
import img12 from '../assets/images/img12.jpg'

const WhoWeAre = () => {
    return (
        <div className="polygon">
            <h3 className="letters-whoweare">Lorem</h3>
            <p className="whoweare-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
                labore et dolore magna aliqua. At urna condimentum mattis pellentesque id nibh tortor id.
                Nibh
                mauris cursus mattis molestie a iaculis at erat. Nam at lectus urna duis convallis convallis
                tellus id. Sagittis vitae et leo duis. Dolor purus non enim praesent elementum facilisis
                leo. Et
                pharetra pharetra massa massa ultricies mi. Facilisis sed odio morbi quis commodo odio
                aenean
                sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
                labore et dolore magna aliqua. At urna condimentum mattis pellentesque id nibh tortor id.
                Nibh
                mauris cursus mattis molestie a iaculis at erat. Nam at lectus urna duis convallis convallis
                tellus id. Sagittis vitae et leo duis. Dolor purus non enim praesent elementum facilisis
                leo. Et
                pharetra pharetra massa massa ultricies mi. Facilisis sed odio morbi quis commodo odio
                aenean
                sed.</p>
            <div className="img-wrapper-mobile img-wrapper">
                <div className="wrapper1">
                    <img src={img10} alt="" className="img1-whoweare"/>
                    <img src={img12} alt="" className="img2-whoweare"/>
                </div>
                <div>
                <img src={img11} alt="" className="img3-whoweare"/>
                </div>
            </div>
        </div>

    );
};

export default WhoWeAre;