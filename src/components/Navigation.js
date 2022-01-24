import React from 'react';
import myStyles from '../assets/css/app.module.css'
import Logo from '../assets/img/logoMain.png'
const Navigation = () => {
  return (<div>
  <nav className={"navbar navbar-expand-lg navbar-dark navbar-fixed " + myStyles.bgNav }>
  <div className="container-fluid">
    <img src={Logo} alt="" className={"img-fluid " + myStyles.LogoMain } />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
      
        <li className="nav-item">
          <a className="nav-link" href="#about">About me</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>);
};

export default Navigation;
