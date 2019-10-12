import React from 'react';


const PlusesSection = () => {
    let newDate = new Date();
    let year = newDate.getFullYear();
    let date = year - 1992;
    return (
        <section className="pluses-section">
            <div className="pluses-section-wrapper">
                <div className="pluses-container">
                    <h1 className="pluses-header">{date}</h1>
                    <p className="pluses-minor">years of experience</p>
                </div>
                <div className="pluses-container">
                    <h1 className="pluses-header">38</h1>
                    <p className="pluses-minor">regular customers</p>
                </div>
                <div className="pluses-container">
                    <h1 className="pluses-header">> 10</h1>
                    <p className="pluses-minor">partner-countries</p>
                </div>
            </div>
        </section>
    );
};

export default PlusesSection;