/** @format */

import { useState } from "react";
import Header from "./Header";
import "./Technology.css";

export default function Technology({ technology }) {
  const [spaceLaunch, setSpaceLaunch] = useState(technology[0]);

  return (
    <div className="technology">
      <Header />
      <MainHeader />
      <Body>
        <TechBtn
          tech={technology}
          onSetLaunch={setSpaceLaunch}
          launch={spaceLaunch}
        />
        <TechDetails launch={spaceLaunch} />
        <TechImg launch={spaceLaunch} />
      </Body>
    </div>
  );
}

function MainHeader() {
  return (
    <h1 className="tech-header">
      <span>03</span> Space Launch 101
    </h1>
  );
}

function Body({ children }) {
  return <div className="tech-details">{children}</div>;
}

function TechBtn({ tech, onSetLaunch, launch }) {
  return (
    <div className="btn-box--tech">
      {tech.map((t, i) => (
        <button
          onClick={() => onSetLaunch(t)}
          key={t.name}
          className={t === i ? "btn-tech active" : "btn-tech"}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

function TechDetails({ launch }) {
  return (
    <div className="tech-details--body">
      <p className="tech-term">The terminology...</p>
      <h2 className="tech-name">{launch.name}</h2>
      <p className="tech-description">{launch.description}</p>
    </div>
  );
}

function TechImg({ launch }) {
  return (
    <picture className="tech-img">
      <source media="(max-width: 800px)" srcset={launch.images.landscape} />
      <img
        src={launch.images.portrait}
        alt={launch.name}
        className="tech-img"
      />
    </picture>
  );
}
