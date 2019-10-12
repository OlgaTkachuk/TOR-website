import React from 'react';
import ReactPlayer from 'react-player'

const CustomMainDiv = () => {
    return (
        <section>
            <div>
                <h3 className="section-title">Custom Made</h3>
                <hr className="hr-same hr-custom"/>
                <p className="par-custom">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
            <div className="custom-container-1">
                <div className="div-custom-left">
                    <div className="background-div-custom">
                        <ul>
                            <li className="li-heading">Designing</li>
                            <li className="li-item">Lorem ipsum dolor sit amet ipsum dolor sit amet</li>
                            <li className="li-heading">Technical Assisting</li>
                            <li className="li-item">Lorem ipsum dolor sit amet ipsum dolor sit amet</li>
                            <li className="li-heading">Implementation</li>
                            <li className="li-item">Lorem ipsum dolor sit amet ipsum dolor sit amet</li>
                        </ul>
                    </div>
                </div>
                <div className="div-custom-right">
                    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width='100%'
                                 height='100%'/>
                </div>
            </div>
        </section>
    );
};

export default CustomMainDiv;