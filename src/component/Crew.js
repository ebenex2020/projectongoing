/** @format */

import { useState } from "react";
import "./Crew.css";
import Header from "./Header";

export default function Crew({ crew }) {
  const [crewMembers, setCrewMembers] = useState(crew[0]);

  function handleClick(c) {
    setCrewMembers(c);
  }

  return (
    <div className="crew">
      <Header />
      <Body>
        <Box>
          <MainHeader />
          <CrewDetails data={crewMembers} crew={crew} onClick={handleClick} />
        </Box>
        <CrewImg data={crewMembers} />
      </Body>
    </div>
  );
}

function Body({ children }) {
  return <div className="crew-container--main">{children}</div>;
}

function Box({ children }) {
  return <div className="box-container">{children}</div>;
}

function MainHeader() {
  return (
    <h1 className="crew-container--header">
      <span>02</span> Meet Your Crew
    </h1>
  );
}

function CrewDetails({ data, crew, onClick }) {
  return (
    <>
      <div className="crew-details">
        <p className="crew-role">{data.role}</p>
        <p className="crew-name">{data.name}</p>
        <p className="crew-bio">{data.bio}</p>
        <CrewButton crew={crew} onClick={onClick} />
      </div>
    </>
  );
}

function CrewButton({ crew, onClick }) {
  return (
    <div className="input">
      {crew.map((c) => (
        <button key={c.name} onClick={() => onClick(c)} className="btn-crew" />
      ))}
    </div>
  );
}

function CrewImg({ data }) {
  return <img src={data.images.webp} alt={data.name} className="crew-img" />;
}
