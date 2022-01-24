import React from 'react';
import myStyles from '../assets/css/app.module.css'
import ButtonMain from './ButtonMain';
const Presentation = () => {
  return (
      <div className="">
          <div className='container h-70 d-flex justify-content-center '>
      <h2 className={'display-4 text-white text-center ' + myStyles.typografyTextMain }>HELLO!, Iam Danilo Mendoza</h2>
      
  </div>
  <div className="d-flex justify-content-center">
      <ButtonMain/>
  </div>
      </div>
  );
};

export default Presentation;
