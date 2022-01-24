import React from 'react';
import myStyles from '../assets/css/app.module.css'

const ButtonMain = () => {
    return <div> 
      
        <span>
        <a href="#about">
        <i className={"far fa-arrow-alt-circle-down " + myStyles.arrowStyle} ></i>
        </a>
        </span>
   
    </div>;
};

export default ButtonMain;
