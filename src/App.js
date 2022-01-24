import './bootstrap/bootstrap.min.css'
import myStyles from './assets/css/app.module.css'
import './app.css'
import ParticleBackground from './components/ParticlesBackground';
import Navigation from './components/Navigation';
import Presentation from './components/Presentation';
import Logo from './assets/img/logoMain.png'
import business from './assets/img/businessfast.png'
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute" }}>
          <ParticleBackground />
        </div>
        <Navigation />
        <Presentation />
      </div>
      <div className={"bg-primary container p-4 rounded-2 " + myStyles.containerSkils} >
        <h2 className='text-white text-center'><b>Skils</b></h2>
        <ul className="list-group">
          <li className="list-group-item" style={{ backgroundColor: "#222" }} >
            <div className="d-flex">
              <i class="fab fa-html5" style={{ fontSize: "40px", color: "#E34C26" }}></i>
              <p className='text-white m-2'><b>HTML5</b></p>
            </div>
            <div class="progress">
              <div class="progress-bar bg-success" role="progressbar" style={{ width: "90%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </li>
          <li className="list-group-item" style={{ backgroundColor: "#222" }} >
            <div className="d-flex">
              <i class="fab fa-css3-alt" style={{ fontSize: "40px", color: " #2965f1" }}></i>
              <p className='text-white m-2'>CSS3</p>
            </div>
            <div class="progress">
              <div class="progress-bar bg-success" role="progressbar" style={{ width: "82%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </li>
          <li className="list-group-item" style={{ backgroundColor: "#222" }} >
            <div className="d-flex">
              <i class="fab fa-js" style={{ fontSize: "40px", color: "#f0db4f" }}></i>
              <p className='text-white m-2'>Javascript</p>
            </div>
            <div class="progress">
              <div class="progress-bar bg-success" role="progressbar" style={{ width: "57%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </li>
          <li className="list-group-item" style={{ backgroundColor: "#222" }} >
            <div className="d-flex">
              <i class="fab fa-node-js" style={{ fontSize: "40px", color: "#68a063" }}></i>
              <p className='text-white m-2'>Node Js</p>
            </div>
            <div class="progress">
              <div class="progress-bar bg-success" role="progressbar" style={{ width: "58%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </li>
          <li className="list-group-item" style={{ backgroundColor: "#222" }} >
            <div className="d-flex">
              <i class="fab fa-react" style={{ fontSize: "40px", color: "#61DBFB" }}></i>
              <p className='text-white m-2'>ReactJs</p>
            </div>
            <div class="progress">
              <div class="progress-bar bg-success" role="progressbar" style={{ width: "60%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </li>
        </ul>
      </div>
      <div id="about" className="container mt-4 bg-primary p-4 ">
        <h2 className='text-center text-white'>About Me</h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <p className="text-white">Soy Danilo, un joven de la Ciudad de Cancún, México , apasionado por la informatica y mas por el desarrollo web, actualmente tengo 22 años envuelto en el mundo del desarrollo web e adquirido distintas habilidades y conocimentos, aprendiendo asi tanto Backend como Frontend, elaborando trabajos y haciendo uso de tecnologias como Express y NodeJS para la elaboracion y estructuración de API'S; ReactJS para la creación de interfaces para el cliente, siendo asi un desarrollador potencial para tu proyecto</p>
            </div>
            <div className="col-lg-6 col-sm-12 mb-4">
              <div className="text-center">
                <img className={'img-fluid ' + myStyles.LogoContainerAboutMe} src={Logo} alt="" />
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-4  d-flex justify-content-center">
              <div class="card rounded-2 border mb-3 border-0" style={{ width: "18rem" }}>
                <img style={{ height: "217px", objetFit: "cover" }} src="https://logisticainmobiliaria.mx/static/media/Logo-Logistica.923fc24e.png" class="card-img-top" />
                <div class={"card-body " + myStyles.bgPurple}>
                  <h6 class="card-title ">Logisticainmobiliaria</h6>
                  <p class="card-text">Project | Venta de casas</p>
                </div>

                <div class={"card-body " + myStyles.bgPurple}>
                  <a href="https://logisticainmobiliaria.mx/" class="btn btn-primary">See</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4  d-flex justify-content-center">
              <div class="card border mb-3 border-0" style={{ width: "18rem" }}>
                <img src={business} style={{ height: "217px", objetFit: "cover" }} class="card-img-top" />
                <div class={"card-body " + myStyles.bgPurple}>
                  <h6 class="card-title">Businessfast</h6>
                  <p class="card-text">Project | business</p>
                </div>

                <div class={"card-body " + myStyles.bgPurple}>
                  <a href="https://businessfast.000webhostapp.com/" class="btn btn-primary">See</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <span className='d-flex m-3'>
              <i class={"fab fa-facebook m-2 "+ myStyles.fbIconStyle} ></i>
              <a href='https://www.facebook.com/devdmql' className='m-2 text-white'>@devdmql</a>
              </span>
              <span className='d-flex m-3'>
              <i class={"far fa-envelope m-2 "+ myStyles.fbIconStyle} ></i>
              <a href='mailto:devdmql@gmail.com' className='m-2 text-white'>devdmql@gmail.com</a>
              </span>
              <span className='d-flex m-3'>
              <i class={"fab fa-github m-2 "+ myStyles.fbIconStyle} ></i>
              <a href='https://github.com/Mrkdm' className='m-2 text-white'>mrkdm</a>
              </span>
            </div>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default App;
