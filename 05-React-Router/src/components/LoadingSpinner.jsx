import React from 'react';
import loadingImage from "../assets/react.svg";

const LoadingSpinner = () => {
    return (
        <>
            <div className="flex items-center justify-center text-xl    ">
                <img src={loadingImage} alt="" className="w-36 animate-spin"/>
            </div>
        </>
    )
};
export default LoadingSpinner;