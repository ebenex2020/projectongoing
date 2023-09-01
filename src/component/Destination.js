/** @format */
import { useState } from "react";
import "./Destination.css";
import Header from "./Header";
// import Data from "../data.json";

export default function Destination({ destination }) {
  const [planet, setPlanet] = useState(destination[0]);

  return (
    <div className="destination">
      <Header />
      <MainHeader />
      <Body>
        <DestImg planet={planet} />
        <Details>
          <DestNavs destination={destination} onSetPlanet={setPlanet} />
          <DestDetails planet={planet} />
          <DestFooter planet={planet} />
        </Details>
      </Body>
    </div>
  );
}

function MainHeader() {
  return (
    <h1 className="dest-main--header">
      <span>01</span> Pick Your Destination
    </h1>
  );
}

function Body({ children }) {
  return <div className="dest-container">{children}</div>;
}

function Details({ children }) {
  return <div className="dest-container--box">{children}</div>;
}

function DestNavs({ destination, onSetPlanet }) {
  return (
    <div className="dest-container--nav">
      {destination.map((dest) => (
        <button
          className="btn-dest"
          onClick={() => onSetPlanet(dest)}
          key={dest.name}
        >
          {dest.name}
        </button>
      ))}
    </div>
  );
}

function DestImg({ planet }) {
  return (
    <img src={planet.images.webp} alt={planet.name} className="dest-img" />
  );
}

function DestDetails({ planet }) {
  return (
    <div>
      <h2 className="dest-container--header">{planet.name}</h2>
      <p className="dest-container--text">{planet.description}</p>
      <hr />
    </div>
  );
}

function DestFooter({ planet }) {
  return (
    <div className="dest-container--box-footer">
      <div className="dest-footer-box">
        <p className="dest-paragraph">Avg. distance</p>
        <p className="dest-paragraph--inside">{planet.distance}</p>
      </div>
      <div className="dest-footer-box">
        <p className="dest-paragraph">Est. Travel time</p>
        <p className="dest-paragraph--inside">{planet.travel}</p>
      </div>
    </div>
  );
}
