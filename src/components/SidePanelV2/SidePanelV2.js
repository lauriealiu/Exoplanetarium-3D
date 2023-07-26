import "./SidePanelV2.scss";
import { React, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import exoplanet from '../../assets/exoplanet.png'
import returnToSpace from '../../assets/emojione-v1_milky-way.svg'

const defaultValue = {
  name: "",
  disposition: "",
  rightAscension: "",
  declination: "",
  distance: "",
  starData: {
    stellarDistance: "",
    effectiveTemperature: "",
    log: "",
    radius: "",
  },
};
function SidePanel({ planet }) {
  const { name, disposition, rightAscension, declination, distance, starData } =
    planet ? planet : defaultValue;
  const { stellarDistance, effectiveTemperature, log, radius } = starData;

  const [linkClicked, setLinkClicked] = useState(false)
  const [hovering, setHovering] = useState(false)

  const handleLinkClick = () => {
    setLinkClicked(true)
  }

  const handleCloseClick = () => {
    console.log("close clicked")
    setLinkClicked(false)
  }

  const handleReturnClick = () => {
    console.log("return clicked")
    window.location.reload(false)
  }

  const handleHover = () => {
    setHovering(true)
  }

  const handleHoverLeave = () => {
    setHovering(false)
  }

  return (
    <>
      <p className={`${planet ? "show-link" : "hide-link"} 
      ${linkClicked ? "hide-link" : "show-link"}`} onClick={handleLinkClick}> Exoplanet {name}</p>

      <aside className={linkClicked ? "side-panel open" : "side-panel"}>
        <p>NAME System</p>

        <section className="section-title">
          <p>Exoplanet {name}</p>

          <nav className="nav-wrap">
            <button className="return-button"
              onClick={handleReturnClick} onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
              <img src={returnToSpace} alt="returnToSpace" className="return-hover" />
            </button>

            {hovering && <p className="hover-text">Return to space </p>}

            <button className="close-button" onClick={handleCloseClick}><IoCloseSharp></IoCloseSharp></button>
          </nav>
        </section>

        <section className="content">
          <p className="content-text">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
          </p>
        </section>

        <nav className="carousel">
          <h1>Carousel</h1>
        </nav>

        {/* <div className={planet ? "exo-img" : "hidden"}>
        <img src={exoplanet} alt="exoplanet" />
      </div> */}

        {/* <div className={"info-wrap"}>
        <div className="planetData-wrap">
          <p>Exoplanet Data</p>
          <ul>
            <li>
              <span className="styled-text">{"Disposition: "}</span>
              {disposition}
            </li>
            <li>
              <span className="styled-text">{"Right Ascension: "}</span>
              {rightAscension}
            </li>
            <li>
              <span className="styled-text">{"Declination: "}</span>
              {declination}
            </li>
            <li>
              <span className="styled-text">{"Distance: "}</span>{" "}
              {distance + " Parsecs"}
            </li>
          </ul>
        </div>
        <div className="stellarData-wrap">
          <p>Stellar Data</p>
          <ul>
            <li>
              <span className="styled-text">{"Stellar Distance: "}</span>{" "}
              {stellarDistance + " Parsecs"}
            </li>
            <li>
              <span className="styled-text">{"Effectve Temperature: "}</span>{" "}
              {effectiveTemperature + " K"}
            </li>
            <li>
              <span className="styled-text">{"Log: "}</span> {log + " cm/s**2"}
            </li>
            <li>
              <span className="styled-text">{"Radius: "}</span>{" "}
              {radius + " R_Sun"}
            </li>
          </ul>
        </div>
      </div> */}
      </aside>
    </>
  );
}

export default SidePanel;