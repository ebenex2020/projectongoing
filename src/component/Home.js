/** @format */

import Header from "./Header";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="container">
        <div className="container-box">
          <h3>So, you want to travel to</h3>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="btn-box">
          <button className="btn">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
