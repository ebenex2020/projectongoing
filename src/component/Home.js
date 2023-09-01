/** @format */

import { NavLink } from "react-router-dom";
import Header from "./Header";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Box>
        <HomeDetails />
        <Button />
      </Box>
    </div>
  );
}

function Box({ children }) {
  return <div className="container">{children}</div>;
}

function HomeDetails() {
  return (
    <div className="container-box">
      <h3>
        So, you want to travel to <br />
        <span>Space</span>
      </h3>
      <div>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="btn-box--home">
      <NavLink to="/destination" style={{ textDecoration: "none" }}>
        <button className="btn-home">Explore</button>
      </NavLink>
    </div>
  );
}
