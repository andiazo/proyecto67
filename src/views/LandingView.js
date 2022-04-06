import React from "react";
import "./LandingView.css";
import logo from "./logo.svg";
import logoTPI from "./logoTPI.png";
import logoBAVARIA from "./logoBAVARIA.png";
import SlidesComponent from "../components/slidesComponent";

class LandingView extends React.Component {
  render() {
    return (
      <div className="landing">
        <div className="title">
          <h1>Proyecto 67</h1>
          <p>Revolucionando el consumo eléctrico en Bavaria... Esperanos!</p>
        </div>
        <div className="partners">
          <h3>Patrocinadores</h3>
          <span>
            <img src={logoTPI} alt="logo TPI" />
            <img src={logoBAVARIA} alt="logo BAVARIA" />
          </span>
          <span></span>
        </div>
        <div>
          <SlidesComponent />
        </div>
      </div>
    );
  }
}

export default LandingView;
