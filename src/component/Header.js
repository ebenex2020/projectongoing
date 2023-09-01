/** @format */
import React, { useState } from "react";

import logo from "../logo.svg";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const MainNav = styled.div`
  height: 9rem;
  font-family: "Barlow Condensed", sans-serif;
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  align-items: center;
  padding: 2rem 0 2rem 3rem;

  .logo {
    width: 4.8rem;
    aspect-ratio: 1;
    border: none;
    border-radius: 50%;
  }

  hr {
    // width: 120%;
    height: 0.1rem;
    opacity: 0.15148;
  }

  .btn-toggle {
    display: none;
  }

  @media (max-width: 850px) {
    hr {
      display: none;
    }
  }

  @media (max-width: 660px) {
    .btn-toggle {
      display: block;
      height: 5rem;
      aspect-ratio: 1;
      border: none;
      color: #fff;
      position: absolute;
      top: 6rem;
      right: 2rem;
      background: none;
      z-index: 9999;
    }
  }
`;

const NavUnlisted = styled.ul`
  list-style: none;
  font-size: 1.6rem;
  text-transform: uppercase;
  padding-block: 4.5rem;
  padding-inline: clamp(3rem,10vw,10rem) ;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 4rem;
  backdrop-filter: blur(4.0774227142333984rem);
  transition: transform 0.3s ease-in-out;

  a {
    text-decoration: none;
  }

  li {
    display: flex;
    gap: 0.5rem;
    color: #fff;
    letter-spacing: 0.27rem;
  }

  span {
    font-weight: 700;
    display: block;
  }

 

  @media (max-width: 850px) {
    span {
      display: none;
    }
  }

  @media (max-width: 660px) {
    position: fixed;
    flex-flow: column;
    justify-content: start;
    align-items: start;
    inset:  0 0 0 30%;
    z-index: 100;
    padding-top: 15rem;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};

    li {
      padding: 1.5rem;
    }

    span {
      display: block;
    }
  }

  
}
`;

const StyledBurger = styled.div`
  width: 3rem;
  height: 3rem;
  position: fixed;
  top: 5.5rem;
  right: 2rem;
  justify-content: space-between;
  flex-flow: column nowrap;
  z-index: 9999;
  display: none;

  @media (max-width: 660px) {
    display: flex;
  }

  div {
    width: 100%;
    height: 0.25rem;
    background-color: ${({ isOpen }) => (isOpen ? "#ccc" : "#fff")};
    border-radius: 1rem;
    transform-origin: -4px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const links = [
  { index: "00", name: "Home", path: "/" },
  { index: "01", name: "Destination", path: "/destination" },
  { index: "02", name: "Crew", path: "/crew" },
  { index: "03", name: "Technology", path: "/technology" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MainNav>
      <Link to="/" reloadDocument>
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <hr />
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavUnlisted isOpen={isOpen}>
        {links.map((link) => (
          <NavLink key={link.index} to={link.path} exact>
            <li>
              <span aria-hidden="true">{link.index}</span>
              {link.name}
            </li>
          </NavLink>
        ))}
      </NavUnlisted>
    </MainNav>
  );
}

function Hamburger({ isOpen, setIsOpen }) {
  return (
    <StyledBurger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}
