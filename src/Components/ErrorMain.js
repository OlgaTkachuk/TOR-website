import React from 'react';
import error from "../assets/images/warning.svg";
import {Link} from 'react-router-dom'

const ErrorMain = () => {
    return (
        <div>
            <h1 className="section-title">Something went wrong</h1>
            <p className="text-error">Looks like something went wrong.. The page you are looking for cannot be
                found...</p>
            <div className="error-img-wrapper">
                <img src={error} className="error-img"/>
                <Link to='/' className="button-dark button-error">Back to Home</Link>
            </div>

        </div>
    );
};

export default ErrorMain;