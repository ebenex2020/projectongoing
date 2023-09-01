/** @format */

import Data from "./data.json";

import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Destination from "./component/Destination";
import Crew from "./component/Crew";
import Technology from "./component/Technology";

const data = Data;

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/destination"
          element={<Destination destination={data.destinations} />}
        />
        <Route path="/crew" element={<Crew crew={data.crew} />} />
        <Route
          path="/technology"
          element={<Technology technology={data.technology} />}
        />
      </Routes>
    </>
  );
};

export default App;
