/** @format */
import React from "react";

import logo from "../logo.svg";
import HeaderCss from "./Header.module.css";

// const navs = ["00 Home", "01 Destination", "02 Crew", "03 Technology"];

const texts = [
  {
    bold: "00",
    normal: "Home",
  },
  {
    bold: "01",
    normal: "Destination",
  },
  {
    bold: "02",
    normal: "Crew",
  },
  {
    bold: "03",
    normal: "Technology",
  },
];

const Header = () => {
  const renderedTexts = texts.map((text) => {
    return (
      <li key={text.bold}>
        <a className={HeaderCss.list} href="coming">
          <strong>{text.bold}</strong> {text.normal}
        </a>
      </li>
    );
  });

  return (
    <div className={HeaderCss.nav}>
      <a href="ress">
        <img src={logo} alt="logo" className={HeaderCss.logo} />
      </a>
      <hr />
      <ul className={HeaderCss.lists}>{renderedTexts}</ul>
    </div>
  );
};

export default Header;
